'use client';

import { useEffect, useRef } from 'react';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Points,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  TextureLoader,
} from 'three';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface BackgroundProps {
  className?: string;
}

// Create circular texture
const createCircleTexture = (theme: string | undefined) => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const context = canvas.getContext('2d');
  if (!context) return null;

  const gradient = context.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    0,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 2,
  );

  if (theme === 'dark') {
    gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.6)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.3)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
  } else {
    gradient.addColorStop(0, 'rgba(0,0,0,0.8)');
    gradient.addColorStop(0.2, 'rgba(0,0,0,0.6)');
    gradient.addColorStop(0.4, 'rgba(0,0,0,0.3)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
  }

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  return canvas;
};

const Background = ({ className }: BackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<PerspectiveCamera | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const particlesRef = useRef<Points<BufferGeometry, PointsMaterial> | null>(
    null,
  );
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
    const scene = new Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles setup
    const particlesGeometry = new BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      'position',
      new BufferAttribute(posArray, 3),
    );

    const particlesMaterial = new PointsMaterial({
      size: 0.02,
      color: '#000000',
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });

    const particles = new Points(particlesGeometry, particlesMaterial);
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
    if (!particlesRef.current) return;

    if (resolvedTheme === 'dark') {
      (particlesRef.current?.material as PointsMaterial).color.set(
        'rgba(255, 255, 255, 0.5)',
      );
    } else {
      (particlesRef.current?.material as PointsMaterial).color.set(
        'rgba(0, 0, 0, 0.3)',
      );
    }

    const circleTexture = createCircleTexture(resolvedTheme);
    const textureLoader = new TextureLoader();
    const texture = circleTexture
      ? textureLoader.load(circleTexture.toDataURL())
      : null;
    particlesRef.current.material.map = texture;
    particlesRef.current.material.blending = 2;

    return () => {
      if (texture) {
        texture.dispose();
      }
    };
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
