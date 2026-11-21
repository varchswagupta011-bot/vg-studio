"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 350 });

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    // Hover triggers for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor='pointer']") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
    >
      <motion.div
        animate={{
          scale: isHovered ? 2.4 : 1,
          backgroundColor: isHovered ? "#B7F500" : "#080808",
          borderColor: isHovered ? "#080808" : "#B7F500",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-sm mix-blend-difference"
      />
    </motion.div>
  );
}
