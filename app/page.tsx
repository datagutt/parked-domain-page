"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Cloud, Float, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Outline } from "@react-three/postprocessing";

function SmallCloud({ position }: { position: [number, number, number] }) {
  return (
    <Cloud
      position={position}
      opacity={0.7}
      speed={0.4}
      scale={2}
      segments={20}
      color="#E5F3FD"
    />
  );
}

function LargeCloud({ position }: { position: [number, number, number] }) {
  return (
    <Cloud
      position={position}
      opacity={0.8}
      speed={0.3}
      scale={6}
      color="#F5FBFF"
    />
  );
}

export default function ParkedDomainPage() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
          <Text
            font="/fonts/Inter-Bold.ttf"
            fontSize={0.8}
            position={[0, 1, 0]}
            color="white"
            material-toneMapped={true}
            anchorY="bottom"
          >
            parked by datagutt
            <meshStandardMaterial
              color="white"
              emissive="white"
              emissiveIntensity={0.5}
            />
          </Text>
        </Float>

        <group position={[0, -4, -8]}>
          <LargeCloud position={[-8, 1, -2]} />
          <SmallCloud position={[-5, -1, 0]} />
        </group>

        <group position={[0, 0, -4]}>
          <LargeCloud position={[5, 0, -1]} />
          <SmallCloud position={[3, 1, 1]} />
        </group>

        <group position={[0, 4, -4]}>
          {[...Array(10)].map((_, i) => (
            <SmallCloud
              key={i}
              position={[
                (Math.random() - 0.5) * (20 + i),
                -4 + Math.random() * 3,
                (Math.random() - 0.5) * 10 - 3,
              ]}
            />
          ))}
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={2}
          />
          <Outline
            blur
            visibleEdgeColor={0xffffff}
            edgeStrength={5}
            width={1000}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
