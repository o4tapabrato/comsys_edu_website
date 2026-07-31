"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isSupercharged, setIsSupercharged] = useState(false);
  const [isHyperSpeed, setIsHyperSpeed] = useState(false);

  // Track page scroll depth to fill the jar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
        setScrollProgress(progress);
      }

      // Show button after scrolling down 300px
      setIsVisible(currentScroll > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Trigger supercharge click animation
    setIsSupercharged(true);
    setIsHyperSpeed(true);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);

    // Reset animations after scroll completes
    setTimeout(() => {
      setIsSupercharged(false);
      setIsHyperSpeed(false);
    }, 1200);
  };

  return (
    <>
      {/* Star Wars Light-Speed Hyper-Speed Velocity Lines */}
      {isHyperSpeed && (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
          {Array.from({ length: 45 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] bg-gradient-to-b from-transparent via-cyan-300 to-white animate-hyper-speed-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * -50}%`,
                height: `${Math.random() * 200 + 100}px`,
                animationDuration: `${Math.random() * 0.4 + 0.3}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-[2px] animate-pulse"></div>
        </div>
      )}

      {/* Scroll-to-Top Jar Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-50 flex flex-col items-center justify-center w-14 h-20 rounded-2xl bg-slate-950/80 border-2 border-cyan-400/60 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all duration-300 group cursor-pointer ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        } ${isSupercharged ? "scale-125 border-white shadow-[0_0_80px_#22d3ee]" : "hover:-translate-y-1"}`}
      >
        
        {/* Jar Neck / Cap */}
        <div className="absolute -top-2 w-6 h-2 rounded-t-md bg-gradient-to-r from-cyan-400 to-blue-500 border border-cyan-200 shadow-[0_0_10px_#22d3ee]"></div>

        {/* Jar Glass Interior (Container for Filling Liquid) */}
        <div className="relative w-10 h-14 rounded-xl overflow-hidden bg-slate-900/90 border border-white/10 flex flex-col justify-end">
          
          {/* Glowing Liquid Rising with Scroll Progress */}
          <div
            className="w-full bg-gradient-to-t from-cyan-600 via-blue-500 to-cyan-300 transition-all duration-150 relative shadow-[0_0_20px_#22d3ee]"
            style={{ height: `${scrollProgress * 100}%` }}
          >
            {/* Liquid Surface Bubbles / Waves */}
            <div className="absolute top-0 inset-x-0 h-1 bg-white/70 shadow-[0_0_8px_#ffffff] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"></div>
          </div>

          {/* Supercharge Energy Surge Overlay */}
          {isSupercharged && (
            <div className="absolute inset-0 bg-white animate-ping opacity-80"></div>
          )}
        </div>

        {/* Floating Arrow Icon overlapping jar */}
        <div className="absolute inset-0 flex items-center justify-center text-cyan-200 group-hover:text-white transition-colors">
          <ChevronUp className={`w-6 h-6 drop-shadow-[0_0_8px_#22d3ee] ${isSupercharged ? "animate-bounce" : "group-hover:-translate-y-0.5"} transition-transform`} />
        </div>

        {/* Ambient Tooltip */}
        <span className="absolute -left-28 bg-slate-900/90 border border-cyan-400/40 text-cyan-200 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[0_0_15px_rgba(6,182,212,0.3)] backdrop-blur-md">
          Warp to Top ({Math.round(scrollProgress * 100)}%)
        </span>

      </button>

      {/* Add Hyperspeed Keyframe to your CSS (e.g. globals.css) */}
      <style jsx global>{`
        @keyframes hyper-speed-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(1200%);
          }
        }
        .animate-hyper-speed-line {
          animation-name: hyper-speed-line;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}