"use client";

import { useState } from "react";
import { ImageOff, Sparkles } from "lucide-react";

export default function GalleryGrid({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-16 text-blue-200/60 bg-slate-900/40 border border-white/10 rounded-3xl">
        No gallery items found.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((item, index) => {
          // Handle both raw URL strings and database object structures
          const isObject = typeof item === "object" && item !== null;
          const imgUrl = isObject ? item.url : item;
          const title = isObject ? (item.heading || item.title || "Conference Image") : `Conference Image ${index + 1}`;
          const category = isObject ? item.category : "CONFERENCE";

          if (!imgUrl) return null;

          return (
            <div
              key={isObject ? item.id : index}
              onClick={() => setSelectedImage({ url: imgUrl, title, category })}
              className="group relative h-64 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.15)] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-black text-cyan-300 uppercase tracking-widest bg-cyan-500/20 px-2.5 py-1 rounded-full w-fit mb-1 border border-cyan-400/30">
                  {category}
                </span>
                <p className="text-white text-sm font-bold line-clamp-1">{title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simple Modal Preview when an image is clicked */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-slate-900 border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl p-4 space-y-4"
          >
            <div className="relative w-full h-[60vh] bg-black rounded-xl overflow-hidden flex items-center justify-center">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}