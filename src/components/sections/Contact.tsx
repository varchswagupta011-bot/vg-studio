"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { ArrowUpRight, Mail, Phone, MessageCircle, MapPin, Copy, Check, Send, AlertCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Design & Development",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#B7F500", "#080808", "#DAD9D3", "#FFFFFF"],
        });
        setFormData({
          name: "",
          email: "",
          projectType: "Web Design & Development",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to deliver message. Please contact via direct email.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network connection issue. Please send an email directly to " + siteConfig.email);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F7F6F2] border-t border-[#DAD9D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Inquiries & Brand Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#B7F500] border border-black/20" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-[#080808] uppercase leading-[0.95]">
                HAVE A PROJECT IN MIND?
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#555555] leading-relaxed">
                &ldquo;Let&apos;s turn your ideas into something extraordinary.&rdquo;
              </p>

              <p className="mt-3 text-xs sm:text-sm text-[#777777]">
                Whether you need a bespoke portfolio, school portal, brand redesign, or high-performance e-commerce shop, I&apos;m ready to collaborate.
              </p>

              {/* Direct Inquiries Card */}
              <div className="mt-8 p-6 rounded-2xl bg-white border border-[#DAD9D3] shadow-xs">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#777777] uppercase block mb-3">
                  DIRECT EMAIL INQUIRY
                </span>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#080808] text-white flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#B7F500]" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#080808] block">
                        {siteConfig.email}
                      </span>
                      <span className="text-[10px] text-zinc-500">
                        Typical response: under 24 hours
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-[#DAD9D3] hover:border-[#080808] text-[#080808] transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-[#DAD9D3] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                      <Phone className="w-4 h-4 fill-white" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#080808] block">
                        {siteConfig.phone}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a
                          href={siteConfig.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold text-[#25D366] hover:underline"
                        >
                          WhatsApp Chat ↗
                        </a>
                        <span className="text-zinc-300">•</span>
                        <a
                          href={`tel:${siteConfig.phoneRaw}`}
                          className="text-[10px] font-medium text-zinc-500 hover:text-black hover:underline"
                        >
                          Direct Call
                        </a>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg border border-[#DAD9D3] hover:border-[#080808] text-[#080808] transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-[#DAD9D3] flex items-center gap-2 text-xs font-mono text-[#555555]">
                  <MapPin className="w-3.5 h-3.5 text-[#080808]" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Social channels preview */}
            <div className="mt-8 pt-6 border-t border-[#DAD9D3]">
              <span className="text-xs font-mono font-bold text-[#080808] uppercase block mb-3">
                CHANNELS &amp; REPOSITORIES
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#DAD9D3] text-xs font-semibold text-[#080808] hover:border-[#080808] transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#DAD9D3] text-xs font-semibold text-[#080808] hover:border-[#080808] transition-colors"
                >
                  <span>Twitter / X</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#DAD9D3] text-xs font-semibold text-[#080808] hover:border-[#080808] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DAD9D3] shadow-md relative overflow-hidden">
              <span className="text-xs font-mono font-bold tracking-widest text-[#777777] uppercase block mb-6">
                START A PROJECT INQUIRY
              </span>

              {/* Status alerts */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-bold">Submission Error</p>
                      <p className="text-red-700 mt-0.5">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-start gap-3 text-emerald-900 text-xs sm:text-sm"
                  >
                    <Sparkles className="w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-base">Inquiry Successfully Sent!</p>
                      <p className="text-emerald-700 mt-1 leading-relaxed">
                        Thank you for reaching out. Your project specifications have been delivered. I will review your requirements and follow up within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#080808] uppercase mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dhruv Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F6F2] border border-[#DAD9D3] text-sm text-[#080808] placeholder:text-[#999999] focus:outline-none focus:border-[#080808] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#080808] uppercase mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. dhruv@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F6F2] border border-[#DAD9D3] text-sm text-[#080808] placeholder:text-[#999999] focus:outline-none focus:border-[#080808] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Project Type Dropdown */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#080808] uppercase mb-2">
                    PROJECT TYPE
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F6F2] border border-[#DAD9D3] text-sm text-[#080808] focus:outline-none focus:border-[#080808] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Web Design & Development">Web Design &amp; Development</option>
                    <option value="UI/UX Redesign">UI/UX Redesign</option>
                    <option value="E-commerce Store">E-commerce Store</option>
                    <option value="Custom Web Application">Custom Web Application</option>
                    <option value="Brand Identity & Web Experience">Brand Identity &amp; Web Experience</option>
                  </select>
                </div>

                {/* Project Details Textarea */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#080808] uppercase mb-2">
                    PROJECT SUMMARY &amp; OBJECTIVES *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, target audience, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F6F2] border border-[#DAD9D3] text-sm text-[#080808] placeholder:text-[#999999] focus:outline-none focus:border-[#080808] focus:bg-white transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full group inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#080808] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#202020] hover:shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <span>TRANSMITTING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5 text-[#B7F500] transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
