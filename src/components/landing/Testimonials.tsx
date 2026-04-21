"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Got 3 interview calls within a week after optimizing my resume. My ATS score jumped from 34% to 89% instantly.",
    author: "A. Ahmed",
    role: "Frontend Developer",
    result: "Landed interview at top fintech",
    rating: 5
  },
  {
    quote: "Applied to 5 jobs and got 3 callbacks in 48 hours. Before CVify, I was getting zero responses for months.",
    author: "K. Khan",
    role: "Software Engineer",
    result: "3x more callbacks in 2 weeks",
    rating: 5
  },
  {
    quote: "My ATS score jumped from 45% to 92%. I was hired at a top agency within 3 weeks of using the system.",
    author: "F. Siddiqui",
    role: "UI/UX Designer",
    result: "Hired within 3 weeks",
    rating: 5
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-40 px-6 relative border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-8xl font-black text-white font-outfit tracking-tighter uppercase leading-[0.8] mb-6">Real Results <br /><span className="text-primary italic">from Job Seekers.</span></h2>
        <p className="text-slate-400 font-medium text-xl mt-4 italic max-w-2xl mx-auto">
          Join thousands of professionals who stopped getting ghosted and started getting interviews.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-10 w-full">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 rounded-[3rem] border-white/5 relative group hover:border-primary/30 transition-all flex flex-col"
          >
             {/* Rating */}
             <div className="flex gap-1 mb-6">
               {Array.from({ length: item.rating }).map((_, j) => (
                 <Star key={j} className="w-4 h-4 text-warning fill-warning" />
               ))}
             </div>

             <Quote className="w-10 h-10 text-primary/10 absolute top-8 right-8" />
             <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8 relative z-10 italic flex-1">
               "{item.quote}"
             </p>

             {/* Result Badge */}
             <div className="mb-6 px-4 py-2 rounded-full bg-success/10 border border-success/20 inline-flex items-center gap-2 w-fit">
               <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
               <span className="text-[10px] font-black text-success uppercase tracking-widest">{item.result}</span>
             </div>

             <div>
               <p className="text-xl font-black text-white">{item.author}</p>
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.role}</p>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 w-full glass-card rounded-[3rem] border-white/5 p-10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center"
      >
        {[
          { stat: "10,000+", label: "Resumes Optimized" },
          { stat: "3x", label: "More Interview Callbacks" },
          { stat: "+65%", label: "Average ATS Score Gain" },
        ].map((s, i) => (
          <div key={i} className="space-y-2">
            <p className="text-5xl font-black text-white font-outfit">{s.stat}</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
