import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { FloatingOrbs } from './FloatingOrbs';

export const Scene3D = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 10, 30]} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <ParticleField count={1500} mouse={mouse} />
          <FloatingOrbs mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};
