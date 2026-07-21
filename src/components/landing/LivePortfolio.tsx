"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Users, BarChart3, Palette, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { DEMO_PROFILES } from "@/lib/constants";

const themes = [
  {
    id: "cyberneon",
    name: "Cyber Neon",
    bg: "bg-slate-950",
    border: "border-cyan-500/30",
    accent: "text-cyan-400",
    badgeBg: "bg-cyan-500/10",
    textColor: "text-slate-200",
    accentHex: "#22d3ee",
  },
  {
    id: "auradark",
    name: "Aura Dark",
    bg: "bg-zinc-950",
    border: "border-purple-500/30",
    accent: "text-purple-400",
    badgeBg: "bg-purple-500/10",
    textColor: "text-slate-300",
    accentHex: "#c084fc",
  },
  {
    id: "noir",
    name: "Noir Luxe",
    bg: "bg-black",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    badgeBg: "bg-amber-500/10",
    textColor: "text-slate-100",
    accentHex: "#fbbf24",
  },
];

// Assign different skill sets per persona for visual variety
const personaSkills: Record<string, string[]> = {
  umairansari92: ["React", "Node.js", "TypeScript", "AI/ML"],
  sarahj:        ["Figma", "UX Research", "Design Systems", "Prototyping"],
  marcusw:       ["Python", "TensorFlow", "SQL", "Spark"],
  aishap:        ["Roadmapping", "Agile", "Stakeholder Mgmt", "OKRs"],
};

const LivePortfolio = () => {
  const [activeTheme, setActiveTheme] = useState("cyberneon");
  const [activeProfileIdx, setActiveProfileIdx] = useState(0);

  const current = themes.find(t => t.id === activeTheme) || themes[0];
  const activeProfile = DEMO_PROFILES[activeProfileIdx];
  const skills = personaSkills[activeProfile.username] || [];

  const prev = () => setActiveProfileIdx(i => (i - 1 + DEMO_PROFILES.length) % DEMO_PROFILES.length);
  const next = () => setActiveProfileIdx(i => (i + 1) % DEMO_PROFILES.length);

  return (
    <section id="live-portfolio" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
            Deployment Layer
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            Your Live <span className="text-primary">Career Portfolio.</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            Deploy your profile as an SEO-ready web application with premium themes and real-time recruiter tracking dashboard.
          </p>
        </div>

        {/* Demo profile selector */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mr-2">Live Demos →</span>
          {DEMO_PROFILES.map((profile, idx) => (
            <button
              key={profile.username}
              onClick={() => setActiveProfileIdx(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-black uppercase tracking-wider transition-all ${
                idx === activeProfileIdx
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-slate-900 border-white/5 text-slate-400 hover:border-white/15 hover:text-white"
              }`}
            >
              <span className="w-5 h-5 rounded-md bg-slate-700 flex items-center justify-center text-[8px] font-black">
                {profile.initials}
              </span>
              {profile.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Browser viewport simulation */}
        <div className="w-full max-w-5xl mx-auto glass-card rounded-[3.5rem] border-white/5 shadow-premium overflow-hidden">
          {/* Browser chrome header */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-5 bg-slate-900/60 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/70" />
              <div className="w-3 h-3 rounded-full bg-warning/70" />
              <div className="w-3 h-3 rounded-full bg-success/70" />
            </div>

            {/* Address bar — clickable real link */}
            <a
              href={activeProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-slate-950/60 border border-white/5 rounded-xl px-4 py-2 hover:border-primary/30 transition-all text-xs font-mono text-slate-500 hover:text-primary max-w-xs truncate"
            >
              <span>app-cvifypro.vercel.app/p/{activeProfile.username}</span>
              <ExternalLink className="w-3 h-3 ml-2 flex-shrink-0" />
            </a>

            {/* Theme selectors */}
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-slate-500 mr-1" />
              {themes.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTheme(t.id)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border ${
                    activeTheme === t.id
                      ? "bg-white text-black border-white"
                      : "bg-slate-950 text-slate-500 border-white/5 hover:border-white/10"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Profile render */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeProfileIdx}-${activeTheme}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={`p-8 md:p-14 grid md:grid-cols-2 gap-12 items-center transition-colors duration-500 ${current.bg}`}
            >
              {/* Left: Profile card */}
              <div className="space-y-8 text-left">
                <div className="flex items-center gap-5">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl border ${current.border} ${current.accent} ${current.badgeBg}`}>
                    {activeProfile.initials}
                  </div>
                  <div className="space-y-1">
                    <h3 className={`text-2xl font-black ${current.textColor} font-outfit uppercase`}>{activeProfile.name}</h3>
                    <p className={`text-xs font-black uppercase tracking-widest ${current.accent}`}>{activeProfile.role}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-1.5 bg-slate-800 rounded-full w-full" />
                  <div className="h-1.5 bg-slate-800 rounded-full w-5/6" />
                  <div className="h-1.5 bg-slate-800 rounded-full w-2/3" />
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skills.map(tag => (
                    <span
                      key={tag}
                      className={`text-[9px] font-black uppercase tracking-widest border px-3 py-1.5 rounded-full ${current.border} ${current.textColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Analytics panel */}
              <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary">Traffic Analytics</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950 border border-white/5 p-4 rounded-2xl space-y-1 text-left">
                    <Eye className="w-4 h-4 text-primary" />
                    <p className="text-2xl font-black text-white">2,482</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Profile Views</p>
                  </div>
                  <div className="bg-slate-950 border border-white/5 p-4 rounded-2xl space-y-1 text-left">
                    <Users className="w-4 h-4 text-success" />
                    <p className="text-2xl font-black text-white">842</p>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Recruiter Visits</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span>Authority Index Score: Top 1% in sector</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Profile navigation arrows */}
          <div className={`flex items-center justify-between px-8 py-5 border-t border-white/5 ${current.bg}`}>
            <button
              onClick={prev}
              className="flex items-center gap-2 text-xs font-black text-slate-500 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Prev Profile
            </button>
            <div className="flex gap-2">
              {DEMO_PROFILES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProfileIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeProfileIdx ? "bg-primary w-6" : "bg-slate-700"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex items-center gap-2 text-xs font-black text-slate-500 hover:text-white transition-colors"
            >
              Next Profile <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={activeProfile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all"
          >
            View {activeProfile.name.split(" ")[0]}&apos;s Portfolio <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveProfileIdx((activeProfileIdx + 1) % DEMO_PROFILES.length); }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-black text-sm transition-colors"
          >
            Browse all demos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LivePortfolio;
