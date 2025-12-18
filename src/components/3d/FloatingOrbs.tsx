import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingOrbsProps {
  mouse: { x: number; y: number };
}

export const FloatingOrbs = ({ mouse }: FloatingOrbsProps) => {
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  const orb3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (orb1.current) {
      orb1.current.position.x = Math.sin(time * 0.3) * 3 + mouse.x * 2;
      orb1.current.position.y = Math.cos(time * 0.2) * 2 + mouse.y * 2;
      orb1.current.rotation.x = time * 0.2;
    }

    if (orb2.current) {
      orb2.current.position.x = Math.cos(time * 0.4) * 4 - mouse.x * 1.5;
      orb2.current.position.y = Math.sin(time * 0.3) * 2.5 - mouse.y * 1.5;
      orb2.current.rotation.y = time * 0.3;
    }

    if (orb3.current) {
      orb3.current.position.x = Math.sin(time * 0.25) * 5;
      orb3.current.position.y = Math.cos(time * 0.35) * 3;
      orb3.current.rotation.z = time * 0.1;
    }
  });

  return (
    <>
      <Sphere ref={orb1} args={[1, 64, 64]} position={[3, 0, -5]}>
        <MeshDistortMaterial
          color="#00f0ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>

      <Sphere ref={orb2} args={[0.7, 64, 64]} position={[-4, 2, -6]}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0}
          metalness={0.9}
          transparent
          opacity={0.5}
        />
      </Sphere>

      <Sphere ref={orb3} args={[0.5, 64, 64]} position={[0, -3, -4]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={2.5}
          roughness={0}
          metalness={0.7}
          transparent
          opacity={0.4}
        />
      </Sphere>
    </>
  );
};
