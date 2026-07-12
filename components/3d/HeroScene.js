'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import styles from './HeroScene.module.css';

function FabricPiece({ position, color, scale, speed }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.15;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <planeGeometry args={[4, 4, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={2}
          roughness={0.15}
          metalness={0.6}
          transparent
          opacity={0.85}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#FFF5F0" />
      <directionalLight position={[-5, -5, 5]} intensity={0.4} color="#FFD1D1" />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#B76E79" />

      <FabricPiece position={[-2.5, 0.5, 0]} color="#B76E79" scale={1.2} speed={1.5} />
      <FabricPiece position={[2.5, -0.5, -1]} color="#D4A0A7" scale={1} speed={1.8} />
      <FabricPiece position={[0, 0, -2]} color="#C9A96E" scale={0.8} speed={1.2} />

      <Sparkles count={80} scale={12} size={1.5} speed={0.3} color="#B76E79" opacity={0.4} />

      <Environment preset="city" />
    </>
  );
}

export default function HeroScene() {
  return (
    <section className={styles.hero}>
      <div className={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
          <Scene />
        </Canvas>
      </div>

      <div className={styles.content}>
        <span className={styles.label}>Summer Collection 2024</span>
        <h1 className={styles.title}>Elegance in<br/>Every Thread</h1>
        <p className={styles.subtitle}>Discover the most premium women's clothing from top Pakistani brands.</p>
        <div className={styles.ctas}>
          <a href="/collections" className={styles.btnPrimary}>Explore Collection</a>
          <a href="/new-arrivals" className={styles.btnSecondary}>New Arrivals</a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
