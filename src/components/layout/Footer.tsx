"use client";

import React from "react";
import { VGLogo } from "../common/VGLogo";
import { siteConfig } from "@/config/siteConfig";
import { ArrowUp, ArrowUpRight, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F7F6F2] border-t border-[#DAD9D3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#DAD9D3]">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="cursor-pointer" onClick={scrollToTop}>
              <VGLogo size={38} showText={true} />
            </div>

            <p className="mt-5 text-sm text-[#555555] leading-relaxed max-w-sm">
              Independent Web Designer &amp; Developer based in India. Crafting bespoke digital experiences with Next.js, motion, and precision typography.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7F500] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#080808]">
                {siteConfig.status}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-semibold text-[#080808] hover:text-[#B7F500] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase block mb-4">
              CONNECT &amp; INQUIRE
            </span>
            <p className="text-xs text-[#666666] mb-3">
              Direct inquiries and commissions:
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-mono font-bold text-[#080808] hover:text-[#B7F500] transition-colors block mb-1.5 underline"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-[#25D366] hover:underline block mb-5"
            >
              WhatsApp / Tel: {siteConfig.phone} ↗
            </a>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#DAD9D3] text-xs font-medium text-[#080808] hover:border-[#080808] transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#DAD9D3] text-xs font-medium text-[#080808] hover:border-[#080808] transition-colors"
              >
                <span>Twitter / X</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#DAD9D3] text-xs font-medium text-[#080808] hover:border-[#080808] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <div>
            <span>VG STUDIO © 2026. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> &amp; Next.js
            </span>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 font-bold text-[#080808] hover:text-[#B7F500] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <div className="w-6 h-6 rounded-full border border-[#DAD9D3] flex items-center justify-center group-hover:border-[#080808] group-hover:bg-[#080808] transition-colors">
                <ArrowUp className="w-3 h-3 group-hover:text-[#B7F500]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
