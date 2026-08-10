import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import OrbitNode from './OrbitNode';

const SKILL_CATEGORIES = [
  {
    category: "Frontend Edge",
    level: 95,
    desc: "Building highly interactive & responsive interfaces.",
    tech: ["React", "Tailwind CSS", "Next.js", "Framer Motion"],
    color: "#00f0ff",
    radius: 4,
    speed: 0.3,
    yOffset: 0
  },
  {
    category: "Backend & Systems",
    level: 85,
    desc: "Architecting scalable and secure server solutions.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    color: "#b026ff",
    radius: 5,
    speed: 0.2,
    yOffset: 1.5
  },
  {
    category: "3D Web & WebGL",
    level: 90,
    desc: "Crafting immersive browser-based 3D experiences.",
    tech: ["Three.js", "React Three Fiber", "GLSL", "Blender"],
    color: "#ff007f",
    radius: 6,
    speed: 0.25,
    yOffset: -1.5
  },
  {
    category: "Motion & Animation",
    level: 88,
    desc: "Designing buttery smooth cinematic animations.",
    tech: ["GSAP", "Lenis", "Framer Motion", "Spring"],
    color: "#00f0ff",
    radius: 4.5,
    speed: 0.4,
    yOffset: -0.5
  }
];

// Inner glowing core of the sphere
const CentralCore = () => {
  const coreRef = useRef();
  
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.005;
      coreRef.current.rotation.x += 0.002;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={coreRef}>
      {/* Outer Wireframe Sphere */}
      <Sphere args={[2, 32, 32]}>
        <meshStandardMaterial 
          color="#b026ff" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#b026ff"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Inner Solid Core */}
      <Sphere args={[1.8, 64, 64]}>
        <meshPhysicalMaterial 
          color="#050505"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
      
      {/* Core Glow */}
      <pointLight color="#b026ff" intensity={20} distance={10} />
    </group>
  );
};

// Orbital Rings to visualize the paths
const OrbitRings = () => {
  return (
    <group rotation={[Math.PI / 6, 0, 0]}>
      {[4, 4.5, 5, 6].map((radius, idx) => (
        <mesh key={idx} rotation-x={Math.PI / 2}>
          <ringGeometry args={[radius - 0.02, radius, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.05} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

const SkillsSphere = () => {
  const groupRef = useRef();

  useFrame((state) => {
    // Slight floating movement for the entire system
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <CentralCore />
      
      {/* Subtle orbital path visualization */}
      <OrbitRings />
      
      {/* Surrounding particle field */}
      <Sparkles count={200} scale={15} size={2} speed={0.2} opacity={0.3} color="#00f0ff" />
      <Sparkles count={100} scale={15} size={3} speed={0.1} opacity={0.2} color="#ff007f" />

      {/* Orbiting Nodes mapping */}
      <group rotation={[Math.PI / 6, 0, 0]}>
        {SKILL_CATEGORIES.map((skill, idx) => (
          <OrbitNode 
            key={idx}
            skill={skill}
            radius={skill.radius}
            speed={skill.speed}
            angleOffset={(Math.PI * 2 / SKILL_CATEGORIES.length) * idx}
            color={skill.color}
            yOffset={skill.yOffset}
          />
        ))}
      </group>
    </group>
  );
};

export default SkillsSphere;
