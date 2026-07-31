"use client";

import { X } from "lucide-react";

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border-2 border-cyan-400/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_80px_rgba(6,182,212,0.6)] space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900 border border-cyan-400/50 flex items-center justify-center text-cyan-300 hover:text-white hover:scale-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.4)]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-cyan-500/40">
          <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{item.category} Archive</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">{item.title}</h2>
          <p className="text-sm text-blue-200/80">{item.desc}</p>
        </div>

      </div>
    </div>
  );
}