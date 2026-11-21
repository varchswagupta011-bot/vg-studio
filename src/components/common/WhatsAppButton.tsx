"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none flex items-center">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center cursor-pointer"
        aria-label={`Chat on WhatsApp ${siteConfig.phone}`}
      >
        {/* Dark Pill Tooltip / Label - Only appears when hovered */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center mr-3 px-4 py-2.5 rounded-xl bg-[#080808] text-white border border-zinc-700/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] pointer-events-none whitespace-nowrap"
            >
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-zinc-100">
                Chat on WhatsApp <span className="text-[#25D366] mx-1">•</span>{" "}
                <span className="text-white font-bold">{siteConfig.phone}</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Circular Button with Outer Pulse Ring */}
        <div className="relative flex items-center justify-center">
          {/* Subtle Outer Glowing Pulse Ring */}
          <span className="absolute -inset-2.5 rounded-full bg-[#25D366]/25 animate-ping opacity-75" />
          <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 transition-transform duration-300 group-hover:scale-125" />

          {/* Main Green Circular Badge */}
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#20ba59] active:scale-95">
            {/* WhatsApp Icon SVG */}
            <svg
              viewBox="0 0 32 32"
              className="w-7 h-7 fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.64.72 5.11 1.97 7.23L2 30l6.98-1.92A13.9 13.9 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.6c-2.27 0-4.41-.62-6.26-1.7l-.45-.26-4.63 1.27 1.24-4.51-.29-.46A11.53 11.53 0 014.4 16C4.4 9.6 9.6 4.4 16 4.4s11.6 5.2 11.6 11.6-5.2 11.6-11.6 11.6zm6.36-8.7c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.78.18-.23.35-.9 1.14-1.1 1.37-.2.23-.41.26-.76.09-.35-.18-1.48-.55-2.82-1.74-1.04-.93-1.74-2.08-1.94-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.61.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.89-1.07-2.58-.28-.68-.57-.59-.78-.6-.2-.01-.44-.01-.67-.01-.23 0-.61.09-.93.44-.32.35-1.22 1.19-1.22 2.91 0 1.72 1.25 3.38 1.43 3.61.17.23 2.46 3.76 5.96 5.27.83.36 1.48.58 1.99.74.84.27 1.6.23 2.2.14.67-.1 2.07-.85 2.36-1.66.29-.82.29-1.52.2-1.66-.09-.15-.32-.24-.67-.41z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
