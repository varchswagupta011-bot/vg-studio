import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/common/CustomCursor";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VG STUDIO — Independent Web Designer & Developer",
  description:
    "VG STUDIO creates clean, fast, and memorable websites for brands, businesses, and ideas. Specialized in Next.js, bespoke UI/UX, and creative web development.",
  keywords: [
    "Web Designer",
    "Web Developer",
    "Portfolio",
    "VG STUDIO",
    "Next.js Developer",
    "UI/UX Design",
    "Creative Agency",
    "India",
  ],
  authors: [{ name: "VG STUDIO", url: "https://vgstudio.design" }],
  creator: "VG STUDIO",
  publisher: "VG STUDIO",
  openGraph: {
    title: "VG STUDIO — I BUILD DIGITAL EXPERIENCES.",
    description:
      "I design and develop clean, fast, and memorable websites for brands, businesses, and ideas.",
    url: "https://vgstudio.design",
    siteName: "VG STUDIO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VG STUDIO — Independent Web Designer & Developer",
    description:
      "I design and develop clean, fast, and memorable websites for brands, businesses, and ideas.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F7F6F2] text-[#080808] font-sans flex flex-col selection:bg-[#B7F500] selection:text-[#080808]">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
