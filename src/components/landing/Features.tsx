"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Wand2, Package, BarChart3, CheckCircle2, ExternalLink } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      badge: "ATS Intelligence",
      title: "See Why Your Resume Fails",
      description: "Get a detailed 24-point ATS breakdown. Know exactly which keywords are missing and why the bot is filtering you out.",
      points: ["Keyword gap analysis", "Formatting error detection", "Section-by-section score"]
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      badge: "AI Writing",
      title: "Fix Weak Content Instantly",
      description: "Turn generic bullets into achievement-focused wins. Let Gemini AI rewrite your content for maximum impact automatically.",
      points: ["Bullet point rewriting", "Industry-standard phrasing", "Achievement quantification"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      badge: "Application System",
      title: "Create Job-Specific Versions",
      description: "One profile generates unlimited tailored resumes. Optimized automatically for every job description you paste.",
      points: ["One profile → many resumes", "Job-specific tailoring", "Bulk version management"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      badge: "Recruiter Engagement",
      title: "Track Recruiter Interest",
      description: "See who views your resume and for how long. Get real-time engagement data to know when to follow up.",
      points: ["Profile view notifications", "Interaction analytics", "Resume download tracking"],
      liveDemo: "https://app-cvifypro.vercel.app/p/umairansari92"
    }
  ];

  return (
    <section id="features" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-4xl md:text-7xl font-black text-white font-outfit tracking-tighter uppercase italic">
            Everything You Need <br />
            <span className="text-primary">to Get Hired Faster.</span>
          </h2>
          <p className="text-slate-400 font-medium text-xl max-w-2xl mx-auto">
            Tools built for the modern job market. No fluff, no filler — just results.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 rounded-[3.5rem] border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 space-y-8 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="p-5 rounded-[1.5rem] bg-slate-900 border border-white/5 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {feat.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-primary/20 text-primary bg-primary/10">{feat.badge}</span>
                </div>

                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{feat.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">{feat.description}</p>
                </div>

                <div className="pt-8 border-t border-white/5 space-y-4">
                  <ul className="flex flex-wrap gap-3">
                    {feat.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                  {feat.liveDemo && (
                    <a
                      href={feat.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black text-primary hover:text-white transition-colors border border-primary/20 bg-primary/10 hover:bg-primary hover:border-primary px-4 py-2 rounded-xl"
                    >
                      <ExternalLink className="w-3 h-3" />
                      See a Live Profile Example
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
