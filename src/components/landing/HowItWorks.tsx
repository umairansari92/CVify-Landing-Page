"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileUp, Cpu, Sparkles, Trophy } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp className="w-8 h-8" />,
      title: "Upload Your Resume",
      text: "Import your existing CV in seconds. No setup needed.",
      micro: "Instant import",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Scan",
      text: "Finds EXACT reasons for rejection. CVify analyzes why it gets filtered.",
      micro: "Deep Analysis",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smart Optimization",
      text: "Auto-fixes weak content in seconds. Add missing keywords and improve structure.",
      micro: "Elite AI Rewrites",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Get More Interviews",
      text: "Download or share a resume that is optimized to pass ATS and impress recruiters.",
      micro: "Success Guaranteed",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest"
          >
            Seamless Workflow
          </motion.div>
          <h2 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter text-white font-outfit uppercase italic">The CVify Flow.</h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto border-l-2 border-white/5 pl-8 italic">
            Four steps to a professional presence that commands attention and crushes competition. It's effortless.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[25%] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-0" />

          {steps && steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 glass-card rounded-[3.5rem] text-center border-white/5 hover:border-primary/40 transition-all flex flex-col items-center h-full"
            >
               <div className={`w-24 h-24 rounded-[2.5rem] bg-slate-900 border border-white/5 flex items-center justify-center text-white mb-10 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-2xl overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative z-10 text-primary group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-sm font-black text-white shadow-xl">0{i+1}</div>
               </div>
               
               <div className="space-y-4 flex-1">
                 <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{step.title}</h3>
                 <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.text}</p>
               </div>

               <div className="mt-8 pt-6 border-t border-white/5 w-full">
                 <span className="text-[9px] font-black tracking-[0.2em] text-primary uppercase animate-pulse">{step.micro}</span>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
