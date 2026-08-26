"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQData = [
  {
    question: "What is an AI Career Operating System?",
    answer: "Unlike basic resume builders, CVify Pro is a coordinated career suite. It builds your master resume model, runs deep ATS scans, hosts live portfolio web pages, builds tailored cover letters, and deploys chatbot representative agents to verify your credentials to recruiters."
  },
  {
    question: "How does the ATS compliance check work?",
    answer: "Our engine replicates modern candidate scanners. It audits keyword density, layout errors, and achievement-quantification metrics, calibrating your score against the target job description parameters."
  },
  {
    question: "What are Diamonds and how are they used?",
    answer: "Diamonds are our unified system currency. You consume them for advanced AI features: full ATS scans, AI bullet rewriting, and tailored cover letters. Core builder tools and public profile links remain 100% free."
  },
  {
    question: "Is the initial resume builder free?",
    answer: "Yes, you can build, edit, and share standard resumes and web portfolios completely free of charge. You only spend diamonds when leveraging deep AI intelligence features."
  },
  {
    question: "How does the 24-hour free window for rescans work?",
    answer: "To reward iterative improvements, once you scan a resume version against a job description, subsequent re-scans of the same file within a 24-hour window are 100% FREE. Minor changes cost 50% less (25 diamonds instead of 50)."
  },
  {
    question: "Can I export my optimized resume to PDF?",
    answer: "Yes. Our builder supports high-fidelity native PDF exports formatted exactly to pass applicant tracking systems without layout parsing bugs."
  },
  {
    question: "How does the AI Representative work?",
    answer: "Your public portfolio page features an AI-powered conversational representative. When recruiters visit, they can interview the agent to verify your skills using database and GitHub metrics."
  },
  {
    question: "Does CVify Pro guarantee I will pass ATS filters?",
    answer: "While no system can guarantee an interview, optimizing keyword match density, resolving format loopholes, and raising scores above 90% substantially increases your candidacy profile visibility."
  },
  {
    question: "Can I import my existing PDF resume?",
    answer: "Yes. You can upload an existing PDF resume using Magic Import, which automatically parses and converts raw data into a structured editable profile model."
  },
  {
    question: "How does recruiter engagement analytics work?",
    answer: "Your dashboard shows traffic telemetry: profile page views, candidate card expansion, resume PDF download clicks, and recruiter referral actions."
  },
  {
    question: "Is my personal career data secure?",
    answer: "Yes. Your data is encrypted and saved securely. You retain full control over portfolio access and can toggle profile visibility at any time."
  },
  {
    question: "Can I connect a custom domain to my live portfolio?",
    answer: "Yes. CVify Pro supports custom domains, allowing you to map your portfolio link directly to your live profile templates."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
            Objection Handling
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-outfit tracking-tight sm:tracking-tighter uppercase">
            Frequently Asked <span className="text-emerald-500">Questions.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know about the AI Career Operating System.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4">
          {FAQData.map((faq, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-white/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm dark:shadow-none transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3 sm:gap-4 items-center pr-2">
                    <HelpCircle className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{faq.question}</span>
                  </div>
                  {isOpen
                    ? <ChevronUp className="w-4 sm:w-5 h-4 sm:h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                    : <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                  }
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-11 sm:pl-16 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-white/[0.03]">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
