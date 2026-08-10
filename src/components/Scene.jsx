import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Minimal, soft particles to create depth without distraction */}
      <Stars radius={80} depth={40} count={600} factor={3} saturation={0.5} fade speed={0.5} />
      <Sparkles count={40} scale={12} size={3} speed={0.15} opacity={0.15} color="#3b82f6" />
    </group>
  );
};

const CameraRig = () => {
  const { camera, pointer } = useThree();
  const vec = new THREE.Vector3();
  
  useFrame(() => {
    // Subtle parallax effect on mouse move
    camera.position.lerp(vec.set(pointer.x * 0.8, pointer.y * 0.8, 8), 0.05);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

const Scene = () => {
  return (
    <>
      <CameraRig />
      
      {/* Clean, ambient light setup */}
      <ambientLight intensity={0.5} />
      
      {/* Soft blue-ish highlight */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-5, 5, -2]} intensity={0.5} color="#6366f1" />
      
      {/* Soft Fog */}
      <fog attach="fog" args={['#030303', 6, 15]} />

      <Particles />
    </>
  );
};

export default Scene;
