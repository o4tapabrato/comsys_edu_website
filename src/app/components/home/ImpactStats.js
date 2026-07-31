"use client";

import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, BookOpen, ShieldCheck, Activity } from "lucide-react";

export default function ImpactStats() {
  const [counts, setCounts] = useState({ conf: 0, researchers: 0, outreach: 0, transparency: 0 });
  const [mouseY, setMouseY] = useState(0);
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  // Fast counting animation
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += 1;
      const progress = start / steps;
      setCounts({
        conf: Math.floor(progress * 25),
        researchers: Math.floor(progress * 10),
        outreach: Math.floor(progress * 50),
        transparency: 100,
      });

      if (start >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Faster locus tracer animation loop along SVG path
  useEffect(() => {
    let animationFrameId;
    let progress = 0;

    const animateDot = () => {
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        // Increased speed multiplier
        progress = (progress + 3.5) % pathLength;
        const point = pathRef.current.getPointAtLength(progress);
        setDotPos({ x: point.x, y: point.y });
      }
      animationFrameId = requestAnimationFrame(animateDot);
    };

    animationFrameId = requestAnimationFrame(animateDot);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Track mouse movement to shift graph inversely
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      const shift = ((relativeY / rect.height) - 0.5) * 50;
      setMouseY(shift);
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-28 bg-[#020617] text-white border-b border-cyan-500/40 cursor-default"
    >
      
      {/* Background Cybernetic Grid Pattern */}
      <div className="absolute inset-0 bg-animated-grid opacity-20 pointer-events-none"></div>

      {/* Side-Aligned Stock Market Graph with Fade-to-Center Mask */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60 flex items-end justify-start transition-transform duration-75 ease-out"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)"
        }}
      >
        <svg
          className="w-[75%] h-[95%]"
          viewBox="0 0 1000 400"
          fill="none"
          preserveAspectRatio="none"
          style={{ transform: `translateY(${mouseY}px)` }}
        >
          {/* Neon Area Gradient */}
          <path
            d="M0 320 L60 300 L120 330 L180 260 L240 280 L300 210 L360 230 L420 160 L480 190 L540 120 L600 140 L660 80 L720 110 L780 50 L840 70 L900 30 L960 60 L1000 40 L1000 400 L0 400 Z"
            fill="url(#stock-area-glow)"
          />

          {/* Main Glowing Stock Line */}
          <path
            ref={pathRef}
            d="M0 320 L60 300 L120 330 L180 260 L240 280 L300 210 L360 230 L420 160 L480 190 L540 120 L600 140 L660 80 L720 110 L780 50 L840 70 L900 30 L960 60 L1000 40"
            stroke="url(#stock-line-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: "drop-shadow(0 0 15px rgba(6, 182, 212, 0.9)) drop-shadow(0 0 30px rgba(59, 130, 246, 0.7))",
            }}
          />

          {/* Fast-Moving Bright Tracer Dot */}
          <g transform={`translate(${dotPos.x}, ${dotPos.y})`}>
            <circle
              r="10"
              fill="#ffffff"
              style={{
                filter: "drop-shadow(0 0 12px #22d3ee) drop-shadow(0 0 25px #38bdf8)",
              }}
              className="animate-ping"
            />
            <circle r="6" fill="#ffffff" />
          </g>

          {/* Candlestick Wicks */}
          <g stroke="#38bdf8" strokeWidth="2" opacity="0.6">
            <line x1="180" y1="240" x2="180" y2="280" />
            <line x1="300" y1="190" x2="300" y2="230" />
            <line x1="420" y1="140" x2="420" y2="180" />
            <line x1="540" y1="100" x2="540" y2="140" />
            <line x1="660" y1="60" x2="660" y2="100" />
            <line x1="780" y1="30" x2="780" y2="70" />
            <line x1="900" y1="10" x2="900" y2="50" />
          </g>

          <defs>
            <linearGradient id="stock-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="stock-area-glow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.5)" />
              <stop offset="100%" stopColor="rgba(2, 6, 23, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient Neon Aurora Backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-indigo-600/30 blur-[180px] pointer-events-none animate-pulse-glow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-400/50 px-5 py-2.5 rounded-full text-cyan-200 text-sm font-extrabold backdrop-blur-3xl shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-pulse">
            <Activity className="w-4 h-4 text-cyan-300 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Bullish Growth & High Trust Index</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Growing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_35px_rgba(56,189,248,0.8)]">Impact in Numbers</span>
          </h2>
          <p className="text-blue-100/80 text-base">
            Quantifying our commitment to academic leadership, global conferences, and public outreach transparency.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="group relative bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-500/40 p-8 rounded-3xl backdrop-blur-3xl shadow-[0_0_40px_rgba(30,58,138,0.6)] hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(6,182,212,0.8)] hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/25 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {counts.conf}+
            </div>
            <div className="text-sm font-black text-cyan-300 uppercase tracking-wider mb-1">Global Conferences</div>
            <p className="text-xs text-blue-200/70">Hosted across international academic tiers.</p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-500/40 p-8 rounded-3xl backdrop-blur-3xl shadow-[0_0_40px_rgba(30,58,138,0.6)] hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(6,182,212,0.8)] hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/25 border border-blue-400/50 flex items-center justify-center text-blue-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <Users className="w-7 h-7" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {counts.researchers}k+
            </div>
            <div className="text-sm font-black text-cyan-300 uppercase tracking-wider mb-1">Researchers Impacted</div>
            <p className="text-xs text-blue-200/70">Students, scholars, and trust fellows.</p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-500/40 p-8 rounded-3xl backdrop-blur-3xl shadow-[0_0_40px_rgba(30,58,138,0.6)] hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(6,182,212,0.8)] hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/25 border border-indigo-400/50 flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <BookOpen className="w-7 h-7" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {counts.outreach}+
            </div>
            <div className="text-sm font-black text-cyan-300 uppercase tracking-wider mb-1">Outreach Camps</div>
            <p className="text-xs text-blue-200/70">Rural education & medical support drives.</p>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-500/40 p-8 rounded-3xl backdrop-blur-3xl shadow-[0_0_40px_rgba(30,58,138,0.6)] hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(6,182,212,0.8)] hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/25 border border-emerald-400/50 flex items-center justify-center text-emerald-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {counts.transparency}%
            </div>
            <div className="text-sm font-black text-cyan-300 uppercase tracking-wider mb-1">Transparency Score</div>
            <p className="text-xs text-blue-200/70">Full adherence to trust governance.</p>
          </div>

        </div>
      </div>
    </section>
  );
}