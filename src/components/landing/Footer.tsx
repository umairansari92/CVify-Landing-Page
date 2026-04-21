"use client";

import React from "react";
import Image from "next/image";
import { Github, MoveRight, ExternalLink } from "lucide-react";

import { APP_URL, DOCS_URL, SAMPLE_PROFILE_URL, DATAVERSE_URL } from "@/lib/constants";

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

      {/* Product links — all working anchors */}
      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Product</h4>
        <ul className="space-y-4 text-slate-500 font-bold text-sm">
          <li>
            <a href="#features" className="hover:text-primary transition-colors flex items-center gap-2 group">
              Features <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-primary transition-colors flex items-center gap-2 group">
              How It Works <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
          <li>
            <a href="#demo" className="hover:text-primary transition-colors flex items-center gap-2 group">
              Try the Demo <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-primary transition-colors flex items-center gap-2 group">
              Pricing <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
        </ul>
      </div>

      {/* Platform links — working pages only */}
      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-widest text-xs">Platform</h4>
        <ul className="space-y-4 text-slate-500 font-bold text-sm">
          <li>
            <a href={`${APP_URL}/signup`} className="hover:text-primary transition-colors flex items-center gap-2 group">
              Create Account <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
          <li>
            <a href={`${APP_URL}/login`} className="hover:text-primary transition-colors flex items-center gap-2 group">
              Sign In <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
          <li>
            <a href={SAMPLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group">
              Sample Profile <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
          <li>
            <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group">
              Documentation <MoveRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </li>
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
      <div className="flex flex-col gap-2">
        <p className="text-slate-600 text-sm font-medium">© 2026 CVify. All rights reserved.</p>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-700">
          Design and Developed by{" "}
          <a href={DATAVERSE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Dataverse Technologies
          </a>
        </p>
      </div>
      <div className="flex gap-8 text-slate-600 text-sm font-medium">
        <a href={`${APP_URL}/privacy`} className="hover:text-white transition-colors">Privacy</a>
        <a href={`${APP_URL}/terms`} className="hover:text-white transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
