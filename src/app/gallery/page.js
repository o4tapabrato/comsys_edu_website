"use client";

import { useState, useEffect, useTransition } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

import GridTracerBackground from "../components/core/GridTracerBackground";
import CategoryTabs from "../components/gallery/CategoryTabs";
import MediaCard from "../components/gallery/MediaCard";
import LightboxModal from "../components/gallery/LightboxModal";

export default function GalleryPageClient({ initialItems = [], initialPagination = {}, years = [] }) {
  const [particles, setParticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeYear, setActiveYear] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const [items, setItems] = useState(initialItems);
  const [pagination, setPagination] = useState(initialPagination);
  const [isPending, startTransition] = useTransition();

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

  async function fetchData({ category, year, page }) {
    const params = new URLSearchParams();
    if (category && category !== "all") params.set("category", category);
    if (year) params.set("year", year);
    params.set("page", page);
    params.set("limit", "12");

    const res = await fetch(`/api/gallery?${params.toString()}`);
    if (!res.ok) return;
    const json = await res.json();

    // Safely parse items and pagination from API response structure
    const fetchedItems = json?.data?.items || json?.items || [];
    const fetchedPagination = json?.data?.pagination || json?.pagination || { page: 1, totalPages: 1 };

    startTransition(() => {
      setItems(fetchedItems);
      setPagination(fetchedPagination);
    });
  }

  function handleCategoryChange(category) {
    setActiveCategory(category);
    fetchData({ category, year: activeYear, page: 1 });
  }

  function handleYearChange(year) {
    setActiveYear(year);
    fetchData({ category: activeCategory, year, page: 1 });
  }

  function handlePageChange(page) {
    fetchData({ category: activeCategory, year: activeYear, page });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
            Trust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]">
              Gallery
            </span>
          </h1>
          <p className="text-blue-100/80 text-lg">
            Explore moments from our international conferences, rural outreach camps, research fellowships, and award ceremonies.
          </p>
        </div>

        {/* Category Tabs */}
        <CategoryTabs activeCategory={activeCategory} setActiveCategory={handleCategoryChange} />

        {/* Year Filter */}
        {years?.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 -mt-8">
            <button
              onClick={() => handleYearChange(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition ${
                activeYear === null
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50"
                  : "bg-slate-900/60 text-blue-200/60 border-white/10 hover:text-white hover:border-cyan-400/30"
              }`}
            >
              All Years
            </button>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => handleYearChange(y)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition ${
                  activeYear === y
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50"
                    : "bg-slate-900/60 text-blue-200/60 border-white/10 hover:text-white hover:border-cyan-400/30"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className={isPending ? "opacity-50 transition-opacity" : "transition-opacity"}>
          {items.length === 0 ? (
            <div className="text-center py-20 text-blue-200/60">
              No media found for this filter yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <MediaCard key={item.id} item={item} onSelect={setSelectedMedia} />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination?.totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-4 text-sm font-bold text-blue-200">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <button
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page >= pagination.totalPages}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <LightboxModal item={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </div>
  );
}