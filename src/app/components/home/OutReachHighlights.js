"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HeartHandshake, Users, GraduationCap, ArrowRight, Sparkles, Globe2 } from "lucide-react";

export default function OutreachImpact() {
  const [particles, setParticles] = useState([]);

  // Track 3D tilt states for individual impact cards
  const [cardRotates, setCardRotates] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  // Generate particles safely on client side
  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * -20}%`,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  const handleMouseMove = (e, index) => {
    const cardRef = cardRefs[index].current;
    if (cardRef) {
      const rect = cardRef.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;

      setCardRotates((prev) => {
        const next = [...prev];
        next[index] = { x: rotateX, y: rotateY };
        return next;
      });
    }
  };

  const handleMouseLeaveCard = (index) => {
    setCardRotates((prev) => {
      const next = [...prev];
      next[index] = { x: 0, y: 0 };
      return next;
    });
  };

  const impacts = [
    {
      title: "Rural Digital Literacy & STEM Camps",
      subtitle: "Grassroots Empowerment",
      date: "Ongoing Initiative",
      location: "Pan-India Rural Districts",
      description: "Equipping underprivileged students with essential computer literacy, modern coding fundamentals, and STEM mentorship.",
      badge: "Education First",
      border: "border-cyan-400/50",
      icon: GraduationCap,
    },
    {
      title: "Community Welfare & Healthcare Drives",
      subtitle: "Public Health Support",
      date: "Quarterly Scheduled",
      location: "Tier-2 & Tier-3 Regions",
      description: "Organizing medical check-up camps, wellness awareness seminars, and distributing essential health resources.",
      badge: "Health & Care",
      border: "border-blue-400/50",
      icon: Users,
    },
    {
      title: "Sustainable Social Trust Fellowship",
      subtitle: "Scholarly Partnership",
      date: "Annual Program",
      location: "Hybrid & Fieldwork",
      description: "Empowering young researchers and changemakers to analyze empirical data and implement community-driven welfare projects.",
      badge: "Fellowship Open",
      border: "border-indigo-400/50",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-[#020617] text-white border-b border-cyan-500/40 perspective-[1200px]">
      
      {/* Background Cybernetic Grid */}
      <div className="absolute inset-0 bg-animated-grid opacity-25 pointer-events-none"></div>

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

      {/* Ambient Neon Aurora Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-r from-blue-600/30 via-cyan-500/25 to-indigo-600/30 blur-[180px] pointer-events-none animate-pulse-glow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2.5 bg-blue-500/20 border border-blue-400/50 px-5 py-2.5 rounded-full text-blue-200 text-sm font-extrabold backdrop-blur-3xl shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-pulse">
            <HeartHandshake className="w-4 h-4 text-cyan-300 animate-bounce" />
            <span>Community & Social Impact</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]">Communities Together</span>
          </h2>
          <p className="text-blue-100/80 text-lg">
            Bridging educational gaps, supporting grassroots welfare, and driving sustainable social transformation across regions.
          </p>
        </div>

        {/* 3D Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                ref={cardRefs[index]}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeaveCard(index)}
                style={{
                  transform: `rotateX(${cardRotates[index].x}deg) rotateY(${cardRotates[index].y}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
                className={`group relative bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-indigo-950/95 border ${item.border} rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_50px_rgba(30,58,138,0.7)] hover:shadow-[0_0_80px_rgba(6,182,212,0.9)] flex flex-col justify-between transition-all duration-300`}
              >
                
                {/* Card Spotlight Aura on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{item.subtitle}</div>
                  <h3 className="text-2xl font-black text-white tracking-wide mb-4 group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-200/80 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="space-y-2 text-xs text-blue-200 font-bold">
                    <div className="flex items-center space-x-2.5">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Globe2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <Link
                    href="/outreach"
                    className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 group border border-cyan-300/40 text-sm"
                  >
                    <span>View Outreach Initiatives</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}