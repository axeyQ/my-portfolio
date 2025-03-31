'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment, Preload } from '@react-three/drei';

export default function ThreeCanvas({ children, className = '', ...props }) {
  return (
    <div className={`canvas-container ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]} // Dynamic pixel ratio
        gl={{ antialias: true, alpha: true }} // Enable transparency and antialiasing
        {...props}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {children}
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}