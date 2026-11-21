"use client";

import React from "react";
import { motion } from "framer-motion";
import { VGLogo } from "../common/VGLogo";
import { Compass, PenTool, Terminal, ShieldCheck } from "lucide-react";

export function About() {
  const philosophies = [
    {
      icon: <Compass className="w-5 h-5 text-[#080808]" />,
      title: "Creative Approach",
      description:
        "Every brand holds a distinct narrative. I strip away the superfluous and elevate core identities through bold editorial typography, intentional whitespace, and balanced composition.",
    },
    {
      icon: <PenTool className="w-5 h-5 text-[#080808]" />,
      title: "Design Philosophy",
      description:
        "Form and function are inseparable. Design must not only look striking on first glance but provide intuitive navigation, clear hierarchy, and natural user flows.",
    },
    {
      icon: <Terminal className="w-5 h-5 text-[#080808]" />,
      title: "Development Philosophy",
      description:
        "Engineered with modern standards using Next.js and TypeScript. Clean architecture, sub-second load times, fluid 60fps animations, and robust cross-platform responsiveness.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#080808]" />,
      title: "Detail & Performance",
      description:
        "From typography scale to semantic HTML and Core Web Vitals, every micro-detail is rigorously polished to create lasting digital assets.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F6F2] border-t border-[#DAD9D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Tag */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#B7F500] border border-black/20" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase">
            STUDIO IDENTITY &amp; PHILOSOPHY
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#080808] uppercase leading-[0.95] mb-8">
          MORE THAN JUST WEBSITES
          <span className="text-[#B7F500]">.</span>
        </h2>

        {/* Main Manifesto Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#DAD9D3] shadow-md overflow-hidden mb-12"
        >
          {/* Subtle Graphic Accents */}
          <div className="absolute top-6 right-6 opacity-20 pointer-events-none hidden sm:block">
            <VGLogo size={70} />
          </div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#B7F500]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#777777] uppercase mb-4">
              ABOUT VG STUDIO
            </span>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#080808] leading-snug">
              &ldquo;VG STUDIO is focused on creating digital experiences that combine creativity, functionality, and performance. Every project is designed with attention to detail, usability, and a modern visual identity.&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[#DAD9D3] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#666666]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B7F500]" />
                <span className="font-bold text-[#080808]">INDEPENDENT STUDIO</span>
                <span>• INDIA</span>
              </div>
              <div>
                <span>EST. 2026 • DIGITAL CRAFT</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/70 border border-[#DAD9D3] flex flex-col justify-between hover:bg-white hover:border-[#080808] transition-all duration-300 shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F7F6F2] border border-[#DAD9D3] flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[#080808] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DAD9D3]/70 text-[10px] font-mono text-[#888888]">
                PILLAR 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
