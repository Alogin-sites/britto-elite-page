import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingOrb = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
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

const PortfolioBackground3D = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ffffff" />
      
      <FloatingOrb position={[-4, 2, -5]} color="#ffffff" speed={0.5} />
      <FloatingOrb position={[4, -2, -8]} color="#ffffff" speed={0.7} />
      <FloatingOrb position={[0, 0, -10]} color="#ffffff" speed={0.6} />
    </>
  );
};

export default PortfolioBackground3D;
