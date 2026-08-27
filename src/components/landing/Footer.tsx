"use client";

import React from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin, Terminal } from "lucide-react";
import { APP_URL, DOCS_URL, DATAVERSE_URL } from "@/lib/constants";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links: { title: string; items: FooterLink[] }[] = [
    {
      title: "Product",
      items: [
        { label: "Resume Studio", href: "#showcase" },
        { label: "ATS Scanner", href: "#ats-engine" },
        { label: "AI Representative", href: "#ai-rep" },
        { label: "Portfolio Lab", href: "#live-portfolio" },
        { label: "Pricing Packages", href: "#pricing" }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Documentation", href: DOCS_URL, external: false },
        { label: "Developer API", href: `${DOCS_URL}#ai-gateway`, external: false },
        { label: "Release Notes", href: `${DOCS_URL}#structure-constitution`, external: false },
        { label: "Roadmap", href: `${DOCS_URL}#roadmap`, external: false },
        { label: "Blog", href: "#", badge: "Soon" },
        { label: "System Status", href: `${DOCS_URL}#network-status`, external: false },
        { label: "Security & Privacy", href: `${DOCS_URL}#security-v7`, external: false }
      ]
    },
    {
      title: "Company",
      items: [
        { label: "Dataverse Tech", href: DATAVERSE_URL, external: true },
        { label: "Privacy Policy", href: `${APP_URL}/privacy`, external: true },
        { label: "Terms of Service", href: `${APP_URL}/terms`, external: true }
      ]
    }
  ];

  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 dark:border-white/5 bg-slate-100/60 dark:bg-slate-950 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 sm:gap-10">
          {/* Logo & Description */}
          <div className="sm:col-span-2 space-y-4 sm:space-y-6">
            <Image 
              src="/CVify Logo Dark.jpg" 
              alt="CVify Logo" 
              width={140} 
              height={35} 
              className="h-8 sm:h-9 w-auto object-contain rounded-lg"
            />
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-sm">
              The AI Career Operating System. Optimize compliance scores, build portfolios, and verify credentials directly to recruiters.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {links.map((section, idx) => (
            <div key={idx} className="col-span-1 space-y-3 sm:space-y-4">
              <h4 className="text-[10px] font-black text-slate-900 dark:text-slate-300 uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.href} 
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white font-bold transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[8px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest text-center md:text-left">
          <p>© {currentYear} CVify Pro. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>Built by Dataverse Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
