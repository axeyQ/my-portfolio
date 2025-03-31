'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

export default function HeroModel() {
  const meshRef = useRef();
  
  // Animate the mesh on each frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the mesh slowly
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Make the mesh float up and down slightly
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = MathUtils.lerp(
        meshRef.current.position.y,
        Math.sin(time) * 0.2,
        0.1
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial 
        color="#4cc9f0"
        metalness={0.6}
        roughness={0.2}
        emissive="#4cc9f0"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}