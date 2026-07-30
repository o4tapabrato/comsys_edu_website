"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Award, Globe, Users, Zap } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // High-density glowing particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * -30}%`,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
  }));

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden py-36 lg:py-52 bg-[#020617] text-white border-b border-blue-500/40 cursor-default"
    >
      
      {/* Interactive Mouse Ripple / Spotlight Follower */}
      {isHovered && (
        <div
          className="absolute pointer-events-none w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-[100px] transition-opacity duration-300"
          style={{
            top: `${mousePosition.y - 250}px`,
            left: `${mousePosition.x - 250}px`,
          }}
        />
      )}

      {/* Massive Neon Cyber-Aurora Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-blue-600/50 via-indigo-600/40 to-cyan-400/50 blur-[180px] rounded-full pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Moving Cybernetic Grid Background */}
      <div className="absolute inset-0 bg-animated-grid opacity-30 pointer-events-none"></div>

      {/* Blazing Laser Light Sweep Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent w-1/3 h-full animate-laser"></div>
      </div>

      {/* Floating Kinetic Particle Field */}
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
              boxShadow: "0 0 15px rgba(56, 189, 248, 1)",
              backgroundColor: "rgba(125, 211, 252, 0.9)",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column: Hypnotic Headline & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2.5 bg-blue-500/20 border border-blue-400/50 px-5 py-2.5 rounded-full text-blue-200 text-sm font-bold mb-8 backdrop-blur-3xl shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-pulse">
              <Zap className="w-4 h-4 text-cyan-300 animate-bounce" />
              <span>COMSYS Educational Trust</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Redefining the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]">Science & Trust</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Igniting academic brilliance, world-class international symposiums, and deep-rooted community transformation through cutting-edge technology.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <Link
                href="/support"
                className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white font-extrabold px-9 py-4 rounded-2xl shadow-[0_0_35px_rgba(37,99,235,0.6)] hover:shadow-[0_0_55px_rgba(6,182,212,0.8)] hover:-translate-y-1.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-3 group border border-cyan-300/40"
              >
                <span>Support Our Mission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/conferences"
                className="bg-slate-950/90 hover:bg-slate-900 text-white border border-blue-400/40 font-extrabold px-9 py-4 rounded-2xl backdrop-blur-3xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
              >
                Explore Conferences[cite: 1]
              </Link>
            </div>
          </div>

          {/* Right Column: Mind-Blowing 3D Floating Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-sm h-[440px]">
              
              {/* Central Hyper-Glass Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-indigo-950/95 border border-cyan-400/50 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_50px_rgba(30,58,138,0.8)] flex flex-col justify-between animate-grand-float animate-border-glow">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <Globe className="w-7 h-7 animate-spin" style={{ animationDuration: '15s' }} />
                  </div>
                  <span className="text-xs font-black px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    Global Impact
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white tracking-wide">Global Research Network</h3>
                  <p className="text-xs text-blue-200/90 leading-relaxed">Connecting elite researchers, innovators, and academic visionaries globally.</p>
                </div>
                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-cyan-200 font-bold">
                  <span>Flagship Series</span>
                  <span className="text-white tracking-widest bg-blue-500/30 px-2.5 py-1 rounded-lg border border-blue-400/40">COMSYS & ICDEC[cite: 1]</span>
                </div>
              </div>

              {/* Floating Neon Badge Top-Right */}
              <div className="absolute -top-8 -right-8 bg-slate-950/95 border border-cyan-400/50 px-5 py-4 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-3xl flex items-center space-x-3.5 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/30 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shadow-inner">
                  <Award className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <div className="text-xs font-black text-white tracking-wide">100% Verified</div>
                  <div className="text-[11px] text-blue-200/80">Trusted Trust Standard</div>
                </div>
              </div>

              {/* Floating Neon Badge Bottom-Left */}
              <div className="absolute -bottom-8 -left-8 bg-slate-950/95 border border-blue-400/50 px-5 py-4 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.4)] backdrop-blur-3xl flex items-center space-x-3.5 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-inner">
                  <Users className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-xs font-black text-white tracking-wide">Community First</div>
                  <div className="text-[11px] text-blue-200/80">Outreach & STEM Camps[cite: 1]</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}