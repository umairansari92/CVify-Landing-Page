"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Book, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Target, 
  Gem, 
  ChevronRight, 
  FileText, 
  ArrowLeft,
  Users
} from "lucide-react";
import { useRouter } from "next/navigation";

const Documentation = () => {
  const router = useRouter();
  const [activeTab, setActiveTab ] = useState("guide");

  const sections = {
    guide: [
      {
        id: "start",
        title: "Getting Started (3-Min Setup)",
        icon: <Zap size={20} />,
        content: `
          1. **Create Account**: Click "Signup" and verify your professional email.
          2. **Update Core Profile**: Add your name, headline, and bio in the Profile Settings.
          3. **Sync GitHub**: Connect your GitHub URL to automatically highlight your project metrics.
          4. **Go Live**: Your Public Portfolio is instantly live at app-cvifypro.vercel.app/p/your-username.
        `
      },
      {
        id: "ats",
        title: "Scanning Your Resume",
        icon: <Target size={20} />,
        content: `
          - **Step 1**: Go to the "ATS Scanner" tab in your dashboard.
          - **Step 2**: Upload a PDF or DOCX file (Max 5MB).
          - **Step 3**: Paste the target Job Description (JD).
          - **Step 4**: Select your market mode (Standard, Remote, Freelance, or Pakistan HR).
          - **Step 5**: Click "Start Scan" (Costs 50 Diamonds).
        `
      },
      {
        id: "universal",
        title: "Universal Agency (From Peon to CEO)",
        icon: <Users size={20} />,
        content: `
          CVify Pro is NOT just for techies. It is designed for:
          - **Tech Professionals**: Devs, Data Scientists, Architects.
          - **Corporate Leaders**: CEOs, Managers, Bankers.
          - **Service Industry**: Teachers, Receptionists, peons.
          - **Creatives**: Designers, Writers, Marketers.
          *The AI adapts its scoring and tone based on your specific field automatically.*
        `
      },
      {
        id: "faq",
        title: "Frequently Asked Questions (FAQ)",
        icon: <Book size={20} />,
        content: `
          - **Q: My ATS score is low, what should I do?**
            A: Read the "Missing Keywords" section in your audit. Use the suggested "Action Strategy" to insert those skills into your experience bullets.
          - **Q: Is my data safe?**
            A: Yes. Your resumes are only visible to you unless you explicitly toggle the "Public" switch in your dashboard.
        `
      }
    ],
    technical: [
      {
        id: "audit-logic",
        title: "The 3-Layer ATS Audit",
        icon: <Cpu size={20} />,
        content: `
          - **Layer 1: Structural Audit**: Checks for parsing blockers, standard headers, and date formats.
          - **Layer 2: NLP Keyword Match**: Uses Natural Language Processing to find keyword variations and synonyms.
          - **Layer 3: AI Deep Audit**: Gemini 2.5 Flash analyzes context, impact, and "X-Factor" quantified bullets.
        `
      },
      {
        id: "ai-formula",
        title: "Google 'XYZ' Optimization",
        icon: <FileText size={20} />,
        content: `
          Our AI Rewriter follows the elite Google formula:
          "Accomplished [X] as measured by [Y], by doing [Z]."
          This ensures every bullet point is high-impact and results-oriented.
        `
      },
      {
        id: "security",
        title: "Security & Compliance",
        icon: <ShieldCheck size={20} />,
        content: `
          - **Authentication**: Argon2 hashing for bank-grade security.
          - **Integrity**: JWT with HttpOnly cookies for session protection.
          - **Encryption**: All data is encrypted over HTTPS/TLS 1.3.
        `
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-white">
      {/* ── HEADER ── */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 backdrop-blur-xl border-b border-white/5 flex justify-between items-center lg:px-20 bg-slate-950/50">
        <div className="flex items-center gap-10">
          <button onClick={() => router.push("/")} className="p-3 hover:bg-white/5 rounded-full transition-colors group">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <Image 
            src="/CVify Logo Dark.jpg" 
            alt="CVify Logo" 
            width={120} 
            height={30} 
            className="h-8 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => setActiveTab("guide")}
            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === "guide" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-white/5 hover:bg-white/10"}`}
          >
            User Guide
          </button>
          <button 
            onClick={() => setActiveTab("technical")}
            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === "technical" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-white/5 hover:bg-white/10"}`}
          >
            Technical Specs
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
        {/* ── HERO SECTION ── */}
        <section className="text-center space-y-6 py-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter"
          >
            System <span className="text-blue-500 italic">Intelligence</span> Documentation
          </motion.h1>
          <p className="max-w-2xl mx-auto text-slate-400 font-medium text-lg italic opacity-80 leading-relaxed">
            Har field ke insan ke liye mukammal rehnama. Peon se CEO tak, tech se teacher tak—samjhein ke CVify Pro ki taqat ko kis tarah apne career ke liye use karna hai.
          </p>
        </section>

        {/* ── CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Nav (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-4 sticky top-40 h-fit">
            <div className="p-8 bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/5 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Table of Contents</h4>
              <div className="space-y-2">
                {sections[activeTab as keyof typeof sections].map(s => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 text-xs font-bold text-slate-400 hover:text-white transition-all group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                {sections[activeTab as keyof typeof sections].map((section, idx) => ( section.title && (
                  <div 
                    id={section.id} 
                    key={section.id}
                    className="bg-slate-900/30 backdrop-blur-xl p-10 md:p-16 rounded-[3.5rem] border border-white/10 hover:border-blue-500/20 transition-all space-y-8 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors" />
                    
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        {section.icon}
                      </div>
                      <h2 className="text-3xl font-black tracking-tight">{section.title}</h2>
                    </div>

                    <div className="prose prose-invert max-w-none text-slate-400 font-medium text-lg leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>

                    <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pt-6">
                      <Zap size={12} className="text-blue-500" /> Verified Intelligence Step {idx + 1}
                    </div>
                  </div>
                )))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── FOOTER CTA ── */}
        <section className="text-center py-20 bg-blue-600/5 rounded-[4rem] border border-blue-600/10 space-y-8 px-10">
          <h2 className="text-4xl font-black italic tracking-tight uppercase">Ready to boost your career?</h2>
          <p className="text-slate-500 font-bold opacity-60 uppercase tracking-widest text-xs">Join thousands of professionals winning with CVify Pro</p>
          <a 
            href="https://app-cvifypro.vercel.app/signup"
            className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all text-sm inline-block"
          >
            Start Building Now
          </a>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-white/5 opacity-40">
        <p className="text-[10px] font-black uppercase tracking-[0.5em]">CVify Intelligence Systems &copy; 2026</p>
      </footer>
    </div>
  );
};

export default Documentation;
