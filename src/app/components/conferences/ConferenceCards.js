"use client";

import { useState, useRef } from "react";
import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";

export default function ConferenceCard({ conference, type = "upcoming", onAction }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -6;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 6;
      setRotate({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="group relative bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-indigo-950/95 border border-cyan-400/50 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_40px_rgba(30,58,138,0.6)] hover:shadow-[0_0_70px_rgba(6,182,212,0.8)] flex flex-col justify-between transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{conference.series}</span>
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
            {conference.badge || "Archived"}
          </span>
        </div>
        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-200 transition-colors">
          {conference.title}
        </h3>
        <p className="text-sm text-blue-200/80 mb-6">{conference.description}</p>
      </div>

      <div className="space-y-4 pt-6 border-t border-white/10 text-xs text-blue-200 font-bold">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{conference.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
          <span>{conference.location}</span>
        </div>

        {type === "upcoming" ? (
          <button
            onClick={() => onAction && onAction(conference)}
            className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold py-3 px-6 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Register & Submit Paper</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <a
            href={conference.proceedingsUrl || "#"}
            className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-cyan-300 font-extrabold py-3 px-6 rounded-xl border border-cyan-400/40 transition-all flex items-center justify-center space-x-2"
          >
            <span>View Proceedings & Papers</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}