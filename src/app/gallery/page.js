"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

import GridTracerBackground from "../components/core/GridTracerBackground";
import CategoryTabs from "../components/gallery/CategoryTabs";
import MediaCard from "../components/gallery/MediaCard";
import LightboxModal from "../components/gallery/LightboxModal";

export default function GalleryPage() {
  const [particles, setParticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

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

  const galleryItems = [
    {
      id: 1,
      title: "COMSYS Flagship Keynote Presentation",
      category: "conference",
      type: "photo",
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      desc: "Distinguished keynote speaker addressing global researchers in New Delhi.",
    },
    {
      id: 2,
      title: "Rural Digital Literacy STEM Camp",
      category: "outreach",
      type: "photo",
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      desc: "Empowering young students in tier-3 regions with foundational coding and computer skills.",
    },
    {
      id: 3,
      title: "Annual Trust Research Fellowship Meet",
      category: "conference",
      type: "photo",
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      desc: "Scholars analyzing empirical survey data and discussing sustainable economic frameworks.",
    },
    {
      id: 4,
      title: "Excellence in Research Award Ceremony",
      category: "awards",
      type: "photo",
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
      desc: "Honoring outstanding young paper contributors with research grants and citations.",
    },
    {
      id: 5,
      title: "ICDEC Global Commerce Panel Discussion",
      category: "conference",
      type: "video",
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      desc: "Panel experts discussing secure financial frameworks and blockchain architectures.",
    },
    {
      id: 6,
      title: "Community Healthcare & Wellness Drive",
      category: "outreach",
      type: "photo",
      url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      desc: "Providing medical checkups and public health resources to local communities.",
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden perspective-[1200px]">
      <div className="absolute inset-0 bg-animated-grid opacity-25 pointer-events-none"></div>
      <GridTracerBackground opacity={0.4} />

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2.5 bg-blue-500/20 border border-blue-400/50 px-5 py-2.5 rounded-full text-blue-200 text-sm font-extrabold backdrop-blur-3xl shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-pulse">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-bounce" />
            <span>Visual Archive & Media</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]">Gallery</span>
          </h1>
          <p className="text-blue-100/80 text-lg">
            Explore moments from our international conferences, rural outreach camps, research fellowships, and award ceremonies.
          </p>
        </div>

        {/* Category Tabs Component */}
        <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MediaCard key={item.id} item={item} onSelect={setSelectedMedia} />
          ))}
        </div>

      </div>

      {/* Lightbox Modal Component */}
      <LightboxModal item={selectedMedia} onClose={() => setSelectedMedia(null)} />

    </div>
  );
}