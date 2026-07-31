"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Megaphone, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function CallToAction() {
  const [particles, setParticles] = useState([]);
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Generate background particles safely on client side
  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * -20}%`,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -4;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 4;

      setCardRotate({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 bg-[#020617] text-white border-b border-cyan-500/40 perspective-[1200px]">
      
      {/* Background Cybernetic Grid */}
      <div className="absolute inset-0 bg-animated-grid opacity-30 pointer-events-none"></div>

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
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.9)",
              backgroundColor: "rgba(125, 211, 252, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Central Neon Aurora Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-indigo-600/30 blur-[160px] pointer-events-none animate-pulse-glow"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Optimized 3D Interactive CTA Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
            transition: "transform 0.1s ease-out",
          }}
          className="relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border-2 border-cyan-400/50 rounded-3xl sm:rounded-[36px] p-8 sm:p-12 backdrop-blur-3xl shadow-[0_0_60px_rgba(6,182,212,0.35)] text-center overflow-hidden"
        >
          
          {/* Internal Glowing Shockwave Rings (Speaker Acoustic Amplification Effect) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-cyan-400/20 animate-ping pointer-events-none" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-blue-400/25 animate-ping pointer-events-none" style={{ animationDuration: '3s' }}></div>

          {/* Grand Speaker / Megaphone Icon */}
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-indigo-500/30 border border-cyan-400/50 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.5)] mb-6 group">
            <Megaphone className="w-10 h-10 animate-bounce" />
            <div className="absolute -inset-2 rounded-2xl bg-cyan-400/20 blur-lg animate-pulse"></div>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-400/40 px-4 py-1.5 rounded-full text-cyan-200 text-xs sm:text-sm font-extrabold backdrop-blur-3xl shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Join Our Academic Movement</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Ready to Shape the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_30px_rgba(56,189,248,0.7)]">Research & Trust?</span>
          </h2>

          {/* Description */}
          <p className="max-w-xl mx-auto text-blue-100/80 text-sm sm:text-base font-normal mb-8 leading-relaxed">
            Partner with COMSYS Educational Trust for upcoming global conferences, CSR initiatives, fellowship programs, and academic research collaborations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-black py-4 px-8 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 border border-cyan-300/40 text-sm group"
            >
              <span>Get in Touch Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              href="/support"
              className="w-full sm:w-auto bg-blue-950/80 hover:bg-blue-900/90 text-cyan-300 font-black py-4 px-8 rounded-xl border border-cyan-400/40 shadow-[0_0_20px_rgba(30,58,138,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Explore Partnership & CSR</span>
            </Link>
          </div>

          {/* Trust Footer Note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-blue-300/70 font-bold uppercase tracking-wider">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>12AB & 80G Registered Trust</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
              <span>Global Academic Network</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
              <span>Verified Transparency</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}