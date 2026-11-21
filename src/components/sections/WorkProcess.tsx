"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

export function WorkProcess() {
  const stepIcons = [
    <Search key="search" className="w-5 h-5" />,
    <PenTool key="design" className="w-5 h-5" />,
    <Code2 key="dev" className="w-5 h-5" />,
    <Rocket key="launch" className="w-5 h-5" />,
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F7F6F2] border-t border-[#DAD9D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#B7F500] border border-black/20" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase">
              STRUCTURED WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#080808] uppercase leading-[0.95]">
            FROM IDEA TO DIGITAL EXPERIENCE
            <span className="text-[#B7F500]">.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#666666] max-w-2xl">
            A transparent four-phase framework designed to eliminate guesswork, accelerate delivery, and ensure excellence at every checkpoint.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Horizontal connecting line on Desktop */}
          <div
            className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-[2px] bg-[#DAD9D3] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {siteConfig.processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col p-6 sm:p-7 rounded-2xl bg-white border border-[#DAD9D3] hover:border-[#080808] hover:shadow-lg transition-all duration-300"
              >
                {/* Milestone Node */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#080808] text-white flex items-center justify-center group-hover:bg-[#B7F500] group-hover:text-[#080808] transition-colors duration-300 shadow-sm">
                    {stepIcons[idx]}
                  </div>

                  <span className="text-2xl font-black font-mono text-[#DAD9D3] group-hover:text-[#080808] transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Subtitle Tag */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#777777] uppercase mb-1">
                  PHASE {step.step} • {step.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-[#080808] tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {step.description}
                </p>

                {/* Progress bar inside card */}
                <div className="mt-6 pt-4 border-t border-[#DAD9D3]">
                  <div className="w-full bg-[#F7F6F2] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#080808] h-full rounded-full group-hover:bg-[#B7F500] transition-colors"
                      style={{ width: `${(idx + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
