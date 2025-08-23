// File: src/components/ParticleBackground.jsx

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarParticles = (props) => {
  const ref = useRef();
  
  const points = useMemo(() => {
    const p = new Float32Array(props.count * 3);
    for (let i = 0; i < props.count * 3; i++) {
      p[i] = (Math.random() - 0.5) * props.boxSize;
    }
    return p;
  }, [props.count, props.boxSize]);
  
  // This is the updated, simpler animation loop
  useFrame((state, delta) => {
    // This will now create a constant, gentle rotation on two axes
    ref.current.rotation.x += delta / 20;
    ref.current.rotation.y += delta / 25;
  });
  
  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={props.color}
        size={props.size}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarParticles count={5000} boxSize={3} size={0.005} color="#ffffff" />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;