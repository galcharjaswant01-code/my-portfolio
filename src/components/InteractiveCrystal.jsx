import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles, MeshTransmissionMaterial, Float, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveCrystal = () => {
  const crystalRef = useRef();
  const innerRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Mouse tracking for subtle rotation
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    // Lerp mouse position for smooth rotation tracking
    mousePosition.current.x = THREE.MathUtils.lerp(mousePosition.current.x, state.mouse.x, 0.05);
    mousePosition.current.y = THREE.MathUtils.lerp(mousePosition.current.y, state.mouse.y, 0.05);

    // Idle rotation + mouse parallax
    if (crystalRef.current) {
      targetRotation.current.x = mousePosition.current.y * 0.5 + state.clock.elapsedTime * 0.1;
      targetRotation.current.y = mousePosition.current.x * 0.5 + state.clock.elapsedTime * 0.15;
      
      crystalRef.current.rotation.x = targetRotation.current.x;
      crystalRef.current.rotation.y = targetRotation.current.y;
    }

    // Inner core counter-rotation and pulsing
    if (innerRef.current) {
      innerRef.current.rotation.x = -targetRotation.current.x * 2;
      innerRef.current.rotation.y = -targetRotation.current.y * 2;
      
      const pulse = hovered ? 1.2 : 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      innerRef.current.scale.lerp(new THREE.Vector3(pulse, pulse, pulse), 0.1);
    }
  });

  return (
    <group 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        
        {/* Outer Glass Crystal */}
        <Octahedron ref={crystalRef} args={[2.5, 0]}>
          <MeshTransmissionMaterial 
            color="#b026ff"
            resolution={512}
            thickness={0.5}
            roughness={0.1}
            ior={1.5}
            chromaticAberration={0.4}
            transmission={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Octahedron>

        {/* Outer Wireframe Glow */}
        <Octahedron args={[2.55, 0]}>
          <meshBasicMaterial 
            color={hovered ? "#00f0ff" : "#b026ff"}
            wireframe 
            transparent 
            opacity={hovered ? 0.3 : 0.1} 
            blending={THREE.AdditiveBlending}
          />
        </Octahedron>

        {/* Inner Solid Energy Core */}
        <Octahedron ref={innerRef} args={[1.2, 0]}>
          <meshPhysicalMaterial 
            color="#00f0ff"
            emissive={hovered ? "#00f0ff" : "#b026ff"}
            emissiveIntensity={hovered ? 3 : 1}
            roughness={0.2}
            metalness={0.8}
          />
        </Octahedron>

        {/* Ambient light emitted by the crystal */}
        <pointLight color={hovered ? "#00f0ff" : "#b026ff"} intensity={hovered ? 15 : 5} distance={10} />

        {/* Orbiting Particles */}
        <Sparkles 
          count={100} 
          scale={hovered ? 6 : 4} 
          size={hovered ? 4 : 2} 
          speed={hovered ? 0.8 : 0.3} 
          opacity={0.5} 
          color="#00f0ff" 
        />
        <Sparkles 
          count={50} 
          scale={5} 
          size={3} 
          speed={0.2} 
          opacity={0.3} 
          color="#ff007f" 
        />
      </Float>
    </group>
  );
};

export default InteractiveCrystal;
