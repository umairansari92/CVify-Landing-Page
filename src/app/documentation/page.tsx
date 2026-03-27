"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Book, Cpu, ShieldCheck, Zap, Target, Gem, ChevronRight, 
  FileText, Globe, ArrowLeft, Users, Sparkles, Eye,
  Brain, Layers, Briefcase, Rocket, Layout,
  Database, Star, Award, MessageSquare, Shield, Menu, X,
  BarChart3, GitBranch, TrendingUp
} from "lucide-react";
import { useRouter } from "next/navigation";

const Documentation = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileNav, setMobileNav] = useState(false);

  const navGroups = [
    {
      label: "Getting Started",
      items: [
        { id: "overview", icon: <Rocket size={16} />, label: "Platform Overview" },
        { id: "setup", icon: <Zap size={16} />, label: "Quick Setup (3 Min)" },
      ]
    },
    {
      label: "Core Features",
      items: [
        { id: "ats", icon: <Target size={16} />, label: "ATS v4.0 Precision Engine" },
        { id: "cover-letter", icon: <MessageSquare size={16} />, label: "AI Cover Letters" },
        { id: "portfolio", icon: <Globe size={16} />, label: "Live Portfolio & SEO" },
        { id: "profile", icon: <Layout size={16} />, label: "User Profile & Dashboard" },
      ]
    },
    {
      label: "Intelligence",
      items: [
        { id: "engine", icon: <Brain size={16} />, label: "3-Layer ATS Engine" },
        { id: "architecture", icon: <Layers size={16} />, label: "System Architecture" },
        { id: "security", icon: <Shield size={16} />, label: "Security & Privacy" },
      ]
    },
    {
      label: "Business",
      items: [
        { id: "diamonds", icon: <Gem size={16} />, label: "Diamond Economy" },
        { id: "competitors", icon: <Award size={16} />, label: "Why We Stand Out" },
        { id: "recruiter", icon: <Briefcase size={16} />, label: "For Recruiters & HR" },
        { id: "universal", icon: <Users size={16} />, label: "Built for Everyone" },
      ]
    },
    {
      label: "Resources",
      items: [
        { id: "tips", icon: <Star size={16} />, label: "Pro Tips (90+ Score)" },
        { id: "faq", icon: <Book size={16} />, label: "FAQ" },
        { id: "roadmap", icon: <TrendingUp size={16} />, label: "Future Roadmap" },
        { id: "company", icon: <GitBranch size={16} />, label: "Company & Ownership" },
      ]
    },
  ];

  // ─── SUB-COMPONENTS ───

  const DocHeader = ({ title, badge }: { title: string; badge: string }) => (
    <div className="mb-8 pb-6 border-b border-white/5">
      <span className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full mb-4">{badge}</span>
      <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">{title}</h1>
    </div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-black text-white tracking-tight mt-8 mb-4 flex items-center gap-2">
      <ChevronRight size={16} className="text-blue-500" />{children}
    </h3>
  );

  const InfoCard = ({ icon, color, title, desc }: { icon: React.ReactNode; color: string; title: string; desc: string }) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-500/5 border-blue-500/10 text-blue-400",
      emerald: "bg-emerald-500/5 border-emerald-500/10 text-emerald-400",
      purple: "bg-purple-500/5 border-purple-500/10 text-purple-400",
      amber: "bg-amber-500/5 border-amber-500/10 text-amber-400",
      red: "bg-red-500/5 border-red-500/10 text-red-400",
    };
    return (
      <div className={`p-4 rounded-2xl border transition-all hover:scale-[1.01] ${colors[color]}`}>
        <div className="flex items-center gap-2 mb-1.5">{icon}<p className="font-black text-sm">{title}</p></div>
        <p className="text-slate-400 text-[12px] font-medium leading-relaxed">{desc}</p>
      </div>
    );
  };

  const Steps = ({ items }: { items: { step: string; title: string; desc: string }[] }) => (
    <div className="space-y-3 mb-4">
      {items.map((s, i) => (
        <div key={i} className="flex gap-4 items-start">
          <div className="w-8 h-8 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 font-black text-xs flex-shrink-0 mt-0.5">{s.step}</div>
          <div><p className="font-black text-white text-sm">{s.title}</p><p className="text-slate-400 text-[13px] font-medium leading-relaxed">{s.desc}</p></div>
        </div>
      ))}
    </div>
  );

  const CT = ({ items }: { items: { left: string; right: string }[] }) => (
    <div className="space-y-2 mb-4">
      {items.map((c, i) => (
        <div key={i} className="flex items-stretch gap-3 text-[13px]">
          <div className="w-1/3 p-3 bg-white/[0.03] rounded-xl font-black text-white flex items-center">{c.left}</div>
          <div className="flex items-center text-blue-500 font-bold">→</div>
          <div className="flex-1 p-3 bg-blue-600/5 rounded-xl font-medium text-slate-400 border border-blue-600/10 flex items-center">{c.right}</div>
        </div>
      ))}
    </div>
  );

  const NavItem = ({ id, icon, label }: { id: string; icon: React.ReactNode; label: string }) => (
    <button
      onClick={() => { setActiveSection(id); setMobileNav(false); }}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[12px] font-bold transition-all ${
        activeSection === id ? "bg-blue-600/10 text-blue-400 border border-blue-600/20" : "text-slate-400 hover:bg-white/5 hover:text-white"
      }`}
    >{icon}{label}</button>
  );

  // ─── CONTENT ───
  const content: Record<string, React.ReactNode> = {
    overview: (<><DocHeader title="Platform Overview" badge="Introduction" /><p className="text-slate-400 text-[15px] leading-relaxed mb-8">CVify Pro is not just a resume builder — it is a <strong className="text-white">Career Intelligence Ecosystem</strong>. The platform solves the &quot;Black Box&quot; problem of ATS by giving users a real-time, AI-backed auditor that mimics Fortune 500 hiring pipelines.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><InfoCard icon={<Target size={18} />} color="emerald" title="For Job Seekers" desc="Build ATS-friendly resumes, generate targeted cover letters, and host a live, SEO-optimized digital portfolio with zero coding." /><InfoCard icon={<Briefcase size={18} />} color="blue" title="For Recruiters" desc="View candidates with verified GitHub data, actual project proof, and transparent AI-matched skill alignments." /><InfoCard icon={<Brain size={18} />} color="purple" title="Context-Aware Intelligence" desc="AI adapts scoring, keywords, and coaching tone based on experience level and market mode." /><InfoCard icon={<Shield size={18} />} color="amber" title="Anti-Hallucination Guarantee" desc="6 strict rules ensure AI only references actual resume content. Hybrid scoring prevents random inflation." /></div></>),

    setup: (<><DocHeader title="Quick Setup (3 Min)" badge="Getting Started" /><Steps items={[{step:"1",title:"Create Account",desc:"Click Signup and verify your email. You get 100 free diamonds."},{step:"2",title:"Complete Profile",desc:"Add name, headline, summary, experience, education, and skills."},{step:"3",title:"Sync GitHub (Optional)",desc:"Connect GitHub to pull repo counts, languages, and stats."},{step:"4",title:"Go Live!",desc:"Portfolio is live at app-cvifypro.vercel.app/p/your-username."}]} /></>),

    ats: (<><DocHeader title="ATS v4.0 Precision Engine" badge="Core Feature" /><p className="text-slate-400 text-[15px] leading-relaxed mb-6">A 3-Layer Intelligence Engine that audits your resume like a Fortune 500 hiring pipeline with 99.99% accuracy.</p><SectionTitle>How to Scan</SectionTitle><Steps items={[{step:"1",title:"Upload Resume",desc:"PDF or DOCX. Max 5MB."},{step:"2",title:"Paste Job Description",desc:"If empty, AI audits against general industry standards."},{step:"3",title:"Select Experience Level",desc:"Fresher, Junior, Mid-Level, or Senior."},{step:"4",title:"Select Market Mode",desc:"Standard, Pakistan HR, Freelance, or Remote."},{step:"5",title:"Start Scan",desc:"Costs 50💎. Results in under 30 seconds."}]} /><SectionTitle>What You Get</SectionTitle><div className="grid grid-cols-1 md:grid-cols-2 gap-3"><InfoCard icon={<Sparkles size={16} />} color="blue" title="AI Verdict" desc="One-line motivating summary of strengths and gaps." /><InfoCard icon={<BarChart3 size={16} />} color="purple" title="4-Dimension Score" desc="Formatting, Keywords, Quantification, Impact — with WHY tooltips." /><InfoCard icon={<Zap size={16} />} color="emerald" title="Strong Bullets ✅" desc="Best resume lines highlighted with reasons." /><InfoCard icon={<FileText size={16} />} color="amber" title="Weak Bullets → Rewritten" desc="Weakest lines with AI-rewritten versions." /><InfoCard icon={<Target size={16} />} color="red" title="Keyword Gap Analyzer" desc="Missing skills with exact placement advice." /><InfoCard icon={<Eye size={16} />} color="purple" title="Recruiter 6-Second Impression" desc="What a recruiter thinks first." /></div><SectionTitle>Context-Aware Intelligence</SectionTitle><CT items={[{left:"Fresher Missing AWS",right:"Growth Opportunity — not penalized"},{left:"Senior Missing AWS",right:"Critical Gap — heavily weighted"},{left:"No JD",right:"Industry standards for your level"},{left:"JD Provided",right:"Matches against specific role"}]} /></>),

    "cover-letter": (<><DocHeader title="AI Cover Letter Generator" badge="Core Feature" /><p className="text-slate-400 text-[15px] leading-relaxed mb-6">Generate personalized cover letters in seconds. The AI creates a &quot;Handshake&quot; between your achievements and the company&apos;s mission.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-3"><InfoCard icon={<Briefcase size={16} />} color="blue" title="Professional" desc="Formal, corporate tone for enterprise roles." /><InfoCard icon={<Sparkles size={16} />} color="purple" title="Creative" desc="Bold, engaging tone for startups and design." /><InfoCard icon={<Zap size={16} />} color="emerald" title="Enthusiastic" desc="High-energy for culture-fit roles." /></div><Steps items={[{step:"1",title:"Select Style",desc:"Professional, Creative, or Enthusiastic."},{step:"2",title:"Paste JD",desc:"AI extracts company, role, and requirements."},{step:"3",title:"Generate",desc:"Ready in 10-15 seconds. Cost: 20💎."}]} /></>),

    portfolio: (<><DocHeader title="Live Portfolio (No-Code)" badge="Core Feature" /><p className="text-slate-400 text-[15px] leading-relaxed mb-6">Update dashboard → world sees it live. No HTML, no hosting, no code.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-3"><InfoCard icon={<Layout size={16} />} color="blue" title="Professional Header" desc="Name, headline, bio, profile picture with shine-effect." /><InfoCard icon={<Briefcase size={16} />} color="emerald" title="Work Experience" desc="Timeline-style with structured responsibilities." /><InfoCard icon={<Award size={16} />} color="purple" title="Skills & Proof Tags" desc="Proficiency bars and auto-generated proof badges." /><InfoCard icon={<Eye size={16} />} color="amber" title="Project Showcase" desc="Cyberpunk grid with images, tech stacks, live links." /><InfoCard icon={<GitBranch size={16} />} color="emerald" title="GitHub Integration" desc="Live repos, languages, contribution stats." /><InfoCard icon={<Star size={16} />} color="blue" title="Testimonials" desc="Ratings and quotes for social proof." /></div><SectionTitle>SEO &amp; Themes</SectionTitle><p className="text-slate-400 text-[13px] leading-relaxed">Dynamic OG tags, JSON-LD for Google Knowledge Graph. 6 premium themes with custom colors and typography.</p></>),

    profile: (<><DocHeader title="User Profile & Dashboard" badge="Core Feature" /><p className="text-slate-400 text-[15px] leading-relaxed mb-6">Command center for your career brand. Every change reflects on your live portfolio instantly. HUD Analytics shows profile views, contact clicks, and downloads.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-3"><InfoCard icon={<FileText size={16} />} color="blue" title="Core Info" desc="Name, headline, summary, location, contact." /><InfoCard icon={<Briefcase size={16} />} color="emerald" title="Experience" desc="Multiple positions with editable bullet points." /><InfoCard icon={<Book size={16} />} color="purple" title="Education" desc="Degrees, certifications, institutions." /><InfoCard icon={<Zap size={16} />} color="amber" title="Skills" desc="Categorized with proficiency sliders." /><InfoCard icon={<Eye size={16} />} color="red" title="Projects" desc="Images, tech stacks, live/source links." /><InfoCard icon={<Star size={16} />} color="blue" title="Testimonials" desc="Client logos and quotes with ratings." /></div></>),

    engine: (<><DocHeader title="3-Layer ATS Intelligence Engine" badge="Technical" /><div className="space-y-4"><div className="p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl"><h4 className="font-black text-blue-400 text-sm mb-2">Layer 1: Structural Parsing</h4><p className="text-slate-400 text-[13px] leading-relaxed">Regex scans for headers, dates, contact info. Penalizes non-standard formatting.</p></div><div className="p-5 bg-purple-500/5 border border-purple-500/10 rounded-2xl"><h4 className="font-black text-purple-400 text-sm mb-2">Layer 2: NLP Keyword Engine</h4><p className="text-slate-400 text-[13px] leading-relaxed">Extracts JD nouns, cross-references with synonyms database. Quantification scanning.</p></div><div className="p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl"><h4 className="font-black text-emerald-400 text-sm mb-2">Layer 3: AI Deep Audit (Gemini 2.5)</h4><p className="text-slate-400 text-[13px] leading-relaxed">Contextual analysis with anti-hallucination guardrails and coaching layer.</p></div></div><SectionTitle>Hybrid Calibration</SectionTitle><div className="p-5 bg-blue-600/5 border border-blue-600/10 rounded-2xl"><p className="text-slate-400 text-[13px]"><code className="text-blue-400 bg-blue-600/10 px-2 py-0.5 rounded-lg text-xs">Score = AI × 0.6 + Server NLP × 0.4</code></p></div><SectionTitle>Dynamic Weights</SectionTitle><CT items={[{left:"Fresher",right:"Keywords 35% | Formatting 30% | Quant 10% | Impact 10% | X 15%"},{left:"Junior",right:"Keywords 30% | Formatting 25% | Quant 15% | Impact 15% | X 15%"},{left:"Mid-Level",right:"Keywords 25% | Formatting 20% | Quant 25% | Impact 20% | X 10%"},{left:"Senior",right:"Keywords 20% | Formatting 15% | Quant 30% | Impact 30% | X 5%"}]} /></>),

    architecture: (<><DocHeader title="System Architecture" badge="Technical" /><CT items={[{left:"Runtime",right:"Node.js (Non-Blocking I/O)"},{left:"Framework",right:"Express.js (REST)"},{left:"Database",right:"MongoDB Atlas (NoSQL)"},{left:"Frontend",right:"React 18 + Vite + Redux Toolkit"},{left:"Intelligence",right:"Gemini 2.5 Flash"},{left:"Styling",right:"Tailwind CSS 4.0 + Glassmorphism"},{left:"PDF",right:"@react-pdf/renderer"},{left:"Landing",right:"Next.js (SSR)"},{left:"Deploy",right:"Vercel + Cloud VPS"}]} /></>),

    security: (<><DocHeader title="Security & Privacy" badge="Technical" /><div className="grid grid-cols-1 md:grid-cols-2 gap-3"><InfoCard icon={<Shield size={16} />} color="emerald" title="Argon2 Hashing" desc="GPU-resistant password security." /><InfoCard icon={<ShieldCheck size={16} />} color="blue" title="JWT + HttpOnly" desc="Signed tokens. XSS-proof sessions." /><InfoCard icon={<Brain size={16} />} color="purple" title="Data Encryption" desc="Encrypted at rest. Zero AI training retention." /><InfoCard icon={<FileText size={16} />} color="amber" title="File Security" desc="Memory-only processing. Never stored on disk." /></div></>),

    diamonds: (<><DocHeader title="Diamond Economy 💎" badge="Business" /><p className="text-slate-400 text-[15px] leading-relaxed mb-6">Post-success billing only. Never charged for failed requests.</p><CT items={[{left:"ATS Audit",right:"50 💎"},{left:"Cover Letter",right:"20 💎"},{left:"Storage Slots",right:"30 💎"},{left:"Signup Bonus",right:"100 💎 free"}]} /></>),

    competitors: (<><DocHeader title="Why CVify Pro Stands Out" badge="Comparison" /><div className="overflow-x-auto rounded-2xl border border-white/5"><table className="w-full text-left border-collapse"><thead><tr className="bg-white/[0.03]"><th className="py-4 px-5 text-[11px] font-black uppercase tracking-widest text-slate-500">Feature</th><th className="py-4 px-5 text-[11px] font-black uppercase tracking-widest text-blue-400">CVify Pro</th><th className="py-4 px-5 text-[11px] font-black uppercase tracking-widest text-slate-500">Canva/Zety</th><th className="py-4 px-5 text-[11px] font-black uppercase tracking-widest text-slate-500">Rezi/Jobscan</th></tr></thead><tbody className="text-[13px]">{[["ATS Intelligence","v4.0 Precision Engine","❌ None/Basic","✅ Basic"],["Context-Aware","✅ Fresher → Senior","❌ No","❌ No"],["Anti-Hallucination","✅ 6 Rules","❌ No","❌ No"],["Hybrid Calibration","✅ AI×0.6+NLP×0.4","❌ No","❌ No"],["Live Portfolio","✅ SEO + JSON-LD","❌ No","❌ No"],["Cover Letter AI","✅ 3 Styles","✅ Basic","✅ Basic"],["GitHub Integration","✅ Live Stats","❌ No","❌ No"],["Before→After Bullets","✅ AI Rewrite","❌ No","❌ No"],["Universal Agency","✅ Peon to CEO","❌ Tech Only","❌ Tech Only"]].map(([f,c,z,r],i)=>(<tr key={i} className="border-t border-white/5 hover:bg-white/[0.02]"><td className="py-3.5 px-5 text-white font-bold">{f}</td><td className="py-3.5 px-5 text-emerald-400">{c}</td><td className="py-3.5 px-5 text-red-400/70">{z}</td><td className="py-3.5 px-5 text-amber-400/70">{r}</td></tr>))}</tbody></table></div></>),

    recruiter: (<><DocHeader title="For Recruiters & HR" badge="Recruiter Guide" /><div className="grid grid-cols-1 md:grid-cols-2 gap-3"><InfoCard icon={<Award size={16} />} color="emerald" title="Verified Skills" desc="Backed by live project data and GitHub metrics." /><InfoCard icon={<Target size={16} />} color="blue" title="ATS-Friendly" desc="95%+ parse rate guaranteed." /><InfoCard icon={<Brain size={16} />} color="purple" title="Contextual Fit" desc="AI-matched history saves screening time." /><InfoCard icon={<Eye size={16} />} color="amber" title="10-Second Discovery" desc="Repos, Projects, ATS Score — one dashboard." /></div></>),

    universal: (<><DocHeader title="Built for Everyone" badge="Universal" /><div className="grid grid-cols-1 md:grid-cols-2 gap-3"><InfoCard icon={<Cpu size={16} />} color="blue" title="Tech Professionals" desc="GitHub integration, tech-stack optimization." /><InfoCard icon={<Briefcase size={16} />} color="emerald" title="Corporate Leaders" desc="Leadership-focused scoring, business impact." /><InfoCard icon={<Book size={16} />} color="purple" title="Service Industry" desc="Tenure, responsibilities, soft skills focus." /><InfoCard icon={<Sparkles size={16} />} color="amber" title="Creatives & Graduates" desc="Portfolio-first, academic project emphasis." /></div></>),

    tips: (<><DocHeader title="Pro Tips for 90+ Score" badge="Guide" /><div className="grid grid-cols-1 md:grid-cols-2 gap-3"><InfoCard icon={<BarChart3 size={16} />} color="emerald" title="Quantify Everything" desc="'Led 8 engineers, delivering 3 projects 15% under budget.'" /><InfoCard icon={<Zap size={16} />} color="blue" title="Google XYZ Formula" desc="'Accomplished [X] as measured by [Y], by doing [Z].'" /><InfoCard icon={<Target size={16} />} color="purple" title="Mirror JD Language" desc="Exact terminology match wins every time." /><InfoCard icon={<Layout size={16} />} color="amber" title="Standard Headers" desc="Work Experience, Education, Skills, Projects." /><InfoCard icon={<Brain size={16} />} color="red" title="Keywords in Context" desc="Integrate into bullets, not keyword dump at bottom." /><InfoCard icon={<FileText size={16} />} color="emerald" title="PDF vs DOCX" desc="Both supported. PDF for layout, DOCX for enterprise ATS." /></div></>),

    faq: (<><DocHeader title="FAQ" badge="Support" /><div className="space-y-3">{[{q:"My score is low?",a:"Read Missing Keywords + Weak Bullets for exact fixes."},{q:"Is my data safe?",a:"Argon2 + JWT + encrypted HTTPS. Zero AI training retention."},{q:"Non-tech jobs?",a:"Yes! Teachers, bankers, receptionists — AI adapts automatically."},{q:"Why diamonds?",a:"Gemini 2.5 Flash + 3-layer pipeline. Fair usage model."},{q:"Different from Canva/Rezi?",a:"Only platform with ATS Auditor + Context-Aware + Portfolio + Cover Letter + Recruiter HUD."},{q:"File formats?",a:"PDF or DOCX. Max 5MB. PDF recommended."},{q:"Need tech knowledge?",a:"Zero. Step-by-step coach. Portfolio auto-generated."}].map((f,i)=>(<div key={i} className="p-5 bg-white/[0.02] rounded-2xl border border-white/5"><p className="font-black text-blue-400 text-sm mb-1.5">Q: {f.q}</p><p className="text-slate-400 text-[13px] font-medium leading-relaxed">A: {f.a}</p></div>))}</div></>),

    roadmap: (<><DocHeader title="Future Roadmap" badge="Coming Soon" /><div className="space-y-3">{[{t:"AI Job Matcher",d:"Upload resume → matched jobs with compatibility scores.",s:"Q3 2026"},{t:"Verified Skill Badges",d:"Blockchain-verified certifications.",s:"Q4 2026"},{t:"Recruiter Notifications",d:"Alerts when high-match candidates update.",s:"Q4 2026"},{t:"Skill Alignment Roadmap",d:"AI learning path to close gaps.",s:"2027"},{t:"Multi-Language Resumes",d:"English, Urdu, Arabic, Dutch support.",s:"2027"}].map((item,i)=>(<div key={i} className="p-5 bg-white/[0.02] rounded-2xl border border-white/5 flex justify-between items-start gap-4"><div><p className="font-black text-white text-sm">{item.t}</p><p className="text-slate-400 text-[12px] font-medium leading-relaxed">{item.d}</p></div><span className="px-3 py-1 bg-blue-600/10 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full flex-shrink-0">{item.s}</span></div>))}</div></>),

    company: (<><DocHeader title="Company & Ownership" badge="About" /><CT items={[{left:"Product",right:"CVify Pro (Career Intelligence & Portfolio Engine)"},{left:"Parent Brand",right:"CVify Intelligence Systems"},{left:"Lead Architect",right:"Umair Ansari (Full-Stack Developer & AI Engineer)"},{left:"LinkedIn",right:"linkedin.com/company/cvifypro"},{left:"Vision",right:"Democratize elite career branding globally."}]} /></>),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* ── TOP BAR ── */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 backdrop-blur-xl border-b border-white/5 bg-slate-950/80 flex justify-between items-center px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/")} className="p-2 hover:bg-white/5 rounded-full transition-colors"><ArrowLeft size={18} /></button>
          <Image src="/CVify Logo Dark.jpg" alt="CVify Logo" width={120} height={30} className="h-7 md:h-8 w-auto object-contain" />
          <span className="hidden md:block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 border-l border-white/5 pl-4">Documentation</span>
        </div>
        <button onClick={() => setMobileNav(!mobileNav)} className="lg:hidden p-2 hover:bg-white/5 rounded-full">{mobileNav ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block w-72 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto border-r border-white/5 p-4 space-y-6 bg-slate-950">
          {navGroups.map(g => (
            <div key={g.label}>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 px-4">{g.label}</p>
              <div className="space-y-1">{g.items.map(item => <NavItem key={item.id} {...item} />)}</div>
            </div>
          ))}
        </aside>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileNav && (
            <motion.aside initial={{x:-300}} animate={{x:0}} exit={{x:-300}} className="fixed left-0 top-16 w-72 h-[calc(100vh-64px)] z-40 overflow-y-auto border-r border-white/5 p-4 space-y-6 bg-slate-950 lg:hidden">
              {navGroups.map(g => (
                <div key={g.label}>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 px-4">{g.label}</p>
                  <div className="space-y-1">{g.items.map(item => <NavItem key={item.id} {...item} />)}</div>
                </div>
              ))}
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto min-h-[calc(100vh-64px)]">
          <AnimatePresence mode="wait">
            <motion.div key={activeSection} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.2}}>
              {content[activeSection]}
            </motion.div>
          </AnimatePresence>
          <div className="mt-20 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 opacity-40">CVify Intelligence Systems &copy; 2026</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
