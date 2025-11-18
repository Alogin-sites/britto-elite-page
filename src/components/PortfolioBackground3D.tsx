import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

const Particles = ({ count = 100 }: { count?: number }) => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ] as [number, number, number],
        speed: Math.random() * 0.5 + 0.2,
      });
    }
    return temp;
  }, [count]);

  return (
    <>
      {particles.map((particle, i) => (
        <Particle key={i} position={particle.position} speed={particle.speed} />
      ))}
    </>
  );
};

const Particle = ({ position, speed }: { position: [number, number, number], speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 2;
    meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.5) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </mesh>
  );
};

const FloatingOrb = ({ 
  position, 
  color, 
  speed, 
  scrollY 
}: { 
  position: [number, number, number], 
  color: string, 
  speed: number,
  scrollY: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5 + scrollY * 0.002;
    meshRef.current.position.z = position[2] + scrollY * 0.001;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const ConnectingLines = ({ positions }: { positions: [number, number, number][] }) => {
  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        temp.push([positions[i], positions[j]]);
      }
    }
    return temp;
  }, [positions]);

  return (
    <>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line}
          color="#ffffff"
          lineWidth={0.5}
          transparent
          opacity={0.2}
        />
      ))}
    </>
  );
};

const PortfolioBackground3D = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const orbPositions: [number, number, number][] = [
    [-4, 2, -5],
    [4, -2, -8],
    [0, 0, -10],
  ];

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ffffff" />
      <pointLight position={[10, -5, -5]} intensity={0.2} color="#ffffff" />
      
      <Particles count={150} />
      
      <ConnectingLines positions={orbPositions} />
      
      <FloatingOrb position={orbPositions[0]} color="#ffffff" speed={0.5} scrollY={scrollY} />
      <FloatingOrb position={orbPositions[1]} color="#ffffff" speed={0.7} scrollY={scrollY} />
      <FloatingOrb position={orbPositions[2]} color="#ffffff" speed={0.6} scrollY={scrollY} />
    </>
  );
};

export default PortfolioBackground3D;
