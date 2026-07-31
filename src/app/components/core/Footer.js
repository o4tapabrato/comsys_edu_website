"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [footerParticles, setFooterParticles] = useState([]);

  // Generate background particles safely on client side
  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * -20}%`,
      duration: Math.random() * 7 + 4,
      delay: Math.random() * 3,
    }));
    setFooterParticles(generated);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-[#020617] text-blue-100/80 border-t border-cyan-500/40 overflow-hidden cursor-default pt-20 pb-12"
    >
      {/* Interactive Mouse Ripple / Spotlight Follower */}
      {isHovered && (
        <div
          className="absolute pointer-events-none w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/15 blur-[90px] transition-opacity duration-300 z-10"
          style={{
            top: `${mousePosition.y - 200}px`,
            left: `${mousePosition.x - 200}px`,
          }}
        />
      )}

      {/* Swirling Wave / Neon Aurora Backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-indigo-600/30 blur-[160px] pointer-events-none animate-pulse-glow"></div>

      {/* Floating Kinetic Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {footerParticles.map((p) => (
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
              boxShadow: "0 0 12px rgba(56, 189, 248, 0.9)",
              backgroundColor: "rgba(125, 211, 252, 0.8)",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About Trust */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_25px_rgba(56,189,248,0.7)]">
              COMSYS
            </h3>
            <p className="text-sm text-blue-200/80 leading-relaxed font-normal">
              COMSYS Educational Trust is committed to advancing academic excellence, cutting-edge conferences, innovative research, and impactful community outreach.
            </p>
            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-center space-x-3 text-blue-200/90 hover:text-cyan-300 transition-colors group">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Educational Trust Headquarters, India</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200/90 hover:text-cyan-300 transition-colors group">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span>contact@comsys.org</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300 mb-5 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/about" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">About COMSYS</Link>
              </li>
              <li>
                <Link href="/about#vision" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Trustees</Link>
              </li>
              <li>
                <Link href="/conferences" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Conferences</Link>
              </li>
              <li>
                <Link href="/outreach" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Outreach</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">News</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300 mb-5 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
              Get Involved
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/support" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Donate</Link>
              </li>
              <li>
                <Link href="/support#csr" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">CSR Partnership</Link>
              </li>
              <li>
                <Link href="/careers#volunteer" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Volunteer</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Internship</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Legal */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300 mb-5 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
              Governance & Legal
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/transparency#policies" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/transparency#terms" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Terms of Use</Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Registration & 12AB/80G</Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-cyan-300 hover:translate-x-2 transition-all duration-200 inline-block">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Closing */}
        <div className="pt-8 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300/70 font-medium">
          <p>© {new Date().getFullYear()} COMSYS Educational Trust. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/transparency" className="hover:text-cyan-300 transition-colors">Transparency</Link>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">Support Desk</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}