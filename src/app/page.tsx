"use client";

import React from "react";

const APP_URL = "https://app-cvifypro.vercel.app";

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 lg:p-6 bg-background/80 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl w-full flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-white text-xl shadow-glow animate-float">C</div>
        <span className="text-2xl font-black tracking-tight text-white font-outfit">CVify <span className="text-primary text-xs ml-1 uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-md">Pro</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
        <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
        <a href="#features" className="hover:text-primary transition-colors">Features</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Diamonds</a>
        <a href={`${APP_URL}/login`} className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-2xl transition-all font-black shadow-lg shadow-primary/20">
          Get Started
        </a>
      </div>
      <div className="md:hidden">
        <a href={`${APP_URL}/login`} className="bg-primary text-white px-4 py-2 rounded-xl font-black text-sm">
          Get Started
        </a>
      </div>
    </div>
  </nav>
);

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="glass-card p-8 rounded-[2.5rem]">
    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-3xl">
      {icon}
    </div>
    <h3 className="text-xl font-black mb-3 text-white tracking-tight">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-medium">{description}</p>
  </div>
);

const StepCard = ({ number, title, description, icon }: { number: string; title: string; description: string; icon: string }) => (
  <div className="relative flex flex-col items-center text-center p-6 group">
    <div className="w-20 h-20 rounded-3xl glass-card flex items-center justify-center mb-8 text-4xl relative z-10 group-hover:scale-110 transition-transform">
      {icon}
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-black text-white shadow-lg">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-black mb-3 text-white">{title}</h3>
    <p className="text-slate-400 font-medium leading-relaxed">{description}</p>
  </div>
);

