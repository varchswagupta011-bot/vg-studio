"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { VGLogo } from "../common/VGLogo";
import { siteConfig } from "@/config/siteConfig";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("services");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["services", "about", "process", "contact"];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#DAD9D3] py-3.5 shadow-xs"
            : "bg-[#F7F6F2] border-b border-[#DAD9D3]/70 py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Monogram + Title */}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center cursor-pointer"
            >
              <VGLogo size={36} showText={true} />
            </Link>

            {/* Center: Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1 rounded-full bg-[#FFFFFF]/60 border border-[#DAD9D3]/80 shadow-xs">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-4 py-1.5 text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                      isActive
                        ? "text-[#080808]"
                        : "text-[#777777] hover:text-[#080808]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#080808]/5 border border-[#080808]/15 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Availability Indicator + Let's Talk CTA */}
            <div className="hidden sm:flex items-center gap-4 lg:gap-6">
              {/* Availability Status */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7F500] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7F500]" />
                </span>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#080808] uppercase">
                  AVAILABLE FOR PROJECTS
                </span>
              </div>

              {/* Vertical divider */}
              <span className="h-5 w-[1px] bg-[#DAD9D3]" aria-hidden="true" />

              {/* Black Rounded CTA Button */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#080808] text-white text-xs lg:text-sm font-bold tracking-wide transition-all duration-300 hover:bg-[#202020] hover:shadow-md hover:scale-105 active:scale-95"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B7F500]" />
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-3 sm:hidden">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="px-3.5 py-1.5 rounded-full bg-[#080808] text-white text-[11px] font-bold"
              >
                LET&apos;S TALK ↗
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#080808] hover:bg-black/5"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] bg-[#F7F6F2] border-b border-[#DAD9D3] z-40 p-6 shadow-xl sm:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#DAD9D3]">
                <span className="w-2 h-2 rounded-full bg-[#B7F500] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#080808]">
                  AVAILABLE FOR PROJECTS
                </span>
              </div>
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-bold text-[#080808] hover:text-[#B7F500] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#080808] text-white font-bold text-sm"
                >
                  LET&apos;S TALK ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
