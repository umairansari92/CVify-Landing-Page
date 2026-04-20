"use client";

import React from "react";
import Image from "next/image";
import { Github, MoveRight } from "lucide-react";

const APP_URL = "https://app-cvifypro.vercel.app";

const Footer = () => (
  <footer className="py-32 px-6 border-t border-white/5 bg-slate-950">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
      <div className="space-y-8 lg:col-span-1">
        <Image
          src="/CVify Logo Dark.jpg"
          alt="CVify Logo"
          width={140}
          height={35}
          className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
        <p className="text-slate-500 font-medium leading-relaxed text-sm">
          The all-in-one ATS resume builder for modern professionals who refuse to be ghosted.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/20 transition-all">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Product</h4>
        <ul className="space-y-4 text-slate-500 font-bold text-sm">
          <li><a href="#features" className="hover:text-primary transition-colors flex items-center gap-2 group">AI Builder <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
          <li><a href="#ats" className="hover:text-primary transition-colors flex items-center gap-2 group">ATS Scanner <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
          <li><a href="#demo" className="hover:text-primary transition-colors flex items-center gap-2 group">Try Demo <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
          <li><a href="#pricing" className="hover:text-primary transition-colors flex items-center gap-2 group">Pricing <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Resources</h4>
        <ul className="space-y-4 text-slate-500 font-bold text-sm">
          <li><a href="/documentation" className="hover:text-primary transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Resume Tips</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">ATS Guide</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Get Started</h4>
        <p className="text-slate-500 text-sm leading-relaxed italic">
          "If your resume can't pass the bot, it will never reach the recruiter."
        </p>
        <a href={`${APP_URL}/signup`} className="inline-flex items-center gap-2 text-sm font-black text-primary hover:underline">
          Check My Resume Score <MoveRight className="w-4 h-4" />
        </a>
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

export default Footer;
