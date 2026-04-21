"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MoveRight } from "lucide-react";

import { APP_URL, DOCS_URL } from "@/lib/constants";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Demo", href: "#demo" },
    { name: "Documentation", href: DOCS_URL },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass rounded-[2rem] px-8 py-4 flex items-center justify-between border-white/5 shadow-2xl transition-all ${isScrolled ? "bg-slate-950/80 backdrop-blur-xl" : ""}`}>
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <Image 
                src="/CVify Logo Dark.jpg" 
                alt="CVify Logo" 
                width={140} 
                height={35} 
                className="h-9 w-auto object-contain transition-all group-hover:scale-105"
                priority
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-400">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="hover:text-white transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <a href={`${APP_URL}/login`} className="hidden sm:block text-sm font-bold text-slate-400 hover:text-white transition-colors">Sign In</a>
               <a href={`${APP_URL}/signup`} className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                Check My Score
              </a>
              
              {/* Mobile Toggle */}
              <button 
                className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-950 border-l border-white/5 z-[70] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <Image src="/CVify Logo Dark.jpg" alt="Logo" width={120} height={30} className="h-8 w-auto" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="flex flex-col gap-8 flex-1">
                {navLinks.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    {item.name}
                    <MoveRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                  </a>
                ))}
              </div>

              <div className="pt-10 border-t border-white/5 space-y-4">
                <a href={`${APP_URL}/login`} className="block w-full py-4 text-center text-slate-400 font-bold hover:text-white transition-colors">Sign In</a>
                <a href={`${APP_URL}/signup`} className="block w-full py-5 text-center bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20">Check My Resume Score</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
