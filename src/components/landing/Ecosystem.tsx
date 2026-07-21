"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, Bot, FileUp, Heart, Layers, Target, 
  MessageSquare, UserCheck, Map, ClipboardList, BarChart3, Printer 
} from "lucide-react";

const modules = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Resume Studio",
    desc: "Build highly compliant resume models with visual templates and instant exports.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "ATS Intelligence",
    desc: "Scan formatting, keyword mismatches, and structural layout issues instantly.",
    colSpan: "md:col-span-2"
  },
  {
    icon: <FileUp className="w-6 h-6" />,
    title: "Magic Import",
    desc: "Import any PDF or raw text to sync into unified, editable data assets.",
    colSpan: "md:col-span-2"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "AI Coach HUD",
    desc: "Interactive dashboards detailing loophole fixes and potential score gains.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Portfolio Lab",
    desc: "Deploy stunning web portfolio links featuring modern responsive layouts.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Job Matcher",
    desc: "Calibrate alignment percentages and structural details against targeted JDs.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Interview Simulator",
    desc: "Verbal interview simulations configured directly using database project history.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "AI Representative",
    desc: "Deploy a conversational AI agent answering recruiter questions with proofs.",
    colSpan: "md:col-span-2"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics HUD",
    desc: "Track views, recruiter clicks, and offline document downloads in real time.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <Printer className="w-6 h-6" />,
    title: "PDF Builder",
    desc: "Native, high-quality offline exports matching recruiter review guidelines.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Skills Engine",
    desc: "Map, categorize, and emphasize soft, technical, and strategic competencies.",
    colSpan: "md:col-span-2"
  }
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-40 px-6 border-t border-white/5 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest">
            System Modules
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            The Product <span className="text-accent">Ecosystem.</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            A unified suite of tools replacing standard single-purpose editors. Built as a coordinated career infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card p-8 rounded-[2.5rem] border-white/5 bg-slate-900/40 relative overflow-hidden group flex flex-col justify-between ${mod.colSpan}`}
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/5 text-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {mod.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{mod.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">{mod.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
