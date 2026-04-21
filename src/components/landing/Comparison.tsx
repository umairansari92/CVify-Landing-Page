"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, BarChart3, Target, Sparkles, AlertCircle } from "lucide-react";

import { APP_URL } from "@/lib/constants";

const Comparison = () => {
  return (
    <section id="comparison" className="py-40 px-6 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24 max-w-4xl"
         >
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-outfit text-primary font-black uppercase tracking-widest text-[10px]">
             The Transformation
           </div>
           <h2 className="text-4xl md:text-8xl font-black text-white font-outfit mb-6 tracking-tighter leading-[0.9] uppercase italic text-center">See the <br /><span className="text-primary">Difference.</span></h2>
           <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto italic">
             Witness the exact point where a resume turns from a document into a conversion machine.
           </p>
         </motion.div>

         <div className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl relative">
            {/* Red Before Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[4rem] border-white/5 bg-slate-950/50 p-12 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8">
                  <div className="bg-error/20 text-error text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-error/20">FAILED BOT CHECK</div>
               </div>
               
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Before CVify</h3>
                     <p className="text-slate-500 font-medium">Standard resume with high rejection risk.</p>
                  </div>

                  <div className="space-y-8">
                     <div className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-4">
                           <BarChart3 className="w-6 h-6 text-error" />
                           <span className="text-sm font-bold text-slate-400">ATS Match Score</span>
                        </div>
                        <span className="text-3xl font-black text-error">32%</span>
                     </div>

                     <div className="space-y-6">
                        {[
                           { text: "No keyword optimization", icon: <XCircle className="w-5 h-5 text-error" /> },
                           { text: "Weak professional summary", icon: <XCircle className="w-5 h-5 text-error" /> },
                           { text: "High rejection risk", icon: <AlertCircle className="w-5 h-5 text-error" /> },
                           { text: "Invisible to recruiters", icon: <XCircle className="w-5 h-5 text-error" /> }
                        ].map((item, i) => (
                           <div key={i} className="flex gap-4 items-center">
                              {item.icon}
                              <span className="text-lg font-bold text-slate-500">{item.text}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Green After Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[4rem] border-primary/20 bg-primary/5 p-12 relative overflow-hidden shadow-glow"
            >
               <div className="absolute top-0 right-0 p-8">
                  <div className="bg-success/20 text-success text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-success/20">ATS PASSED</div>
               </div>
               
               <div className="space-y-12">
                  <div className="space-y-4">
                     <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">After CVify</h3>
                     <p className="text-slate-300 font-medium">Optimized for humans and algorithms.</p>
                  </div>

                  <div className="space-y-8">
                     <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-900 border border-primary/30 shadow-glow relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <div className="flex items-center gap-4 relative z-10">
                           <Target className="w-6 h-6 text-primary" />
                           <span className="text-sm font-bold text-white">ATS Match Score</span>
                        </div>
                        <span className="text-4xl font-black text-white relative z-10">91%</span>
                     </div>

                     <div className="space-y-6">
                        {[
                           { text: "Fully optimized keywords", icon: <CheckCircle2 className="w-5 h-5 text-success" /> },
                           { text: "Strong, clear summary", icon: <CheckCircle2 className="w-5 h-5 text-success" /> },
                           { text: "Recruiter-ready profile", icon: <Sparkles className="w-5 h-5 text-success" /> },
                           { text: "Passed 24+ ATS tests", icon: <CheckCircle2 className="w-5 h-5 text-success" /> }
                        ].map((item, i) => (
                           <div key={i} className="flex gap-4 items-center">
                              {item.icon}
                              <span className="text-lg font-bold text-white">{item.text}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Shimmer line */}
               <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
            </motion.div>

            {/* Central "Improvement Indicator" for Desktop */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="bg-white text-black px-8 py-8 rounded-full shadow-2xl flex flex-col items-center justify-center border-[12px] border-slate-950 min-w-[160px]"
               >
                 <span className="text-4xl font-black">+65%</span>
                 <span className="text-[10px] font-black uppercase tracking-tight text-center leading-none">ATS Improvement <br />Score</span>
               </motion.div>
            </div>
         </div>

         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-20 p-8 px-12 rounded-[2.5rem] bg-white/5 border border-white/5 text-center flex flex-col sm:flex-row items-center gap-8 group"
         >
            <div className="text-left space-y-1">
               <p className="text-2xl font-black text-white italic">"Improve your ATS score by up to +65% in minutes"</p>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Based on 5,000+ optimized resumes this month alone.</p>
            </div>
            <a href={`${APP_URL}/signup`} className="bg-primary text-white p-5 px-10 rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all w-full sm:w-auto">Check My Resume Score</a>
         </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
