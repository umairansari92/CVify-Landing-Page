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
        { label: "Documentation", href: DOCS_URL, external: true },
        { label: "Developer API", href: `${DOCS_URL}/api`, external: true },
        { label: "Release Notes", href: `${DOCS_URL}/releases`, external: true },
        { label: "Roadmap", href: `${DOCS_URL}/roadmap`, external: true },
        { label: "Blog", href: "#", badge: "Soon" },
        { label: "System Status", href: `${DOCS_URL}/status`, external: true },
        { label: "Security & Privacy", href: `${APP_URL}/privacy`, external: true }
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
    <footer className="py-20 px-6 border-t border-white/5 bg-slate-950 bg-noise relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Logo & Description */}
          <div className="col-span-2 space-y-6">
            <Image 
              src="/CVify Logo Dark.jpg" 
              alt="CVify Logo" 
              width={140} 
              height={35} 
              className="h-9 w-auto object-contain"
            />
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">
              The AI Career Operating System. Optimize compliance scores, build portfolios, and verify credentials directly to recruiters.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-white/5 rounded-xl text-slate-500 hover:text-white hover:border-white/10 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-white/5 rounded-xl text-slate-500 hover:text-white hover:border-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-white/5 rounded-xl text-slate-500 hover:text-white hover:border-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {links.map((section, idx) => (
            <div key={idx} className="col-span-1 space-y-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.href} 
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-xs text-slate-500 hover:text-white font-bold transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[8px] font-black uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 px-1.5 py-0.5 rounded">
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
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
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
