"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_URL } from "@/lib/constants";

const navItems = [
  { label: "Resume", href: "#product-showcase" },
  { label: "ATS Engine", href: "#ats-engine" },
  { label: "Portfolio", href: "#live-portfolio" },
  { label: "AI Representative", href: "#ai-rep" },
  { label: "Pricing", href: "#pricing" }
];

const ScrollNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Visible after scrolling past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to highlight active section pill
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionIds = ["product-showcase", "ats-engine", "live-portfolio", "ai-rep", "pricing"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] sm:max-w-max px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-2xl flex items-center gap-1.5 sm:gap-3 overflow-x-auto"
        >
          <div className="hidden md:flex items-center gap-1.5 px-2 pr-3 border-r border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tour</span>
          </div>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-emerald-500 text-white shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            href={`${APP_URL}/signup`}
            className="ml-1 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all shadow-sm hover:scale-105"
          >
            Start Free
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollNav;