const Hero = () => (
  <section className="relative pt-48 pb-32 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-10 animate-float border-white/10">
        <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_10px_#10b981]"></span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Next-Gen Resume Intelligence v2.0</span>
      </div>
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 font-outfit">
        <span className="text-gradient">Elevate Your </span>
        <br />
        <span className="text-action">Professional </span>
        <span className="text-gradient">Identity.</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
        Stop wrestling with formatting. CVify builds elite, ATS-optimized resumes and AI-powered cover letters in seconds. Join the elite.
      </p>
      <div className="flex flex-col sm:row items-center justify-center gap-6">
        <a href={`${APP_URL}/signup`} className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-[2rem] text-lg font-black shadow-2xl shadow-primary/40 transition-all glow-btn">
          Build My Career Pro — <span className="opacity-60 font-normal">Free</span>
        </a>
        <a href="#how-it-works" className="w-full sm:w-auto glass-card px-10 py-5 rounded-[2rem] text-lg font-bold hover:bg-white/5 transition-all text-white">
          See How it Works
        </a>
      </div>
    </div>
    
    {/* Background Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[180px] -z-10 rounded-full"></div>
    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[150px] -z-10 rounded-full"></div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-32 px-6 relative bg-mesh">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white font-outfit">The CVify Flow</h2>
        <p className="text-slate-400 font-medium text-lg">Four steps to a professional presence that commands attention.</p>
      </div>
      
      <div className="grid grid-cols-1 md:row lg:grid-cols-4 gap-12 relative">
        <StepCard 
          number="01" 
          icon="🛡️"
          title="Secure Access" 
          description="Create your professional profile and verify your identity in seconds." 
        />
        <StepCard 
          number="02" 
          icon="⚡"
          title="Instant Resume" 
          description="Choose from 10+ elite templates. Fill your data once, see it live everywhere." 
        />
        <StepCard 
          number="03" 
          icon="🤖"
          title="AI Cover Letter" 
          description="Use your Diamonds to let Gemini AI draft a high-impact cover letter for any role." 
        />
        <StepCard 
          number="04" 
          icon="📥"
          title="HD Export" 
          description="Download your carrier-defining documents as crystal-clear native PDFs." 
        />
      </div>
    </div>
  </section>
);

const DiamondSystem = () => (
  <section id="pricing" className="py-32 px-6 bg-slate-900/30">
    <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[4rem] border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-diamond/5 blur-[100px] animate-pulse"></div>
      
      <div className="relative z-10 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-diamond/10 border border-diamond/20 mb-8">
            <span className="text-diamond text-sm font-black tracking-widest uppercase">The Diamond Economy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-white font-outfit">Powering Your AI Experience.</h2>
          <p className="text-slate-400 font-medium text-lg mb-10">We believe in fair, usage-based access. Our diamond system ensures you only pay for high-end AI processing while keeping the core platform free.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center text-xl">🎁</div>
              <div>
                <p className="text-white font-bold">100 Diamonds Welcome Bonus</p>
                <p className="text-slate-500 text-sm">Start your journey with enough for 2 AI letters.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl">🤝</div>
              <div>
                <p className="text-white font-bold">50 Diamonds Per Referral</p>
                <p className="text-slate-500 text-sm">Invite colleagues and grow your balance exponentially.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center text-xl">✨</div>
              <div>
                <p className="text-white font-bold">20 Monthly Bonus</p>
                <p className="text-slate-500 text-sm">Loyalty pays off. Get free diamonds every 30 days.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-background/40 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/5 shadow-2xl">
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center group hover:border-diamond/30 transition-all">
              <span className="text-slate-100 font-bold">AI Cover Letter</span>
              <span className="text-diamond font-black">50 💎</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center opacity-60">
              <span className="text-slate-100 font-bold">Standard Resume</span>
              <span className="text-success font-black tracking-widest uppercase text-xs">Always Free</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center opacity-60">
              <span className="text-slate-100 font-bold">PDF Downloads</span>
              <span className="text-success font-black tracking-widest uppercase text-xs">Unlimited</span>
            </div>
            
            <a href={`${APP_URL}/signup`} className="block text-center w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
              Claim My Diamonds
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-24">
      <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white font-outfit">Platform Pillars</h2>
      <p className="text-slate-400 font-medium text-lg italic">Built for the high-performance professional.</p>
    </div>
    <div className="grid grid-cols-1 md:row lg:grid-cols-3 gap-10">
      <FeatureCard icon="🎨" title="Premium Templates" description="Handpicked professional styles. Swap designs instantly without losing data." />
      <FeatureCard icon="🚀" title="ATS Mastery" description="Structural integrity that guarantees readability by automated screening robots." />
      <FeatureCard icon="💎" title="Crystal PDF" description="Native rendering engine produces high-fidelity, searchable, and professional documents." />
      <FeatureCard icon="🌑" title="Dark Ecosystem" description="Eye-friendly engineering available across the entire platform." />
      <FeatureCard icon="📈" title="Growth System" description="Refer friends, earn diamonds, and leverage AI to dominate your job hunt." />
      <FeatureCard icon="🔒" title="Elite Security" description="Disposable email protection and encrypted profile storage." />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-background">
    <div className="max-w-7xl mx-auto grid md:row lg:grid-cols-3 gap-16 items-start">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-black text-white">C</div>
          <span className="text-2xl font-black text-white font-outfit">CVify</span>
        </div>
        <p className="text-slate-500 font-medium leading-relaxed">The professional ecosystem for modern careers. Built for builders, leaders, and dreamers.</p>
        <p className="text-slate-600 text-sm">© 2026 CVify. All rights reserved.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-20">
        <div className="space-y-4">
          <p className="text-white font-bold">Platform</p>
          <ul className="text-slate-500 space-y-2 text-sm font-medium">
             <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
             <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
             <li><a href="#pricing" className="hover:text-primary transition-colors">Diamonds</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-white font-bold">Legal</p>
          <ul className="text-slate-500 space-y-2 text-sm font-medium">
             <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
             <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-6">
        <p className="text-white font-bold">The CVify Philosophy</p>
        <p className="text-slate-500 text-sm leading-relaxed italic">"A resume is not just a document; it's your professional manifesto. Make it undeniable."</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="bg-background text-foreground bg-mesh selection:bg-primary/30 min-h-screen">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <DiamondSystem />
        <Features />
        
        {/* Final CTA */}
        <section className="py-40 px-6">
          <div className="max-w-4xl mx-auto glass-card p-16 md:p-24 rounded-[4rem] text-center border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-white font-outfit">Join the Elite 1%.</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-lg mx-auto font-medium">Create your undeniable professional presence today. Start for free.</p>
              <a href={`${APP_URL}/signup`} className="inline-block bg-primary hover:bg-blue-600 text-white px-16 py-6 rounded-[2.5rem] text-2xl font-black shadow-2xl shadow-primary/40 transition-all hover:scale-105 glow-btn">
                Launch My Career
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
