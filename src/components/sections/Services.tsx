"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { Layout, Code2, Sparkles, ShoppingBag, ArrowUpRight } from "lucide-react";

export function Services() {
  const icons = [
    <Layout key="layout" className="w-6 h-6 text-[#080808]" />,
    <Code2 key="code" className="w-6 h-6 text-[#080808]" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-[#080808]" />,
    <ShoppingBag key="shop" className="w-6 h-6 text-[#080808]" />,
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F7F6F2] border-t border-[#DAD9D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 lg:mb-18">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#B7F500] border border-black/20" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase">
              CAPABILITIES &amp; EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#080808] uppercase leading-[0.95]">
            WHAT I CAN DO FOR YOU
            <span className="text-[#B7F500]">.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#666666] max-w-2xl">
            End-to-end digital craft tailored to high-growth brands and ambitious founders.
            Every solution is engineered for performance, aesthetic resonance, and measurable outcomes.
          </p>
        </div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative p-7 sm:p-9 rounded-2xl bg-white border border-[#DAD9D3] flex flex-col justify-between transition-all duration-300 hover:border-[#080808] hover:shadow-xl"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F6F2] border border-[#DAD9D3] flex items-center justify-center group-hover:bg-[#B7F500] transition-colors duration-300">
                    {icons[idx]}
                  </div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#777777] bg-[#F7F6F2] px-3 py-1 rounded-full border border-[#DAD9D3]">
                    {service.number}
                  </span>
                </div>

                <div className="text-[11px] font-mono font-bold tracking-widest text-[#777777] uppercase mb-1">
                  {service.subtitle}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#080808] tracking-tight group-hover:text-[#080808] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#555555] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Pills */}
              <div className="mt-8 pt-6 border-t border-[#DAD9D3]">
                <div className="text-xs font-mono font-bold text-[#080808] uppercase mb-3">
                  Key Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#F7F6F2] text-[#444444] border border-[#DAD9D3]/70 group-hover:border-[#080808]/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accent Corner Arrow on Hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 rounded-full bg-[#080808] text-[#B7F500] flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
