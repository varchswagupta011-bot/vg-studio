import React from "react";

interface VGLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function VGLogo({ className = "", size = 32, showText = false }: VGLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Geometric VG Stencil Monogram */}
      <svg
        width={size}
        height={(size * 28) / 36}
        viewBox="0 0 72 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
        aria-label="VG Studio Monogram"
      >
        {/* V Stencil Stroke */}
        <path
          d="M4 8L20 48H28L44 8H34L24 36L14 8H4Z"
          fill="#080808"
        />
        {/* Accent dot / slash on V */}
        <polygon points="17,8 24,8 19,20 12,20" fill="#B7F500" />
        
        {/* G Stencil Curve & Crossbar */}
        <path
          d="M40 8H66V16H48V40H64V26H54V18H72V48H40V8Z"
          fill="#080808"
        />
        {/* Stencil Notch */}
        <rect x="52" y="24" width="4" height="6" fill="#F7F6F2" />
      </svg>

      {showText && (
        <div className="flex items-center gap-3">
          <span className="h-5 w-[1px] bg-[#DAD9D3]" aria-hidden="true" />
          <span className="font-black tracking-wider text-sm sm:text-base text-[#080808] uppercase">
            VG STUDIO
          </span>
        </div>
      )}
    </div>
  );
}
