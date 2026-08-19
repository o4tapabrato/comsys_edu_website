"use client";

import { X, ImageOff } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function LightboxModal({ item, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setImgError(false);
  }, [item]);

  if (!mounted || !item) return null;

  const imageSource = item.url;

  // createPortal renders this element directly into document.body, 
  // bypassing all layout transforms, perspectives, and scroll traps.
  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative max-w-4xl w-full bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-indigo-950/95 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.6)] flex flex-col my-auto max-h-[85vh]">
        
        {/* Close Button - Positioned above everything */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[1000000] p-2.5 rounded-full bg-slate-950/90 hover:bg-cyan-500/30 text-white border border-cyan-400/40 hover:border-cyan-400 transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.4)] group cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
        </button>

        {/* Image Display Container */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] bg-black/60 flex items-center justify-center overflow-hidden shrink-0">
          {imageSource && !imgError ? (
            <img
              src={imageSource}
              alt={item.heading || item.title || "Gallery Image"}
              className="w-full h-full object-contain p-2"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-blue-200/65 space-y-2">
              <ImageOff className="w-10 h-10 text-cyan-400/60" />
              <p className="text-sm font-semibold text-red-300">Image failed to load or URL is missing.</p>
              <p className="text-xs text-slate-400 break-all max-w-md text-center">
                {imageSource ? `Tried loading: ${imageSource}` : "No image field found on item object."}
              </p>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6 bg-slate-900/90 border-t border-white/10 space-y-2 overflow-y-auto">
          <div className="flex items-center justify-between text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-black uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              {item.category || "GENERAL"}
            </span>
            {item.time && (
              <span className="text-blue-200 font-bold">
                {new Date(item.time).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            )}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
            {item.heading || item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-blue-200/80 leading-relaxed font-normal">
              {item.description}
            </p>
          )}
        </div>

      </div>
    </div>,
    document.body
  );
}