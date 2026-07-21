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
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-max px-4 py-2.5 rounded-full glass border border-white/10 shadow-premium flex items-center gap-2 md:gap-3"
        >
          <div className="hidden sm:flex items-center gap-1.5 px-2 pr-3 border-r border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Product Tour</span>
          </div>

          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-glow"
                      : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            href={`${APP_URL}/signup`}
            className="ml-1 bg-white text-slate-950 hover:bg-slate-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all shadow-md hover:scale-105"
          >
            Start Free
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollNav;
