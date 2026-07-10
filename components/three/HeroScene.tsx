"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Device() {
  const group = useRef<Group>(null);
  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.18 - group.current.rotation.y) * delta * 2.5;
    group.current.rotation.x += (-pointer.y * 0.1 - group.current.rotation.x) * delta * 2.5;
  });

  return (
    <Float speed={1.25} rotationIntensity={0.16} floatIntensity={0.38}>
      <group ref={group} rotation={[0.08, -0.2, -0.05]}>
        <RoundedBox args={[2.5, 4.9, 0.28]} radius={0.28} smoothness={5}>
          <meshPhysicalMaterial color="#090c14" metalness={0.72} roughness={0.22} clearcoat={1} />
        </RoundedBox>
        <mesh position={[0, 0, 0.155]}>
          <planeGeometry args={[2.24, 4.55]} />
          <meshStandardMaterial color="#071b2d" emissive="#034a65" emissiveIntensity={0.45} />
        </mesh>
        <mesh position={[0, 0.15, 0.19]}>
          <torusGeometry args={[0.62, 0.035, 12, 64]} />
          <meshStandardMaterial color="#65e9ff" emissive="#00b9ee" emissiveIntensity={3} />
        </mesh>
        <mesh position={[0, 0.15, 0.19]}>
          <icosahedronGeometry args={[0.42, 1]} />
          <meshStandardMaterial color="#8a71ff" emissive="#6a46ff" emissiveIntensity={1.5} wireframe />
        </mesh>
        {[-1.45, -1.05, -0.65].map((y, i) => (
          <mesh key={y} position={[0, y, 0.19]}>
            <planeGeometry args={[1.45 - i * 0.18, 0.07]} />
            <meshStandardMaterial color={i === 0 ? "#8f6bff" : "#26d9ff"} emissiveIntensity={2} emissive={i === 0 ? "#8f6bff" : "#26d9ff"} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.4], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.45} />
        <pointLight position={[4, 4, 5]} color="#8b65ff" intensity={24} />
        <pointLight position={[-4, -2, 3]} color="#00d9ff" intensity={18} />
        <Sparkles count={44} scale={[7, 6, 3]} size={1.3} speed={0.25} color="#78ddff" />
        <Device />
      </Canvas>
    </div>
  );
}
