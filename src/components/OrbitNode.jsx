import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const OrbitNode = ({ 
  skill, 
  radius, 
  speed, 
  angleOffset, 
  color = "#00f0ff", 
  yOffset = 0 
}) => {
  const groupRef = useRef();
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [currentAngle, setCurrentAngle] = useState(angleOffset);

  useFrame((state, delta) => {
    // Slow down orbit when hovered
    const currentSpeed = hovered ? speed * 0.1 : speed;
    const newAngle = currentAngle + currentSpeed * delta;
    setCurrentAngle(newAngle);

    // Calculate position on the orbit ring
    const x = Math.cos(newAngle) * radius;
    const z = Math.sin(newAngle) * radius;
    
    // Add a slight sine wave floating effect to the y position
    const y = yOffset + Math.sin(state.clock.elapsedTime * 2 + angleOffset) * 0.2;

    if (groupRef.current) {
      // Smoothly interpolate position for buttery smooth motion
      groupRef.current.position.lerp(new THREE.Vector3(x, y, z), 0.1);
    }

    if (meshRef.current) {
      // Rotate the node itself
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 1.5;
      
      // Pulse animation
      const scale = hovered ? 1.5 : 1 + Math.sin(state.clock.elapsedTime * 3 + angleOffset) * 0.1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Holographic Node */}
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[0.3, 0]} />
        <meshPhysicalMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2 : 0.8}
          transparent
          opacity={0.8}
          wireframe={!hovered}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Ambient Glow */}
      <mesh>
        <sphereGeometry args={[hovered ? 0.6 : 0.4, 32, 32]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={hovered ? 0.3 : 0.1} 
          blending={THREE.AdditiveBlending} 
          depthWrite={false}
        />
      </mesh>

      {/* Floating Contextual Skill Card */}
      {hovered && (
        <Html distanceFactor={10} position={[0, 1.5, 0]} center zIndexRange={[100, 0]}>
          <div className="w-64 p-4 rounded-xl glass-panel animate-fade-in pointer-events-none" style={{
            boxShadow: `0 0 20px ${color}40`,
            border: `1px solid ${color}80`
          }}>
            <h4 className="text-lg font-display font-bold text-white mb-1 drop-shadow-md">{skill.category}</h4>
            <div className="h-0.5 w-full rounded-full mb-3 overflow-hidden bg-white/10">
              <div className="h-full rounded-full" style={{ width: `${skill.level}%`, backgroundColor: color }}></div>
            </div>
            <p className="text-xs text-white/70 mb-2 font-medium">{skill.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {skill.tech.map((tech, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

export default OrbitNode;
