"use client";

import { useState, useEffect } from "react";

export default function AboutHero({ data }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]); // empty on server + first client render

  useEffect(() => {
    // client-only, runs after mount — avoids hydration mismatch
    setParticles(
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * -30}%`,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-28 lg:py-36 bg-[#020617] text-white border-b border-blue-500/40 overflow-hidden cursor-default"
    >
      {/* Cursor-following spotlight */}
      {isHovered && (
        <div
          className="absolute pointer-events-none w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-[100px] transition-opacity duration-300"
          style={{
            top: `${mousePosition.y - 250}px`,
            left: `${mousePosition.x - 250}px`,
          }}
        />
      )}

      {/* Ambient drifting grid */}
      <div className="absolute inset-0 bg-animated-grid opacity-20 pointer-events-none" />

      {/* Pulsing aurora glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/40 via-indigo-600/30 to-cyan-400/40 blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />

      {/* Laser sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent w-1/3 h-full animate-laser" />
      </div>

      {/* Floating particle field */}
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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-blue-500/20 border border-blue-400/50 px-5 py-2 rounded-full text-blue-200 text-sm font-bold mb-6 backdrop-blur-xl animate-border-glow">
          {data?.eyebrow || "About Us"}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow">
            {data?.title}
          </span>
        </h1>
        <p className="mt-6 text-lg text-blue-100/85 max-w-2xl mx-auto leading-relaxed">
          {data?.description}
        </p>
      </div>
    </section>
  );
}