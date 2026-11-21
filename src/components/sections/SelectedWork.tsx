"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, Project } from "@/config/siteConfig";
import { ProjectMockup } from "../mockups/ProjectMockup";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, ExternalLink, Monitor, Tablet, Smartphone } from "lucide-react";

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const projects = siteConfig.projects;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#F7F6F2] border-t border-[#DAD9D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#B7F500] border border-black/20" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#080808] uppercase leading-[0.95]">
              A FEW THINGS I&apos;VE BUILT
              <span className="text-[#B7F500]">.</span>
            </h2>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full border border-[#DAD9D3] bg-white flex items-center justify-center text-[#080808] hover:bg-[#080808] hover:text-[#B7F500] hover:border-[#080808] transition-colors duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-11 h-11 rounded-full border border-[#DAD9D3] bg-white flex items-center justify-center text-[#080808] hover:bg-[#080808] hover:text-[#B7F500] hover:border-[#080808] transition-colors duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Column Project Grid (or Responsive Carousel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {projects.map((project, idx) => {
            const isFeatured = idx === activeIndex;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl ${
                  isFeatured ? "border-[#080808] ring-1 ring-[#080808]" : "border-[#DAD9D3]"
                }`}
              >
                {/* Visual Mockup Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                >
                  <ProjectMockup
                    type={project.previewMockup.imageType}
                    className="transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                {/* Project Info */}
                <div className="mt-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#777777] mb-1.5">
                      <span className="font-bold text-[#080808]">{project.number} / {project.type}</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#080808] tracking-tight group-hover:text-[#B7F500] transition-colors">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="mt-5 pt-3.5 border-t border-[#DAD9D3] flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#080808] uppercase">
                      {project.number} / {project.type}
                    </span>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-[#080808] hover:text-[#B7F500] transition-colors cursor-pointer"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F7F6F2] w-full max-w-4xl rounded-2xl border border-[#DAD9D3] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#DAD9D3] bg-white">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold bg-[#080808] text-white px-2 py-0.5 rounded">
                    {selectedProject.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#080808]">
                      {selectedProject.name}
                    </h3>
                    <p className="text-xs text-[#777777]">{selectedProject.category}</p>
                  </div>
                </div>

                {/* Device Viewport Switcher */}
                <div className="hidden sm:flex items-center gap-1 bg-[#F7F6F2] p-1 rounded-lg border border-[#DAD9D3]">
                  <button
                    onClick={() => setPreviewDevice("desktop")}
                    className={`p-1.5 rounded-md transition-colors ${
                      previewDevice === "desktop" ? "bg-white shadow-xs text-black" : "text-zinc-500"
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice("tablet")}
                    className={`p-1.5 rounded-md transition-colors ${
                      previewDevice === "tablet" ? "bg-white shadow-xs text-black" : "text-zinc-500"
                    }`}
                    title="Tablet Preview"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewDevice("mobile")}
                    className={`p-1.5 rounded-md transition-colors ${
                      previewDevice === "mobile" ? "bg-white shadow-xs text-black" : "text-zinc-500"
                    }`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#080808] text-white text-xs font-bold hover:bg-[#B7F500] hover:text-[#080808] transition-colors"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-full hover:bg-black/5 text-[#080808]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#eae8e0]/40">
                <div
                  className={`transition-all duration-300 w-full ${
                    previewDevice === "mobile"
                      ? "max-w-[320px]"
                      : previewDevice === "tablet"
                      ? "max-w-[580px]"
                      : "max-w-full"
                  }`}
                >
                  <ProjectMockup type={selectedProject.previewMockup.imageType} />
                </div>

                <div className="mt-6 w-full bg-white p-5 rounded-xl border border-[#DAD9D3]">
                  <h4 className="text-sm font-mono font-bold tracking-wider text-[#080808] uppercase mb-1">
                    PROJECT OVERVIEW &amp; SPECIFICATIONS
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#F7F6F2] border border-[#DAD9D3] text-[#080808]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
