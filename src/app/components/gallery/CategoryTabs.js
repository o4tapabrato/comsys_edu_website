"use client";

export default function CategoryTabs({ activeCategory, setActiveCategory }) {
  const categories = [
    { id: "all", label: "All Media" },
    { id: "conference", label: "Conference Gallery" },
    { id: "outreach", label: "Outreach Gallery" },
    { id: "awards", label: "Awards Gallery" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer border ${
            activeCategory === cat.id
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-300/60 shadow-[0_0_25px_rgba(6,182,212,0.5)]"
              : "bg-slate-900/80 text-blue-200/70 border-cyan-500/30 hover:border-cyan-400 hover:text-white"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}