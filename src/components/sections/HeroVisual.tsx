"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ProjectMockup } from "../mockups/ProjectMockup";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothMouseX, [-200, 200], [-10, 10]);
  const rotateX = useTransform(smoothMouseY, [-200, 200], [8, -8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] mx-auto py-8 lg:py-4 select-none perspective-[1200px]"
    >
      {/* Hand-drawn Annotation & Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="absolute -top-6 left-1/3 sm:left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none"
      >
        <span className="font-mono text-xs md:text-sm font-bold tracking-wider text-[#080808] uppercase bg-[#B7F500]/30 px-2 py-0.5 rounded border border-[#080808]/20 shadow-sm">
          DESIGN / DEVELOPMENT
        </span>
        {/* Hand-drawn curved arrow SVG */}
        <svg
          width="50"
          height="45"
          viewBox="0 0 50 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-0.5 text-[#080808]"
        >
          <path
            d="M8 2 C 14 18, 28 28, 40 38"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 0"
          />
          {/* Arrowhead */}
          <path
            d="M32 38 L 42 39 L 41 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Neon Lime 4-Point Sparkle Star */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="absolute -top-3 right-4 sm:right-10 z-30 pointer-events-none"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          className="drop-shadow-[0_0_12px_rgba(183,245,0,0.8)] animate-pulse"
        >
          <path
            d="M18 0 C 18 10, 26 18, 36 18 C 26 18, 18 26, 18 36 C 18 26, 10 18, 0 18 C 10 18, 18 10, 18 0 Z"
            fill="#B7F500"
          />
        </svg>
      </motion.div>

      {/* Floating 3D Card Stack */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[16/11] flex items-center justify-center transition-transform duration-200"
      >
        {/* Background Layer Card 1: School Website (Left/Center behind) */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20, rotate: -8 }}
          animate={{ opacity: 0.9, x: -25, y: -25, rotate: -8 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[80%] left-0 top-2 z-10 opacity-85 hover:opacity-100 transition-opacity drop-shadow-xl"
        >
          <div className="transform scale-95 pointer-events-none">
            <ProjectMockup type="education" isInteractive={false} />
          </div>
        </motion.div>

        {/* Background Layer Card 2: E-commerce Sneaker (Right behind) */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 10, rotate: 12 }}
          animate={{ opacity: 0.9, x: 55, y: -10, rotate: 10 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[75%] right-0 top-8 z-15 opacity-85 hover:opacity-100 transition-opacity drop-shadow-2xl"
        >
          <div className="transform scale-95 pointer-events-none">
            <ProjectMockup type="ecommerce" isInteractive={false} />
          </div>
        </motion.div>

        {/* Main Foreground Layer Card: Dark Modern Architectural Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          className="relative w-[88%] z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] -rotate-1 cursor-pointer"
        >
          <ProjectMockup type="hero-main" isInteractive={true} />
        </motion.div>
      </motion.div>
    </div>
  );
}
