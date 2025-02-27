"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";

const LogoParticles = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  let mouseX = 0, mouseY = 0;
  let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
  let particles: THREE.Points, geometry: THREE.BufferGeometry, material: THREE.PointsMaterial;

  useEffect(() => {
    function init() {
      scene = new THREE.Scene();

      // eslint-disable-next-line react-hooks/exhaustive-deps
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 5); // ✅ Fixed camera position

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

      loadLogoTexture();
      animate();
    }

    function loadLogoTexture() {
      const loader = new TextureLoader();
      loader.load("/logo.png", (texture) => {
        createParticles(texture);
      });
    }

    function createParticles(texture: THREE.Texture) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = 256;
      canvas.height = 256;

      ctx.drawImage(texture.image, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      geometry = new THREE.BufferGeometry();
      const positions: number[] = [];

      for (let y = 0; y < canvas.height; y += 4) {
        for (let x = 0; x < canvas.width; x += 4) {
          const index = (y * canvas.width + x) * 4;
          const a = pixels[index + 3];

          if (a > 128) {
            positions.push((x - canvas.width / 2) / 50, -(y - canvas.height / 2) / 50, 0);
          }
        }
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    }

    function animate() {
      requestAnimationFrame(animate);
      if (particles) {
        const positions = geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < positions.length; i += 3) {
            positions[i] += (mouseX * 0.01) * 0.02; // Make the movement relative
            positions[i + 1] += (mouseY * 0.01) * 0.02;
        }        

        geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    }

    function onMouseMove(event: MouseEvent) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    }

    window.addEventListener("mousemove", onMouseMove);

    init();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default LogoParticles;
