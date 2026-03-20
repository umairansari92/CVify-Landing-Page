"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Target, 
  Zap, 
  ShieldCheck, 
  MoveRight, 
  Github, 
  Layers, 
  BarChart3, 
  UserCircle2, 
  CheckCircle2, 
  ArrowRight,
  Star,
  Quote
} from "lucide-react";

const APP_URL = "https://app-cvifypro.vercel.app";

const AnnouncementBar = () => (
  <div className="bg-primary/10 border-b border-primary/20 py-2.5 px-6 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-xs md:text-sm">
      <span className="bg-primary text-white px-2 py-0.5 rounded-[4px] font-black uppercase text-[10px] tracking-wider shadow-sm shadow-primary/40">New</span>
      <p className="font-bold text-slate-300">AI-powered ATS scanner now available</p>
      <a href={`${APP_URL}/signup`} className="text-primary font-black hover:underline inline-flex items-center gap-1 group/btn transition-all">
        Try it now <MoveRight className="w-3 h-3 group-hover/btn:translate-x-1" />
      </a>
    </div>
  </div>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-[2rem] px-8 py-4 flex items-center justify-between border-white/5 shadow-2xl ${isScrolled ? "bg-slate-950/80 backdrop-blur-xl" : ""}`}>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="p-2 bg-slate-900 rounded-xl border border-white/10 shadow-glow group-hover:shadow-primary/40 transition-all">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse shadow-glow" />
            </div>
            <span className="text-2xl font-black text-white font-outfit uppercase tracking-tighter italic group-hover:text-primary transition-colors">CVify</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-400">
            {["Features", "ATS Scanner", "Templates", "Pricing"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href={`${APP_URL}/login`} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Sign In</a>
            <a href={`${APP_URL}/signup`} className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Subtle 3D-like floating elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30"
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-20 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[140px] opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/5 backdrop-blur-md shadow-inner"
          >
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary-foreground text-xs font-black tracking-widest uppercase opacity-80">Free ATS Resume Builder</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white font-outfit"
          >
            Create an <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent animate-shimmer bg-[length:200%_auto]">ATS-Optimized</span> <br />
            Resume for Free
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            The best free CV maker designed to beat the Applicant Tracking Systems. Generate tailored cover letters, and optimize your applications with AI-powered ATS analysis.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a href={`${APP_URL}/signup`} className="group relative bg-primary hover:bg-blue-600 text-white px-10 py-6 rounded-3xl text-xl font-black shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:-translate-y-1 flex items-center gap-3 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               Create My Resume <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://app-cvifypro.vercel.app/p/demo" target="_blank" className="bg-white/5 hover:bg-white/10 text-white px-10 py-6 rounded-3xl text-xl font-black border border-white/5 hover:border-white/10 transition-all flex items-center gap-3 group backdrop-blur-sm">
              View Live Profile Demo <UserCircle2 className="w-6 h-6 text-slate-500 group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* High-Fidelity Product Mockup Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 50 }}
          className="mt-32 relative group"
        >
           {/* Mockup Container */}
           <div className="glass-card p-4 md:p-8 rounded-[4rem] border-white/5 shadow-premium perspective-1000 group-hover:rotate-x-1 transition-transform duration-1000">
              <div className="relative rounded-[3rem] overflow-hidden bg-slate-950 aspect-[16/10] border border-white/10 shadow-inner">
                 
                 {/* Top Navigation Simulation */}
                 <div className="h-16 border-b border-white/5 flex items-center px-10 justify-between bg-slate-900/50">
                    <div className="flex gap-4">
                       <div className="w-3 h-3 rounded-full bg-error" />
                       <div className="w-3 h-3 rounded-full bg-warning" />
                       <div className="w-3 h-3 rounded-full bg-success" />
                    </div>
                    <div className="h-6 w-48 bg-white/5 rounded-full" />
                 </div>

                 {/* Editor Simulation */}
                 <div className="grid grid-cols-12 h-full">
                    {/* Sidebar */}
                    <div className="col-span-3 border-r border-white/5 p-8 space-y-6">
                       <div className="h-8 w-24 bg-primary/20 rounded-xl" />
                       <div className="space-y-3 pt-6">
                          {[60, 40, 80, 50].map((w, i) => (
                             <div key={i} className="h-2 bg-slate-800 rounded-full" style={{ width: `${w}%` }} />
                          ))}
                       </div>
                    </div>

                    {/* Main Canvas */}
                    <div className="col-span-9 p-12 relative overflow-hidden">
                       <div className="max-w-xl mx-auto bg-white/5 rounded-3xl p-10 border border-white/5 space-y-8">
                          <div className="flex justify-between items-start">
                             <div className="space-y-4">
                                <div className="h-8 w-48 bg-white/10 rounded-xl" />
                                <div className="h-3 w-32 bg-slate-700 rounded-lg" />
                             </div>
                             <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-white/5" />
                          </div>
                          
                          <div className="space-y-4">
                             <div className="h-4 w-full bg-slate-700/50 rounded-lg" />
                             <div className="h-4 w-5/6 bg-slate-700/50 rounded-lg" />
                             <div className="h-4 w-4/6 bg-slate-700/50 rounded-lg" />
                          </div>

                          {/* Floatings - AI Suggestion */}
                          <motion.div 
                             initial={{ x: 50, opacity: 0 }}
                             animate={{ x: 0, opacity: 1 }}
                             transition={{ delay: 1, duration: 1 }}
                             className="absolute top-20 right-10 glass-card p-6 rounded-3xl border-primary/20 shadow-glow space-y-3 max-w-[280px]"
                          >
                             <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">AI Suggestion</span>
                             </div>
                             <p className="text-[11px] font-bold text-white italic">"Increased team productivity by 35% through Agile..."</p>
                             <div className="pt-2 flex gap-2">
                                <div className="px-2 py-1 rounded bg-primary/10 text-primary text-[9px] font-black">APPLY</div>
                             </div>
                          </motion.div>

                          {/* ATS Score Simulation */}
                          <motion.div 
                             initial={{ y: 50, opacity: 0 }}
                             animate={{ y: 0, opacity: 1 }}
                             transition={{ delay: 1.5, duration: 1 }}
                             className="absolute bottom-20 left-10 glass-card p-6 rounded-[2.5rem] border-accent/20 flex items-center gap-6"
                          >
                             <div className="relative w-16 h-16">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-800" strokeWidth="3" />
                                  <motion.circle 
                                    cx="18" cy="18" r="16" fill="none" 
                                    className="stroke-accent" 
                                    strokeWidth="3.5"
                                    strokeDasharray="100"
                                    initial={{ strokeDashoffset: 100 }}
                                    animate={{ strokeDashoffset: 18 }}
                                    transition={{ duration: 2, delay: 2 }}
                                  />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-white">82</span>
                             </div>
                             <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ATS Score</p>
                                <p className="text-xs font-bold text-success">EXCELLENT</p>
                             </div>
                          </motion.div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Abstract Orbs for Depth */}
           <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[60px] animate-float" />
           <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/20 rounded-full blur-[80px] animate-float-delayed" />
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section className="py-20 border-y border-white/5 bg-slate-900/20 px-6">
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-12">Trusted by job seekers worldwide</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
         {["Google", "Amazon", "Microsoft", "Meta", "Tesla", "SpaceX"].map((logo) => (
           <span key={logo} className="text-2xl md:text-3xl font-black text-white hover:text-primary transition-colors cursor-default select-none">{logo}</span>
         ))}
      </div>
    </div>
  </section>
);


const Problem = () => {
  const problems = [
    {
      icon: <Target className="w-8 h-8 text-error" />,
      title: "75% Silent Rejection",
      description: "Most resumes are rejected by Applicant Tracking Systems (ATS) before they even reach a human recruiter."
    },
    {
      icon: <Layers className="w-8 h-8 text-error" />,
      title: "Highlight Struggle",
      description: "Job seekers often struggle to phrase their achievements in a way that resonates with industry standards."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-error" />,
      title: "Time Consumption",
      description: "Writing tailored cover letters for every single application takes too much time and kills productivity."
    }
  ];

  return (
    <section id="problem" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-error/10 border border-error/20">
               <ShieldCheck className="w-4 h-4 text-error" />
               <span className="text-error text-[10px] font-black uppercase tracking-widest">The Problem</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter text-white font-outfit">
              Job Applications <br />
              <span className="text-error">Are Broken.</span>
            </h2>
            <div className="space-y-8">
              {problems.map((prob, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-error/10 border border-error/20 flex items-center justify-center transition-transform group-hover:rotate-6">
                    {prob.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{prob.title}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed">{prob.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-error/10 blur-[100px] rounded-full"></div>
            <div className="glass-card p-12 rounded-[3.5rem] border-error/20 space-y-8 relative overflow-hidden text-center">
               <div className="flex justify-center mb-6">
                  <div className="p-5 bg-error/20 rounded-full border border-error/20 animate-pulse">
                     <Target className="w-10 h-10 text-error" />
                  </div>
               </div>
               <div className="space-y-2">
                  <h4 className="text-xl font-black text-white">ATS Status: REJECTED</h4>
                  <p className="text-sm text-slate-500 font-medium">Reason: Missing keywords 'Cloud-Native', 'Agile Leadership'</p>
               </div>
               <div className="pt-8 border-t border-white/5 space-y-4 opacity-40 grayscale">
                 <div className="h-4 w-3/4 bg-slate-800 rounded mx-auto" />
                 <div className="h-4 w-full bg-slate-800 rounded" />
                 <div className="h-4 w-1/2 bg-slate-800 rounded mx-auto" />
               </div>
               <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-error text-white px-4 py-2 rounded-l-xl font-black text-[10px] tracking-tighter rotate-90 shadow-xl">UNREAD</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => (
  <section id="solution" className="py-40 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
          <Sparkles className="w-4 h-4 text-success" />
          <span className="text-success text-xs font-black tracking-widest uppercase font-outfit">Meet CVify</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter text-white font-outfit">
          Intelligent Branding for <br />
          <span className="text-action">Modern Builders.</span>
        </h2>
        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
          CVify combines AI resume writing, ATS analysis, and recruiter-ready portfolios into one powerful platform designed for high-impact professionals.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 relative w-full"
      >
         <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full" />
         <div className="glass-card p-4 md:p-10 rounded-[4rem] border-white/5 overflow-hidden shadow-premium relative">
            <div className="aspect-[16/9] bg-slate-950 rounded-[3rem] border border-white/10 flex items-center justify-center p-12 overflow-hidden group">
               <div className="grid grid-cols-2 gap-12 w-full text-left">
                  <div className="space-y-6">
                     <div className="h-10 w-48 bg-white/10 rounded-2xl" />
                     <div className="space-y-3">
                        <div className="h-3 w-full bg-slate-800 rounded" />
                        <div className="h-3 w-5/6 bg-slate-800 rounded" />
                        <div className="h-3 w-4/6 bg-slate-800 rounded" />
                     </div>
                     <div className="pt-4 flex gap-3">
                        <div className="h-12 w-32 bg-primary/20 rounded-xl" />
                        <div className="h-12 w-12 bg-white/5 rounded-xl" />
                     </div>
                  </div>
                  <div className="relative">
                     <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 blur-3xl opacity-50" />
                     <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] space-y-6">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-primary" />
                           <div className="h-4 w-32 bg-slate-700 rounded" />
                        </div>
                        <div className="space-y-2">
                           <div className="h-2 w-full bg-slate-800 rounded" />
                           <div className="h-2 w-full bg-slate-800 rounded" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-12 flex items-end justify-center">
                  <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">CVify Dashboard Simulation</span>
               </div>
            </div>
         </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "AI Resume Builder",
      description: "Smart suggestions and guided forms ensure your resume is professionally structured and impactful.",
      points: ["Real-time editing", "Industry-standard phrasing"]
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "ATS Scanner",
      description: "Analyze your resume against job descriptions to see your matching score and keyword gaps.",
      points: ["Real-time scoring", "Keyword suggestions"]
    },
    {
      icon: <MoveRight className="w-8 h-8 text-diamond" />,
      title: "AI Cover Letter",
      description: "Generate tailored cover letters instantly using advanced AI that understands job requirements.",
      points: ["Gemini-powered", "Tailored content"]
    },
    {
      icon: <UserCircle2 className="w-8 h-8 text-success" />,
      title: "Public Profile",
      description: "A professional, live career page that recruiters can visit and interact with safely.",
      points: ["Shareable link", "Recruiter analytics"]
    }
  ];

  return (
    <section id="features" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter">The Ultimate Resume Builder Features</h2>
          <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">Everything you need to bypass ATS algorithms and land your dream role.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="mb-8 p-4 bg-slate-900 rounded-[1.5rem] border border-white/5 w-fit group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{feat.title}</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">{feat.description}</p>
              <ul className="space-y-3">
                {feat.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InteractiveDemo = () => (
  <section className="py-40 px-6 relative overflow-hidden bg-slate-900/10">
    <div className="max-w-7xl mx-auto">
       <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white font-outfit tracking-tighter leading-tight">Watch the CVify <br /><span className="text-primary text-5xl md:text-8xl">Magic.</span></h2>
            <p className="text-xl text-slate-400 font-medium">From blank page to professional presence in minutes. See how our AI transforms raw experience into refined branding.</p>
            <div className="space-y-6">
               {[
                 { step: "01", text: "AI analyzes your background" },
                 { step: "02", text: "ATS Engine optimizes keywords" },
                 { step: "03", text: "Gemini writes tailored content" }
               ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <span className="text-3xl font-black text-primary opacity-20 font-outfit">{s.step}</span>
                    <span className="text-lg font-bold text-white">{s.text}</span>
                  </div>
               ))}
            </div>
          </motion.div>

          <div className="relative">
             <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
             <div className="glass-card p-4 rounded-[4rem] border-white/5 shadow-premium overflow-hidden aspect-[4/3] relative">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   {/* Animated Demo simulation */}
                   <motion.div 
                     animate={{ opacity: [0, 1, 0], y: [20, 0, -20] }}
                     transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
                     className="glass-card p-10 rounded-[2.5rem] border-primary/20 space-y-6 max-w-sm w-full bg-slate-900 shadow-2xl"
                   >
                      <div className="flex gap-3 items-center">
                         <Sparkles className="w-6 h-6 text-primary" />
                         <div className="h-4 w-32 bg-white/10 rounded" />
                      </div>
                      <div className="space-y-2">
                         <div className="h-2 w-full bg-slate-800 rounded" />
                         <div className="h-2 w-5/6 bg-slate-800 rounded" />
                      </div>
                      <div className="pt-4 border-t border-white/5 flex justify-end">
                         <div className="px-4 py-2 bg-primary/20 text-primary text-[10px] font-black rounded-lg">CALCULATING MATCH...</div>
                      </div>
                   </motion.div>
                </div>
                <div className="absolute inset-x-0 bottom-0 py-8 text-center">
                   <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Interactive App Simulation</p>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

const TemplateShowcase = () => {
  const templates = [
    { title: "Classic", desc: "For traditional high-impact corporate roles.", color: "bg-slate-200" },
    { title: "Modern", desc: "Sleek, creative, and optimized for tech startups.", color: "bg-primary/20" },
    { title: "Minimal", desc: "Clean lines and high readability for all roles.", color: "bg-slate-800" }
  ];

  return (
    <section id="templates" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white font-outfit tracking-tighter mb-6">Battle-Tested Templates</h2>
          <p className="text-lg text-slate-400 font-medium">Every template is engineered to be human-readable and 100% ATS friendly.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 w-full">
          {templates.map((tpl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] glass-card rounded-[3.5rem] border-white/5 overflow-hidden p-6 mb-8 group-hover:scale-[1.02] transition-all duration-500">
                <div className={`w-full h-full rounded-[2.5rem] border border-white/5 ${tpl.color} opacity-40 group-hover:opacity-60 transition-opacity p-10 space-y-6 overflow-hidden`}>
                  <div className="h-4 w-3/4 bg-white/20 rounded" />
                  <div className="h-4 w-1/2 bg-white/20 rounded" />
                  <div className="pt-10 space-y-4">
                    {[1, 2, 3, 4, 5, 6].map(n => <div key={n} className="h-1.5 w-full bg-white/10 rounded" />)}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="bg-white text-black px-8 py-4 rounded-2xl font-black text-sm shadow-2xl">Use Template</button>
                </div>
              </div>
              <div className="text-center px-6">
                <h3 className="text-xl font-black text-white mb-2">{tpl.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{tpl.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioShowcase = () => (
  <section id="portfolio" className="py-40 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-outfit">
          <UserCircle2 className="w-4 h-4 text-primary" />
          <span className="text-primary text-xs font-black tracking-widest uppercase">Real-World Impact</span>
        </div>
        <h2 className="text-4xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter leading-[0.9]">Meet Our <br /><span className="text-action">Power Users.</span></h2>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">See how CVify helps top-tier professionals like Umair build an undeniable online presence.</p>
        <div className="mt-12 p-4 rounded-3xl bg-white/5 border border-white/5 inline-flex items-center gap-6 text-lg font-black text-primary hover:bg-white/10 transition-colors group cursor-pointer">
           app-cvifypro.vercel.app/p/umairansari92 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 items-center w-full">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="lg:col-span-12 relative"
         >
            <div className="glass-card p-4 rounded-[4rem] border-white/5 shadow-premium group">
               <div className="relative rounded-[3.5rem] overflow-hidden bg-slate-900 aspect-video p-12">
                  <div className="grid md:grid-cols-2 gap-20 items-center h-full">
                     <div className="space-y-10 text-left">
                        <div className="flex items-center gap-8">
                           <div className="w-24 h-24 rounded-3xl bg-primary/20 flex items-center justify-center border border-primary/20 text-4xl group-hover:rotate-6 transition-transform">🚀</div>
                           <div className="space-y-2">
                              <h3 className="text-3xl font-black text-white">Umair Ansari</h3>
                              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Lead Product Architect @ CVify</p>
                           </div>
                        </div>
                        <div className="space-y-4">
                           <div className="h-2 w-full bg-slate-800 rounded" />
                           <div className="h-2 w-5/6 bg-slate-800 rounded" />
                           <div className="h-2 w-4/6 bg-slate-800 rounded" />
                        </div>
                        <div className="flex gap-4">
                           <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black text-slate-400 uppercase">Architecture</div>
                           <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black text-slate-400 uppercase">Strategic Growth</div>
                        </div>
                        <div className="flex gap-4 pt-4">
                           <button className="bg-primary text-white p-4 rounded-2xl font-black text-sm">View Full Profile</button>
                           <button className="bg-white/5 text-white p-4 rounded-2xl font-black text-sm border border-white/5">Connect</button>
                        </div>
                     </div>
                     
                     <div className="space-y-10 bg-slate-950/50 p-12 rounded-[3.5rem] border border-white/5 relative shadow-inner h-full flex flex-col justify-center">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Live Profile Insights</h4>
                           <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                           <div className="space-y-3">
                              <p className="text-5xl font-black text-white">2.4k</p>
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Views</p>
                           </div>
                           <div className="space-y-3">
                              <p className="text-5xl font-black text-success">842</p>
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hiring Interest</p>
                           </div>
                        </div>
                        <div className="pt-8 border-t border-white/5 text-left">
                           <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
                             <BarChart3 className="w-5 h-5 text-primary" /> Authority score: Top 1% in sector
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
    </div>
  </section>
);

const AuthoritySearch = () => (
  <section className="py-20 px-6 relative overflow-hidden bg-slate-900/5">
     <div className="max-w-4xl mx-auto bg-slate-950/50 border border-white/5 p-12 rounded-[4rem] backdrop-blur-3xl shadow-glow relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
           <div className="flex-1 relative w-full">
              <input 
                 type="text" 
                 placeholder="Search public profiles (e.g., 'Software Engineer in London')" 
                 className="w-full bg-white/5 border border-white/10 p-6 rounded-[2rem] text-white font-bold outline-none focus:border-primary/50 transition-all placeholder:text-slate-600"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 px-6 py-2 rounded-xl bg-primary/20 text-primary font-black uppercase text-[10px] tracking-widest">Enter</div>
           </div>
           <button className="bg-primary hover:bg-blue-600 text-white px-10 py-6 rounded-[2rem] font-black shadow-lg shadow-primary/20 flex items-center gap-3 w-full md:w-auto justify-center">
              Discover Talent <Target className="w-5 h-5" />
           </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
           {["Top Rated", "Available Now", "Identity Verified", "Enterprise Connect"].map((tag, i) => (
             <span key={i} className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-success" /> {tag}
             </span>
           ))}
        </div>
     </div>
  </section>
);

const ATSIntelligence = () => {
  const points = [
    { title: "Keyword Detection", icon: <Sparkles className="w-5 h-5 text-accent" /> },
    { title: "Quantifiable Impact", icon: <BarChart3 className="w-5 h-5 text-accent" /> },
    { title: "Structure Validation", icon: <ShieldCheck className="w-5 h-5 text-accent" /> }
  ];

  return (
    <section id="ats" className="py-40 px-6 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-accent text-xs font-black tracking-widest uppercase font-outfit">Deep Analysis</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter leading-tight">Crush the Robot <br /><span className="text-accent">Algorithms.</span></h2>
          <p className="text-xl text-slate-400 font-medium">Our platform performs a multi-dimensional scan of your resume against target job descriptions, ensuring every byte is optimized for discovery.</p>
          <div className="space-y-6">
            {points.map((p, i) => (
               <div key={i} className="flex gap-4 items-center p-6 glass-card rounded-2xl border-white/5 bg-white/[0.02]">
                  {p.icon}
                  <span className="text-lg font-bold text-white">{p.title}</span>
               </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="absolute -inset-20 bg-accent/10 blur-[140px] rounded-full" />
          <div className="glass-card p-12 rounded-[4rem] border-accent/20 bg-slate-950/80 backdrop-blur-3xl space-y-10 relative overflow-hidden text-center shadow-premium">
             <div className="relative w-48 h-48 mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-slate-800" strokeWidth="2.5" />
                  <motion.circle 
                    cx="18" cy="18" r="16" fill="none" 
                    className="stroke-accent" 
                    strokeWidth="3.5"
                    strokeDasharray="100"
                    initial={{ strokeDashoffset: 100 }}
                    whileInView={{ strokeDashoffset: 22 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-6xl font-black text-white">78%</span>
                   <span className="text-[10px] font-black tracking-[0.2em] text-accent uppercase mt-1">Match Score</span>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
                {[
                  { label: "Designation Match", val: "94%", color: "text-success" },
                  { label: "Keyword Density", val: "62%", color: "text-warning" }
                ].map((m, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</p>
                    <p className={`text-2xl font-black ${m.color}`}>{m.val}</p>
                  </div>
                ))}
             </div>
             <div className="absolute inset-x-0 bottom-4 text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">ATS Analysis engine v4.2</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AICoverLetter = () => (
  <section id="cover-letter" className="py-40 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-diamond/10 border border-diamond/20 mb-6 font-outfit">
          <MoveRight className="w-4 h-4 text-diamond" />
          <span className="text-diamond text-xs font-black tracking-widest uppercase">Tailored Impact</span>
        </div>
        <h2 className="text-4xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter leading-[0.9]">Instant AI <br /><span className="text-diamond">Cover Letters.</span></h2>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">Generate persuasive, job-specific cover letters in seconds using advanced Gemini AI that understands both your profile and the recruiter's needs.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
         <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
         >
            <div className="glass-card p-12 rounded-[4rem] border-diamond/20 bg-slate-950/50 backdrop-blur-2xl space-y-8 relative overflow-hidden shadow-premium">
               <div className="flex justify-between items-center border-b border-white/5 pb-6">
                  <div className="flex gap-2 items-center">
                     <span className="w-3 h-3 rounded-full bg-diamond" />
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">Gemini Output v1.5</span>
                  </div>
                  <div className="flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-slate-800" />
                     <div className="w-2 h-2 rounded-full bg-slate-800" />
                  </div>
               </div>
               <div className="space-y-6">
                  <p className="text-sm font-bold text-white leading-relaxed">Dear Hiring Manager,</p>
                  <p className="text-sm text-slate-400 leading-relaxed">I am writing to express my strong interest in the Senior Software Engineer position at TechCorp. With my extensive background in <span className="text-diamond font-black">Full-Stack Development</span> and a proven track record of <span className="text-diamond font-black">optimizing ATS-friendly workflows</span>...</p>
                  <div className="h-2 w-full bg-slate-800 rounded opacity-40" />
                  <div className="h-2 w-5/6 bg-slate-800 rounded opacity-40" />
               </div>
               <div className="pt-8 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500">
                     <ShieldCheck className="w-4 h-4" /> 50 Diamonds Used
                  </div>
                  <button className="bg-diamond/10 border border-diamond/20 text-diamond px-6 py-2 rounded-xl text-[10px] font-black hover:bg-diamond/20 transition-all uppercase tracking-widest">Regenerate</button>
               </div>
            </div>
         </motion.div>

         <div className="space-y-12">
            {[
              { title: "Context Aware", desc: "Reads your resume and JD to find the perfect overlap." },
              { title: "Tone Customization", desc: "Choose between Professional, Creative, or Bold tones." },
              { title: "One-Click Export", desc: "Download as PDF or link directly to your live portfolio." }
            ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex gap-6 items-start group"
               >
                  <div className="w-14 h-14 rounded-2xl bg-diamond/10 border border-diamond/20 flex items-center justify-center text-diamond group-hover:scale-110 transition-transform">
                     <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 font-medium">{item.desc}</p>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  </section>
);

const AnalyticsShowcase = () => (
  <section id="analytics" className="py-40 px-6 relative overflow-hidden bg-slate-900/10">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex-1 space-y-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 font-outfit">
          <BarChart3 className="w-4 h-4 text-success" />
          <span className="text-success text-xs font-black tracking-widest uppercase">Data Driven</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter leading-tight">Insight Into Your <br /><span className="text-success">Applications.</span></h2>
        <p className="text-xl text-slate-400 font-medium">Track who is viewing your profile, from where, and which parts of your resume are grabbing the most attention. Stop guessing, start knowing.</p>
        <div className="grid grid-cols-2 gap-6">
           <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Avg. Session</span>
              <p className="text-3xl font-black text-white font-outfit">4m 12s</p>
           </div>
           <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Save Rate</span>
              <p className="text-3xl font-black text-white font-outfit">8.4%</p>
           </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex-1 relative"
      >
        <div className="absolute -inset-10 bg-success/10 blur-[120px] rounded-full" />
        <div className="glass-card p-12 rounded-[4rem] border-white/5 bg-slate-950/80 backdrop-blur-3xl space-y-10 relative overflow-hidden shadow-premium">
           <div className="flex justify-between items-center bg-slate-900/50 p-6 rounded-3xl border border-white/5">
              <div className="space-y-1">
                 <p className="text-sm font-black text-white">Viewer Location</p>
                 <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Top regions this week</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-success">+12% vs last week</p>
              </div>
           </div>
           <div className="space-y-6 py-4">
              {[
                { name: "United States", val: 65 },
                { name: "United Kingdom", val: 42 },
                { name: "Germany", val: 28 },
                { name: "Canada", val: 18 }
              ].map((loc, i) => (
                 <div key={i} className="space-y-3">
                    <div className="flex justify-between text-xs font-black text-slate-400 px-1 uppercase tracking-widest">
                       <span>{loc.name}</span>
                       <span>{loc.val}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${loc.val}%` }}
                         transition={{ duration: 1, delay: i * 0.1 }}
                         className="h-full bg-success rounded-full" 
                       />
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-40 px-6 relative bg-slate-900/20 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter text-white font-outfit">The CVify Flow</h2>
        <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">Four steps to a professional presence that commands attention and crushes competition.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <ShieldCheck />, title: "Create Identity", text: "Sign up and build your secure professional profile." },
          { icon: <Zap />, title: "Add Assets", text: "Import your experience, skills, and proudest achievements." },
          { icon: <Sparkles />, title: "Generate & Polish", text: "Use AI to write resumes and optimize for ATS match." },
          { icon: <Target />, title: "Launch & Share", text: "Publish your live portfolio and track recruiter views." }
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-12 glass-card rounded-[3.5rem] text-center border-white/5 hover:border-primary/40 transition-all"
          >
             <div className="w-24 h-24 rounded-[2rem] bg-slate-900 border border-white/5 flex items-center justify-center text-primary mb-10 mx-auto relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-2xl">
               {step.icon}
               <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-black text-white shadow-glow">0{i+1}</div>
             </div>
             <h3 className="text-2xl font-black text-white mb-4">{step.title}</h3>
             <p className="text-slate-400 text-sm font-medium leading-relaxed">{step.text}</p>
             {i < 3 && (
               <div className="hidden lg:block absolute top-[25%] -right-8 w-16 h-0.5 bg-gradient-to-r from-primary/20 to-transparent dashed" />
             )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ChoosingCVify = () => (
  <section id="why-us" className="py-40 px-6 max-w-7xl mx-auto overflow-hidden">
    <div className="text-center mb-20 space-y-4">
      <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-white font-outfit uppercase">Why Choose CVify</h2>
      <p className="text-slate-400 font-medium text-xl italic max-w-2xl mx-auto font-outfit">High-performance features engineered for the top 1% of the global workforce.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "AI Guided Writing", desc: "No more writer's block. AI suggests high-impact bullet points." },
        { title: "Deep ATS Analysis", desc: "Understand exactly how robots read your resume." },
        { title: "Recruiter Portfolio", desc: "Manage your professional brand from one central dashboard." },
        { title: "Interactive Previews", desc: "See your resume change instantly as you build it." },
        { title: "Premium Templates", desc: "Exclusive layouts designed to stand out in the pile." },
        { title: "Secure & Verified", desc: "Your data is encrypted and protected by enterprise-grade security." }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 glass-card rounded-[3rem] border-white/5 border hover:border-primary/40 transition-all group"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-7 h-7 text-success" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
          <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ScoreSimulator = () => {
  const [score, setScore] = React.useState(0);
  
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24 max-w-4xl"
         >
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-outfit">
             <Target className="w-4 h-4 text-primary" />
             <span className="text-primary text-xs font-black tracking-widest uppercase">Quick Check</span>
           </div>
           <h2 className="text-4xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter leading-[0.9]">Resume Score <br /><span className="text-primary">Simulator.</span></h2>
           <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto italic">Curious about your current resume? Move the slider to see how AI might perceive your document's strength.</p>
         </motion.div>

         <div className="w-full max-w-2xl glass-card p-12 rounded-[4rem] border-white/5 space-y-12 relative">
            <div className="text-center space-y-6">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Estimated Strength</span>
               <div className="text-8xl font-black text-white font-outfit">{score}%</div>
               <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${score}%` }}
                    className={`h-full transition-colors duration-500 ${score > 80 ? 'bg-success' : score > 50 ? 'bg-warning' : 'bg-error'}`}
                  />
               </div>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={score} 
              onChange={(e) => setScore(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="text-center">
               <p className="text-sm font-bold text-slate-500">
                  {score > 80 ? "🔥 Elite Professional Narrative" : score > 50 ? "⚡ Room for Optimization" : "⚠️ Needs Immediate Attention"}
               </p>
            </div>
         </div>
      </div>
    </section>
  );
};

const SecurityTrust = () => (
  <section className="py-40 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
       <div className="glass-card p-20 rounded-[5rem] border-white/5 bg-slate-900/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
             <ShieldCheck className="w-64 h-64 text-white" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10 relative z-10"
          >
             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 uppercase tracking-widest text-[10px] font-black text-slate-400">Security First Portfolio</div>
             <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter">Your Data is <br /> <span className="text-primary italic">Fort Knox</span> Secure.</h2>
             <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">We use enterprise-grade encryption and secure identity management to ensure your professional assets and contact details are only visible to verified recruiters you choose.</p>
             <div className="flex flex-wrap justify-center gap-12 pt-10">
                {["AES-256 Encryption", "Role-Based Access", "Verified Recruiters Only", "GDPR Compliant"].map((trust, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-black text-white uppercase tracking-widest">
                     <CheckCircle2 className="w-5 h-5 text-primary" /> {trust}
                  </div>
                ))}
             </div>
          </motion.div>
       </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-40 px-6 relative border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-8xl font-black text-white font-outfit tracking-tighter uppercase leading-[0.8] mb-6">Voices of <br /><span className="text-primary italic">Success.</span></h2>
        <p className="text-slate-400 font-medium text-xl mt-4 italic max-w-2xl mx-auto">Join thousands of professionals across diverse industries who elevated their career with CVify.</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { 
            text: "CVify helped me improve my resume match score from 40% to 85%. I landed an interview at a top fintech firm within two weeks.", 
            author: "A. Ahmed", 
            role: "Senior Accountant @ Global Capital",
            img: "testi_ahmed_1772825816397.png"
          },
          { 
            text: "The AI cover letter generator is a total game changer. It saved me hours of writing and actually captures my professional voice perfectly.", 
            author: "K. Khan", 
            role: "UI/UX Designer @ CreativeFlow",
            img: "testi_khan_1772825832845.png"
          },
          { 
            text: "Having a live portfolio that tracks recruiter views made me feel so much more in control. It's not just a resume; it's a branding machine.", 
            author: "F. Siddiqui", 
            role: "Analyst @ DataDynamics",
            img: "testi_fatima_1772825852029.png"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 rounded-[3rem] border-white/5 relative group hover:border-primary/30 transition-all"
          >
             <Quote className="w-12 h-12 text-blue-500/20 absolute top-8 right-8" />
             <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10 relative z-10 italic">"{item.text}"</p>
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform">
                   <Image 
                      src={`/${item.img}`} 
                      alt={item.author} 
                      width={64} 
                      height={64} 
                      className="w-full h-full object-cover"
                   />
                </div>
                <div>
                   <p className="text-xl font-black text-white">{item.author}</p>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.role}</p>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-40 px-6 relative overflow-hidden bg-slate-900/40">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white font-outfit mb-6 tracking-tight">The Diamond Economy.</h2>
        <p className="text-lg text-slate-400 font-medium leading-relaxed">We believe in transparent, usage-based access. Keep the core features for free, or power up with AI using our unique diamond system.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Free Plan */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[4rem] border-white/5 relative group"
        >
          <div className="mb-10">
             <h3 className="text-2xl font-black text-white mb-2">Standard</h3>
             <p className="text-slate-400 text-sm font-medium">Perfect for starters.</p>
          </div>
          <div className="text-5xl font-black text-white mb-10">$0<span className="text-lg text-slate-500 font-bold">/mo</span></div>
          <ul className="space-y-4 mb-12">
             {["Unlimited Resumes", "Standard Templates", "Basic Profile", "Manual Cover Letters"].map((item, i) => (
               <li key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                 <CheckCircle2 className="w-5 h-5 text-success" /> {item}
               </li>
             ))}
          </ul>
          <a href={`${APP_URL}/signup`} className="block text-center py-5 rounded-3xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all uppercase tracking-widest text-xs">Start for Free</a>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[4rem] border-primary/20 relative group overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8">
             <div className="bg-primary/20 text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-primary/20">PREMIUM AI</div>
          </div>
          <div className="mb-10">
             <h3 className="text-2xl font-black text-white mb-2">AI Pro</h3>
             <p className="text-slate-400 text-sm font-medium">For the elite job hunter.</p>
          </div>
          <div className="text-5xl font-black text-white mb-10 flex items-center gap-3">
             50 <div className="p-2 bg-diamond/10 rounded-xl border border-diamond/20"><Sparkles className="w-6 h-6 text-diamond" /></div>
          </div>
          <ul className="space-y-4 mb-12">
             {["AI AI Powered Writer", "Deep ATS Match Score", "Unlimited AI Cover Letters", "Analytics Dashboard"].map((item, i) => (
               <li key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                 <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
               </li>
             ))}
          </ul>
          <a href={`${APP_URL}/signup`} className="block text-center py-5 rounded-3xl bg-primary text-white font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all uppercase tracking-widest text-xs">Unlock AI Power</a>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-32 px-6 border-t border-white/5 bg-slate-950">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
      <div className="space-y-8">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-slate-900 rounded-xl border border-white/10 shadow-glow">
              <Sparkles className="w-6 h-6 text-primary" />
           </div>
           <span className="text-2xl font-black text-white font-outfit uppercase tracking-tighter italic">CVify</span>
        </div>
        <p className="text-slate-500 font-medium leading-relaxed">
          The all-in-one professional ecosystem for modern builders, leaders, and dreamers.
        </p>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Product</h4>
        <ul className="space-y-4 text-slate-500 font-bold text-sm">
           <li><a href="#features" className="hover:text-primary transition-colors">AI Builder</a></li>
           <li><a href="#pricing" className="hover:text-primary transition-colors">ATS Scanner</a></li>
           <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolios</a></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Resources</h4>
        <ul className="space-y-4 text-slate-500 font-bold text-sm">
           <li><a href="#" className="hover:text-primary transition-colors">Resume Tips</a></li>
           <li><a href="#" className="hover:text-primary transition-colors">Career Advice</a></li>
           <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Join the Elite</h4>
        <p className="text-slate-500 text-xs leading-relaxed italic">"A resume is not just a document; it's your professional manifesto."</p>
        <div className="flex gap-4">
           {/* Social icons placeholders */}
           <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-primary transition-all cursor-pointer"><Github className="w-5 h-5" /></div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-20 border-t border-white/5 mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
       <p className="text-slate-600 text-sm font-medium">© 2026 CVify. All rights reserved.</p>
       <div className="flex gap-8 text-slate-600 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
       </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="bg-background text-foreground bg-mesh selection:bg-primary/30 min-h-screen">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Features />
        <InteractiveDemo />
        <TemplateShowcase />
        <HowItWorks />
        <PortfolioShowcase />
        <AuthoritySearch />
        <ATSIntelligence />
        <AICoverLetter />
        <AnalyticsShowcase />
        <ChoosingCVify />
        <ScoreSimulator />
        <Testimonials />
        <Pricing />
        <SecurityTrust />
        
        {/* Final CTA */}
        <section className="py-40 px-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-card p-20 md:p-32 rounded-[5rem] text-center border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-white font-outfit">Join the Elite 1%.</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-lg mx-auto font-medium">Create your undeniable professional presence today. Build, optimize, and launch for free.</p>
            <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white px-16 py-8 rounded-[3rem] text-2xl font-black shadow-2xl shadow-primary/40 transition-all hover:scale-105 glow-btn">
              Launch My Career <ArrowRight className="w-8 h-8" />
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
