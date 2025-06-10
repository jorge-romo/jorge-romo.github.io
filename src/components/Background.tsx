'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface BackgroundProps {
  className?: string;
}

const Background = ({ className }: BackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();

  // Cleanup function
  const cleanup = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (containerRef.current && rendererRef.current) {
      const canvas = rendererRef.current.domElement;
      if (canvas && canvas.parentNode === containerRef.current) {
        containerRef.current.removeChild(canvas);
      }
    }
    if (sceneRef.current) {
      sceneRef.current.clear();
    }
    if (rendererRef.current) {
      rendererRef.current.dispose();
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup previous instance
    cleanup();

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles setup
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#000000',
      transparent: true,
      opacity: 0.2,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation
    const animate = () => {
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0003;
        particlesRef.current.rotation.y += 0.0003;
      }

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cleanup();
    };
  }, []);

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      (particlesRef.current?.material as THREE.PointsMaterial).color.set(
        'rgba(255, 255, 255, 0.5)',
      );
    } else {
      (particlesRef.current?.material as THREE.PointsMaterial).color.set(
        'rgba(0, 0, 0, 0.3)',
      );
    }
  }, [resolvedTheme]);

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default Background;
