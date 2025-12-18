import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  mouse: { x: number; y: number };
}

export const ParticleField = ({ count = 2000, mouse }: ParticleFieldProps) => {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Spread particles in a sphere
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Cyan to purple gradient
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Cyan
        colors[i3] = 0;
        colors[i3 + 1] = 0.94;
        colors[i3 + 2] = 1;
      } else if (colorChoice < 0.66) {
        // Purple
        colors[i3] = 0.66;
        colors[i3 + 1] = 0.33;
        colors[i3 + 2] = 0.93;
      } else {
        // Blue
        colors[i3] = 0.23;
        colors[i3 + 1] = 0.51;
        colors[i3 + 2] = 0.96;
      }

      sizes[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotate based on mouse position
    mesh.current.rotation.x = time * 0.05 + mouse.y * 0.5;
    mesh.current.rotation.y = time * 0.08 + mouse.x * 0.5;

    // Update light position
    if (light.current) {
      light.current.position.x = Math.sin(time) * 3;
      light.current.position.y = Math.cos(time) * 3;
    }

    // Animate individual particles
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = particles.positions[i3];
      const y = particles.positions[i3 + 1];
      const z = particles.positions[i3 + 2];
      
      positions[i3] = x + Math.sin(time + i * 0.01) * 0.1;
      positions[i3 + 1] = y + Math.cos(time + i * 0.01) * 0.1;
      positions[i3 + 2] = z + Math.sin(time + i * 0.02) * 0.05;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} intensity={2} color="#00f0ff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#a855f7" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={particles.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={particles.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};
