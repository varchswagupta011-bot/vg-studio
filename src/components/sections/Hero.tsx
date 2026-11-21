"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ArrowDown } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-14 lg:pb-20 overflow-hidden bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Label with Connecting Thin Border */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6 sm:mb-8"
        >
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#080808] uppercase whitespace-nowrap">
            INDEPENDENT DESIGNER &amp; DEVELOPER • INDIA
          </span>
          <div className="h-[1px] flex-1 bg-[#DAD9D3]" aria-hidden="true" />
        </motion.div>

        {/* 2-Column Hero Grid: Left Typography, Right 3D Mockup Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Massive Editorial Typography & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-[#080808] leading-[0.92] uppercase select-none"
            >
              I BUILD DIGITAL
              <br />
              EXPERIENCES
              <span className="text-[#B7F500] inline-block drop-shadow-[0_0_10px_rgba(183,245,0,0.8)] font-black">
                .
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-[#555555] font-normal leading-relaxed max-w-xl"
            >
              I design and develop clean, fast, and memorable websites for brands, businesses, and ideas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Primary Pill Button */}
              <button
                onClick={scrollToServices}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#080808] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#202020] hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowDownRight className="w-4 h-4 text-[#B7F500] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              {/* Secondary Light Pill Button */}
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-transparent text-[#080808] border border-[#080808]/80 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#080808] hover:text-white hover:border-[#080808] active:scale-95 cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Visual Mockup Stack */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center">
            <HeroVisual />
          </div>
        </div>

        {/* Hero Bottom Bar / Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 sm:mt-20 pt-6 border-t border-[#DAD9D3] flex items-center justify-between text-xs text-[#777777] font-mono"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#080808]">VG STUDIO</span>
            <span>© 2026</span>
          </div>

          <button
            onClick={scrollToServices}
            className="group flex items-center gap-2 text-[#080808] hover:text-[#B7F500] transition-colors cursor-pointer"
          >
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase">
              SCROLL TO EXPLORE
            </span>
            <div className="w-6 h-6 rounded-full border border-[#DAD9D3] flex items-center justify-center group-hover:border-[#080808] group-hover:bg-[#080808] transition-colors">
              <ArrowDown className="w-3 h-3 group-hover:text-[#B7F500] transition-colors" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
