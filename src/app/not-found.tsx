import Link from "next/link";
import { VGLogo } from "@/components/common/VGLogo";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] flex flex-col justify-between px-6 py-12 text-[#080808]">
      <div className="max-w-7xl mx-auto w-full">
        <Link href="/" className="inline-block">
          <VGLogo size={36} showText={true} />
        </Link>
      </div>

      <div className="max-w-2xl mx-auto w-full text-center py-20">
        <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase block mb-3">
          ERROR 404 • PAGE NOT FOUND
        </span>

        <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-[#080808] leading-none mb-4">
          404<span className="text-[#B7F500]">.</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-[#080808] mb-3">
          This digital coordinates cannot be located.
        </h2>

        <p className="text-sm text-[#666666] max-w-md mx-auto mb-8 leading-relaxed">
          The page or asset you requested has either moved, been archived, or never existed in the VG STUDIO registry.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#080808] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#202020] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#B7F500]" />
          <span>RETURN TO STUDIO HOME</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center text-xs font-mono text-[#777777] border-t border-[#DAD9D3] pt-6">
        VG STUDIO © 2026. BUILDING DIGITAL EXPERIENCES.
      </div>
    </div>
  );
}
