import React from "react";
import { Utensils, GraduationCap, ShoppingBag, Search, Sparkles, ArrowUpRight } from "lucide-react";

interface MockupProps {
  type: "restaurant" | "education" | "ecommerce" | "hero-main";
  className?: string;
  isInteractive?: boolean;
}

export function ProjectMockup({ type, className = "", isInteractive = true }: MockupProps) {
  if (type === "restaurant") {
    return (
      <div
        className={`relative w-full aspect-[16/10] bg-[#0c0c0e] rounded-xl overflow-hidden border border-[#26262b] shadow-2xl flex flex-col ${className}`}
      >
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#141418] border-b border-[#26262b]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
          </div>
          <div className="text-[10px] font-mono text-zinc-500 bg-[#0c0c0e] px-3 py-0.5 rounded border border-[#26262b]/60">
            theroyalbite.luxury/dining
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Website Content */}
        <div className="relative flex-1 p-5 md:p-7 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#121113] via-[#0c0c0e] to-[#181615]">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Mini Nav */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Utensils className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <span className="text-xs sm:text-sm font-serif font-bold tracking-wide text-zinc-100">
                The Royal Bite
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[11px] text-zinc-400">
              <span className="text-amber-400 font-medium">Home</span>
              <span className="hover:text-zinc-200 cursor-pointer">Menu</span>
              <span className="hover:text-zinc-200 cursor-pointer">About</span>
              <span className="hover:text-zinc-200 cursor-pointer">Contact</span>
            </div>
            <div className="text-[10px] font-semibold bg-amber-400/90 text-black px-2.5 py-1 rounded-full shadow-sm">
              Reserve Table
            </div>
          </div>

          {/* Hero Content */}
          <div className="grid grid-cols-12 gap-4 items-center my-auto relative z-10 pt-2">
            <div className="col-span-7 pr-2">
              <span className="inline-block text-[9px] font-mono tracking-widest text-amber-400/90 uppercase mb-1.5">
                ✦ Michelin Curated Experience
              </span>
              <h4 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-white leading-tight tracking-tight">
                Good Food.
                <br />
                <span className="text-amber-300">Good Mood.</span>
              </h4>
              <p className="text-[10px] sm:text-xs text-zinc-400 mt-1.5 line-clamp-2 max-w-[240px]">
                Experience the taste of luxury with sustainable harvest and sommelier pairings.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-amber-400 text-black px-2.5 py-1 rounded-full">
                  View Menu <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
                <span className="text-[10px] text-zinc-400 underline decoration-zinc-600">
                  Explore Story
                </span>
              </div>
            </div>

            {/* Plated Culinary Dish Illustration */}
            <div className="col-span-5 flex justify-center items-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#1f1d1d] via-[#2c2826] to-[#1a1918] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-[#3e3936]">
                {/* Plate rim */}
                <div className="w-full h-full rounded-full border border-amber-900/30 flex items-center justify-center relative overflow-hidden bg-[#181615]">
                  {/* Food arrangement graphic */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Plate Texture */}
                    <circle cx="50" cy="50" r="48" fill="#1e1a17" />
                    <circle cx="50" cy="50" r="38" fill="#171412" stroke="#2c2520" strokeWidth="1" />
                    {/* Balsamic drizzle */}
                    <path
                      d="M25 50 Q 40 30 50 50 T 75 50"
                      fill="none"
                      stroke="#451a03"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 65 Q 50 45 68 62"
                      fill="none"
                      stroke="#78350f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    {/* Main seared culinary portion */}
                    <ellipse cx="50" cy="52" rx="18" ry="14" fill="#854d0e" />
                    <ellipse cx="50" cy="50" rx="16" ry="12" fill="#a16207" />
                    <path
                      d="M38 46 Q 50 40 62 46 Q 58 58 42 56 Z"
                      fill="#ca8a04"
                      opacity="0.9"
                    />
                    {/* Garnish microgreens */}
                    <path
                      d="M48 42 C 45 35, 52 30, 50 25 C 54 28, 56 34, 52 40 Z"
                      fill="#84cc16"
                    />
                    <path
                      d="M52 42 C 58 36, 62 38, 60 30 C 58 35, 54 38, 51 42 Z"
                      fill="#4ade80"
                    />
                    {/* Specular highlights & seasoning dots */}
                    <circle cx="45" cy="46" r="1.5" fill="#fef08a" />
                    <circle cx="55" cy="48" r="1" fill="#fef08a" />
                    <circle cx="48" cy="54" r="1.5" fill="#fef08a" />
                    <circle cx="38" cy="52" r="1" fill="#ea580c" />
                    <circle cx="62" cy="52" r="1" fill="#ea580c" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Micro badges at bottom */}
          <div className="flex items-center justify-between text-[9px] text-zinc-500 border-t border-zinc-800/80 pt-2 relative z-10">
            <span>TABLES AVAILABLE TONIGHT</span>
            <span className="text-amber-400 font-mono">★★★★★ 4.9/5</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "education") {
    return (
      <div
        className={`relative w-full aspect-[16/10] bg-[#ffffff] rounded-xl overflow-hidden border border-[#DAD9D3] shadow-2xl flex flex-col ${className}`}
      >
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#f8fafc] border-b border-[#e2e8f0]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="text-[10px] font-mono text-zinc-400 bg-white px-3 py-0.5 rounded border border-zinc-200">
            paradisepublicschool.edu.in
          </div>
          <div className="w-2 h-2 rounded-full bg-blue-500" />
        </div>

        {/* Website Content */}
        <div className="relative flex-1 p-5 md:p-7 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff]">
          {/* Top Nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center shadow-sm">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-zinc-900 block leading-none">
                  Paradise Public School
                </span>
                <span className="text-[9px] text-blue-600 font-semibold tracking-wider uppercase">
                  Excellence in Education
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-zinc-600">
              <span className="text-blue-700">Home</span>
              <span>About</span>
              <span>Academics</span>
              <span>Admissions</span>
            </div>
            <div className="text-[10px] font-semibold bg-blue-600 text-white px-3 py-1 rounded-full shadow-sm hover:bg-blue-700">
              Apply Now
            </div>
          </div>

          {/* Hero Content */}
          <div className="grid grid-cols-12 gap-3 items-center my-auto pt-2">
            <div className="col-span-7 pr-1">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[9px] font-semibold mb-2 border border-blue-200">
                <Sparkles className="w-2.5 h-2.5" /> Admissions Open 2026-27
              </div>
              <h4 className="text-base sm:text-xl md:text-2xl font-black text-zinc-900 leading-tight tracking-tight">
                Knowledge Builds a Better Tomorrow
              </h4>
              <p className="text-[10px] sm:text-xs text-zinc-500 mt-1 line-clamp-2">
                Empowering young minds for a brighter future with STEM, arts, and athletics.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-blue-600 text-white px-3 py-1 rounded-full shadow-sm">
                  Learn More <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
                <span className="text-[10px] text-zinc-600 font-medium">
                  Virtual Tour
                </span>
              </div>
            </div>

            {/* Campus Architectural Illustration */}
            <div className="col-span-5 flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-blue-100 shadow-md bg-gradient-to-b from-sky-200 via-sky-100 to-amber-50 p-2 flex flex-col justify-end">
                {/* School Campus Facade SVG */}
                <svg viewBox="0 0 160 120" className="w-full h-full">
                  {/* Sky background clouds */}
                  <circle cx="30" cy="25" r="10" fill="#ffffff" opacity="0.8" />
                  <circle cx="45" cy="22" r="14" fill="#ffffff" opacity="0.9" />
                  <circle cx="60" cy="25" r="10" fill="#ffffff" opacity="0.8" />
                  {/* Sun */}
                  <circle cx="130" cy="20" r="12" fill="#fbbf24" opacity="0.85" />
                  {/* Main Building Body */}
                  <rect x="25" y="45" width="110" height="65" fill="#f1f5f9" rx="2" stroke="#cbd5e1" strokeWidth="1" />
                  {/* Roof Pediment / Triangle */}
                  <polygon points="20,45 80,18 140,45" fill="#1e3a8a" />
                  {/* School Clock / Crest */}
                  <circle cx="80" cy="33" r="7" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="80" y1="33" x2="80" y2="29" stroke="#1e3a8a" strokeWidth="1" />
                  <line x1="80" y1="33" x2="83" y2="33" stroke="#1e3a8a" strokeWidth="1" />
                  {/* Columns */}
                  <rect x="35" y="45" width="6" height="60" fill="#e2e8f0" />
                  <rect x="55" y="45" width="6" height="60" fill="#e2e8f0" />
                  <rect x="75" y="45" width="10" height="60" fill="#0f172a" />
                  <rect x="99" y="45" width="6" height="60" fill="#e2e8f0" />
                  <rect x="119" y="45" width="6" height="60" fill="#e2e8f0" />
                  {/* Modern Glass Windows with Reflections */}
                  <rect x="44" y="52" width="8" height="12" fill="#60a5fa" opacity="0.8" rx="1" />
                  <rect x="64" y="52" width="8" height="12" fill="#60a5fa" opacity="0.8" rx="1" />
                  <rect x="88" y="52" width="8" height="12" fill="#60a5fa" opacity="0.8" rx="1" />
                  <rect x="108" y="52" width="8" height="12" fill="#60a5fa" opacity="0.8" rx="1" />
                  <rect x="44" y="70" width="8" height="12" fill="#38bdf8" opacity="0.8" rx="1" />
                  <rect x="64" y="70" width="8" height="12" fill="#38bdf8" opacity="0.8" rx="1" />
                  <rect x="88" y="70" width="8" height="12" fill="#38bdf8" opacity="0.8" rx="1" />
                  <rect x="108" y="70" width="8" height="12" fill="#38bdf8" opacity="0.8" rx="1" />
                  {/* Front entrance steps */}
                  <rect x="70" y="95" width="20" height="15" fill="#475569" />
                  <rect x="72" y="85" width="16" height="15" fill="#2563eb" rx="2" />
                  {/* Lawn */}
                  <rect x="0" y="110" width="160" height="10" fill="#22c55e" />
                </svg>
              </div>
            </div>
          </div>

          {/* Micro badges at bottom */}
          <div className="flex items-center justify-between text-[9px] text-zinc-500 border-t border-zinc-200 pt-2">
            <span className="font-medium text-zinc-600">CBSE AFFILIATED • K-12</span>
            <span className="text-blue-700 font-semibold">100% BOARD PASS RATE</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ecommerce") {
    return (
      <div
        className={`relative w-full aspect-[16/10] bg-[#fcfcfc] rounded-xl overflow-hidden border border-[#DAD9D3] shadow-2xl flex flex-col ${className}`}
      >
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#f4f4f5] border-b border-[#e4e4e7]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="text-[10px] font-mono text-zinc-400 bg-white px-3 py-0.5 rounded border border-zinc-200">
            nexora.store/collections
          </div>
          <div className="w-2 h-2 rounded-full bg-[#B7F500] border border-black/20" />
        </div>

        {/* Website Content */}
        <div className="relative flex-1 p-5 md:p-7 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#fafafa] via-[#ffffff] to-[#f5f5f5]">
          {/* Subtle Accent Glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-[#B7F500]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Nav */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#080808] text-white flex items-center justify-center">
                <ShoppingBag className="w-3.5 h-3.5 text-[#B7F500]" />
              </div>
              <span className="text-xs sm:text-sm font-black tracking-tight text-[#080808]">
                Nexora
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-zinc-600">
              <span className="text-[#080808] font-bold">Home</span>
              <span>Shop</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-zinc-500 cursor-pointer" />
              <div className="relative">
                <ShoppingBag className="w-3.5 h-3.5 text-[#080808] cursor-pointer" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B7F500] text-[8px] font-bold flex items-center justify-center text-black">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="grid grid-cols-12 gap-3 items-center my-auto pt-2 relative z-10">
            <div className="col-span-6 pr-1">
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                SPRING / SUMMER 2026
              </span>
              <h4 className="text-base sm:text-xl md:text-2xl font-black text-[#080808] leading-tight tracking-tight">
                Upgrade Your Style
              </h4>
              <p className="text-[10px] sm:text-xs text-zinc-500 mt-1 line-clamp-2">
                Premium Fashion. Better You. Minimalist athletic footwear designed for movement.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#080808] text-white px-3 py-1 rounded-full shadow-sm">
                  Shop Now <ArrowUpRight className="w-2.5 h-2.5 text-[#B7F500]" />
                </span>
                <span className="text-[11px] font-black text-[#080808]">
                  $189.00
                </span>
              </div>
            </div>

            {/* Realistic Sneaker Vector Graphics */}
            <div className="col-span-6 flex justify-center items-center">
              <div className="relative w-full aspect-square max-w-[170px] flex items-center justify-center">
                {/* Dynamic Studio Oval Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 via-zinc-100 to-white rounded-full border border-zinc-200/60 shadow-inner -rotate-12" />

                {/* Sneaker SVG Artwork */}
                <svg
                  viewBox="0 0 200 130"
                  className="w-full h-auto drop-shadow-[0_15px_20px_rgba(0,0,0,0.18)] -rotate-6 transition-transform duration-500 hover:scale-105"
                >
                  {/* Soft Drop Shadow under sole */}
                  <ellipse cx="100" cy="118" rx="80" ry="8" fill="#000000" opacity="0.15" />
                  {/* Outsole Base */}
                  <path
                    d="M15 108 C 25 114, 160 114, 185 106 C 188 98, 178 94, 170 94 C 130 95, 40 95, 20 98 C 12 100, 10 104, 15 108 Z"
                    fill="#18181b"
                  />
                  {/* Midsole Layer (Light Bone/White) */}
                  <path
                    d="M18 99 C 30 102, 160 102, 175 95 C 182 86, 170 82, 155 83 C 120 85, 45 85, 25 87 C 18 90, 15 95, 18 99 Z"
                    fill="#ffffff"
                    stroke="#e4e4e7"
                    strokeWidth="1.5"
                  />
                  {/* Midsole Air Pill / Accent */}
                  <rect x="55" y="89" width="30" height="5" rx="2.5" fill="#B7F500" />
                  {/* Main Upper (Light Grey / White Leather) */}
                  <path
                    d="M25 87 C 35 65, 55 45, 90 40 C 120 38, 145 55, 158 75 C 165 82, 155 84, 150 84 C 110 85, 45 85, 25 87 Z"
                    fill="#f4f4f5"
                    stroke="#d4d4d8"
                    strokeWidth="1.5"
                  />
                  {/* Heel Counter */}
                  <path
                    d="M25 87 C 22 75, 25 60, 38 52 C 48 50, 52 65, 55 85 Z"
                    fill="#080808"
                  />
                  {/* Swoosh / Speed Wave Accent */}
                  <path
                    d="M48 78 Q 80 50 145 68 C 130 74, 90 82, 48 78 Z"
                    fill="#080808"
                  />
                  {/* Laces Area & Tongue */}
                  <path
                    d="M85 42 L 115 40 L 105 65 L 78 68 Z"
                    fill="#e4e4e7"
                  />
                  <line x1="88" y1="46" x2="108" y2="44" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="84" y1="52" x2="104" y2="50" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="80" y1="58" x2="100" y2="56" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Toe Cap */}
                  <path
                    d="M135 70 C 150 72, 165 78, 168 85 C 155 85, 135 83, 130 75 Z"
                    fill="#e4e4e7"
                  />
                  {/* Neon Lime Heel Tag */}
                  <rect x="30" y="48" width="8" height="12" rx="1" fill="#B7F500" />
                </svg>
              </div>
            </div>
          </div>

          {/* Micro badges at bottom */}
          <div className="flex items-center justify-between text-[9px] text-zinc-500 border-t border-zinc-200 pt-2">
            <span>LIMITED RUN OF 500 PAIRS</span>
            <span className="font-mono text-[#080808] font-bold">IN STOCK • FAST DELIVERY</span>
          </div>
        </div>
      </div>
    );
  }

  // Hero main mockup card: Dark luxury architectural showcase
  return (
    <div
      className={`relative w-full aspect-[16/10] bg-[#0c0d12] rounded-2xl overflow-hidden border border-[#232530] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col text-white ${className}`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#13151f] border-b border-[#232530]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
        </div>
        <div className="text-[10px] font-mono text-zinc-400 bg-[#0c0d12] px-3 py-0.5 rounded border border-[#232530]">
          vgstudio.design/showcase
        </div>
        <span className="w-2 h-2 rounded-full bg-[#B7F500] animate-ping" />
      </div>

      {/* Main Agency Canvas */}
      <div className="relative flex-1 p-6 md:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0c0d12] via-[#12141c] to-[#1a1c26]">
        {/* Ambient Glows */}
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#B7F500]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Minimal Nav inside the card */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-black tracking-widest text-sm text-white">VG</span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-[11px] font-medium text-zinc-400">
            <span className="text-white">Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
          <div className="w-5 h-5 flex flex-col justify-center gap-1 sm:hidden">
            <span className="w-full h-0.5 bg-zinc-300" />
            <span className="w-full h-0.5 bg-zinc-300" />
          </div>
        </div>

        {/* Hero inside Mockup */}
        <div className="grid grid-cols-12 gap-4 items-center relative z-10 my-auto py-2">
          <div className="col-span-7">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
              Dream Bigger.
              <br />
              Build <span className="text-[#B7F500]">Better.</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-2 max-w-[220px] line-clamp-2">
              Modern digital solutions engineered for forward-thinking brands.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-black bg-[#B7F500] text-[#080808] px-3.5 py-1.5 rounded-full shadow-lg hover:brightness-105 transition-all">
                Explore Work <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </div>
          </div>

          {/* Architectural Modern Villa Vector Artwork */}
          <div className="col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#2a2d3d] bg-gradient-to-b from-[#0f1118] via-[#161a25] to-[#202534] shadow-2xl p-1">
              <svg viewBox="0 0 160 120" className="w-full h-full">
                {/* Twilight Sky gradient */}
                <defs>
                  <linearGradient id="twilight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0d111a" />
                    <stop offset="60%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <linearGradient id="warmLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#fde047" />
                    <stop offset="100%" stopColor="#ca8a04" />
                  </linearGradient>
                </defs>
                <rect width="160" height="120" fill="url(#twilight)" />
                {/* Modern Geometric Villa Structure */}
                {/* Upper cantilever box */}
                <polygon points="40,25 145,25 150,55 45,55" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                {/* Upper panoramic floor-to-ceiling illuminated glass */}
                <polygon points="50,30 140,30 144,52 54,52" fill="url(#warmLight)" opacity="0.95" />
                {/* Interior structural mullions & silhouettes */}
                <line x1="80" y1="30" x2="82" y2="52" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="110" y1="30" x2="112" y2="52" stroke="#0f172a" strokeWidth="1.5" />
                {/* Lower concrete foundation & overhang */}
                <polygon points="25,55 135,55 140,95 30,95" fill="#1e293b" stroke="#475569" strokeWidth="1" />
                {/* Lower warm illuminated lobby */}
                <rect x="35" y="60" width="65" height="32" fill="url(#warmLight)" opacity="0.9" rx="1" />
                <line x1="65" y1="60" x2="65" y2="92" stroke="#0f172a" strokeWidth="1.5" />
                {/* Reflective pool & patio */}
                <polygon points="10,95 150,95 160,120 0,120" fill="#090d16" />
                <ellipse cx="80" cy="105" rx="50" ry="8" fill="#38bdf8" opacity="0.25" />
                {/* Minimal outdoor landscaping */}
                <path d="M15,95 Q 18,80 20,95 Q 22,75 25,95" stroke="#22c55e" strokeWidth="2" fill="none" />
                <path d="M138,95 Q 142,78 145,95" stroke="#22c55e" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="flex items-center justify-between text-[9px] text-zinc-500 border-t border-[#232530] pt-2 relative z-10">
          <span className="font-mono">NEXT-GEN DIGITAL CRAFT</span>
          <span className="text-[#B7F500]">STUDIO EDITION 2026</span>
        </div>
      </div>
    </div>
  );
}
