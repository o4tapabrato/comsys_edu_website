"use client";

import { Play, Eye } from "lucide-react";

export default function MediaCard({ item, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-indigo-950/95 border border-cyan-400/40 rounded-3xl overflow-hidden backdrop-blur-3xl shadow-[0_0_40px_rgba(30,58,138,0.6)] hover:shadow-[0_0_70px_rgba(6,182,212,0.8)] hover:border-cyan-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/30 border border-cyan-400/60 flex items-center justify-center text-cyan-200 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-current" />
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-black text-white group-hover:text-cyan-200 transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-blue-200/70 leading-relaxed">
          {item.desc}
        </p>
        <div className="pt-4 flex items-center space-x-2 text-xs font-bold text-cyan-400">
          <Eye className="w-4 h-4" />
          <span>View Full Media</span>
        </div>
      </div>
    </div>
  );
}