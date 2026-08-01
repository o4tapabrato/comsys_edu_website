"use client";

import { useState, useRef, useEffect } from "react";
import { ShieldCheck, FileText, Download, Lock, CheckCircle2, Sparkles, Scale, Eye, Zap, Flame } from "lucide-react";
import GridTracerBackground from "../components/core/GridTracerBackground";

export default function GovernancePage() {
  const [particles, setParticles] = useState([]);
  const [cardRotates, setCardRotates] = useState({});
  const cardRefs = useRef({});

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * -20}%`,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  const handleMouseMove = (e, id) => {
    const cardEl = cardRefs.current[id];
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -12;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12;

      setCardRotates((prev) => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
    }
  };

  const handleMouseLeave = (id) => {
    setCardRotates((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  const documents = [
    { id: "doc-1", title: "Trust Registration Certificate", category: "Legal & Regulatory", size: "2.4 MB", type: "PDF" },
    { id: "doc-2", title: "Annual Report (2025-2026)", category: "Financial & Reports", size: "5.1 MB", type: "PDF" },
    { id: "doc-3", title: "12AB Tax Exemption Certificate", category: "Tax Compliance", size: "1.8 MB", type: "PDF" },
    { id: "doc-4", title: "80G Tax Deduction Certificate", category: "Tax Compliance", size: "1.9 MB", type: "PDF" },
    { id: "doc-5", title: "Annual Financial Audit Report", category: "Financial & Reports", size: "4.2 MB", type: "PDF" },
  ];

  const policies = [
    { id: "pol-1", title: "Governance & Board Policy", desc: "Outlines the transparent operational framework, trustee election protocols, and accountability standards.", icon: Scale },
    { id: "pol-2", title: "Ethics & Integrity Policy", desc: "Strict guidelines ensuring academic honesty, unbiased peer reviews, and conflict-of-interest management.", icon: ShieldCheck },
    { id: "pol-3", title: "Data Privacy & Security Policy", desc: "Protocols protecting user, scholar, and donor data in full compliance with modern regulatory standards.", icon: Lock },
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden perspective-[1200px]">
      
      {/* Background Cybernetic Grid & Light Tracers */}
      <div className="absolute inset-0 bg-animated-grid opacity-30 pointer-events-none"></div>
      <GridTracerBackground opacity={0.5} />

      {/* Floating Kinetic Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              bottom: p.bottom,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.9)",
              backgroundColor: "rgba(125, 211, 252, 0.9)",
            }}
          />
        ))}
      </div>

      {/* Massive Neon Aurora Backdrops */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-cyan-600/35 via-blue-600/35 to-indigo-600/35 blur-[200px] pointer-events-none animate-pulse-glow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 space-y-28">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2.5 bg-cyan-500/20 border border-cyan-400/60 px-5 py-2.5 rounded-full text-cyan-200 text-sm font-extrabold backdrop-blur-3xl shadow-[0_0_35px_rgba(6,182,212,0.5)] animate-pulse">
            <Flame className="w-4 h-4 text-cyan-300 animate-bounce" />
            <span>Uncompromising Accountability & Trust</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Transparency & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_50px_rgba(56,189,248,0.9)]">Governance</span>
          </h1>
          <p className="text-blue-100/80 text-lg">
            COMSYS Educational Trust maintains supreme financial transparency, strict regulatory compliance, and high-velocity ethical oversight.
          </p>
        </div>

        {/* Regulatory Badges Highlight (Wobbling Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { id: "badge-1", title: "12AB Certified", desc: "Fully registered under Income Tax Act for non-profit tax exemption benefits." },
            { id: "badge-2", title: "80G Approved", desc: "Donations made to COMSYS Educational Trust qualify for tax deduction eligibility." },
            { id: "badge-3", title: "Verified Audits", desc: "Regular statutory audits published annually to ensure absolute financial integrity." },
          ].map((badge) => (
            <div
              key={badge.id}
              ref={(el) => (cardRefs.current[badge.id] = el)}
              onMouseMove={(e) => handleMouseMove(e, badge.id)}
              onMouseLeave={() => handleMouseLeave(badge.id)}
              style={{
                transform: `rotateX(${cardRotates[badge.id]?.x || 0}deg) rotateY(${cardRotates[badge.id]?.y || 0}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="group relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border-2 border-cyan-400/50 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_50px_rgba(6,182,212,0.4)] hover:shadow-[0_0_80px_rgba(6,182,212,0.8)] text-center space-y-4 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/60 mx-auto flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white">{badge.title}</h3>
              <p className="text-xs text-blue-200/80 leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* Certificates & Documents Repository (Gobbling Hover Shockwaves) */}
        <div className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-black text-white">Registration & Compliance Documents</h2>
            <p className="text-blue-100/80 text-sm">Download official registration certificates, annual reports, and tax exemption files instantly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.id}
                ref={(el) => (cardRefs.current[doc.id] = el)}
                onMouseMove={(e) => handleMouseMove(e, doc.id)}
                onMouseLeave={() => handleMouseLeave(doc.id)}
                style={{
                  transform: `rotateX(${cardRotates[doc.id]?.x || 0}deg) rotateY(${cardRotates[doc.id]?.y || 0}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="group relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border border-cyan-400/50 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_45px_rgba(30,58,138,0.7)] hover:shadow-[0_0_75px_rgba(6,182,212,0.9)] flex flex-col justify-between transition-all duration-300"
              >
                {/* Gobbling Glow Aura */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none animate-pulse"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      {doc.category}
                    </span>
                    <span className="text-xs font-bold text-cyan-200">{doc.size}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {doc.title}
                  </h3>
                </div>

                <button className="mt-8 w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 text-xs border border-cyan-300/40 cursor-pointer">
                  <Download className="w-4 h-4 animate-bounce" />
                  <span>Download {doc.type} File</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Governance & Ethics Policies */}
        <div className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-black text-white">Governance & Ethical Framework</h2>
            <p className="text-blue-100/80 text-sm">Our established policies ensuring uncompromised ethical standards, integrity, and privacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((pol) => {
              const IconComp = pol.icon;
              return (
                <div
                  key={pol.id}
                  ref={(el) => (cardRefs.current[pol.id] = el)}
                  onMouseMove={(e) => handleMouseMove(e, pol.id)}
                  onMouseLeave={() => handleMouseLeave(pol.id)}
                  style={{
                    transform: `rotateX(${cardRotates[pol.id]?.x || 0}deg) rotateY(${cardRotates[pol.id]?.y || 0}deg)`,
                    transition: "transform 0.1s ease-out",
                  }}
                  className="group relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border border-cyan-400/50 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_50px_rgba(30,58,138,0.7)] hover:shadow-[0_0_80px_rgba(6,182,212,0.8)] flex flex-col justify-between transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/60 flex items-center justify-center text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-200 transition-colors">
                      {pol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed">
                      {pol.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}