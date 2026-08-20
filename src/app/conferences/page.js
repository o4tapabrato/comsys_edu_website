"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Globe, BookOpen, Search, Sparkles } from "lucide-react";

import ConferenceCard from "../components/conferences/ConferenceCards";
import KeynoteCard from "../components/conferences/KeynoteCard";
import AwardCard from "../components/conferences/AboutCard";
import GalleryGrid from "../components/conferences/GalleryGrid";
import GridTracerBackground from "../components/core/GridTracerBackground";

export default function ConferencesPage() {
  const [particles, setParticles] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const [upcomingConferences, setUpcomingConferences] = useState([]);
  const [pastConferences, setPastConferences] = useState([]);
  
  // State for dynamic gallery items from the database API
  const [galleryImages, setGalleryImages] = useState([]);

  const keynotes = [
    { name: "Prof. Arthur Pendelton", title: "MIT CSAIL, USA", topic: "Autonomous Distributed Systems & Neural Trust", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
    { name: "Dr. Ananya Mukherjee", title: "IIT Delhi, India", topic: "Empirical Analytics in Large-Scale Demographic Surveys", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" },
    { name: "Prof. Henrik Lindqvist", title: "KTH Royal Institute, Sweden", topic: "Sustainable Digital Market Architectures", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" },
  ];

  const awardsList = [
    { title: "COMSYS Best Paper Award", desc: "Recognizing outstanding theoretical and applied research contributions.", prize: "$2,500 + Publication Grant" },
    { title: "ICDEC Young Researcher Fellowship", desc: "Empowering scholars under 35 with research stipends and mentorship.", prize: "Full Conference Grant" },
    { title: "Trust Governance Excellence Award", desc: "Honoring empirical studies advancing digital public welfare and survey transparency.", prize: "Medal & Citation" },
  ];

  // Generate particles
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

  // Fetch Upcoming Conferences
  useEffect(() => {
    async function fetchUpcoming() {
      try {
        const res = await fetch("/api/conferences/upcoming");
        if (!res.ok) throw new Error("Failed to fetch upcoming conferences");
        const json = await res.json();
        const rawData = Array.isArray(json) ? json : json?.data || json?.conferences || [];
        setUpcomingConferences(rawData);
      } catch (err) {
        console.error("Error fetching upcoming conferences:", err);
      }
    }
    fetchUpcoming();
  }, []);

  // Fetch Past Conferences
  useEffect(() => {
    async function fetchPast() {
      try {
        const res = await fetch("/api/conferences/past");
        if (!res.ok) throw new Error("Failed to fetch past conferences");
        const json = await res.json();
        const rawData = Array.isArray(json) ? json : json?.data || json?.conferences || [];
        setPastConferences(rawData);
      } catch (err) {
        console.error("Error fetching past conferences:", err);
      }
    }
    fetchPast();
  }, []);

  // Fetch Gallery Items from your API
  useEffect(() => {
    async function fetchGallery() {
      try {
        // Fetching items filtered by the CONFERENCE category (adjust limit as needed)
        const res = await fetch("/api/gallery?category=CONFERENCE&limit=6");
        if (!res.ok) throw new Error("Failed to fetch gallery items");
        const json = await res.json();
        
        // Extract items array based on your API response structure ({ success: true, data: { items, pagination } })
        const items = json?.success && json?.data?.items ? json.data.items : Array.isArray(json?.data) ? json.data : [];
        setGalleryImages(items);
      } catch (err) {
        console.error("Error fetching gallery items:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden perspective-[1200px]">
      <div className="absolute inset-0 bg-animated-grid opacity-25 pointer-events-none">
        <GridTracerBackground opacity={0.6}></GridTracerBackground>
      </div>

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 space-y-32">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2.5 bg-blue-500/20 border border-blue-400/50 px-5 py-2.5 rounded-full text-blue-200 text-sm font-extrabold backdrop-blur-3xl shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-pulse">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-bounce" />
            <span>Global Academic Summits</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Conferences & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]">Research Proceedings</span>
          </h1>
        </div>

        {/* Schedule Tabs */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Conference Schedule</h2>
            <div className="flex bg-slate-900/90 p-1.5 rounded-2xl border border-cyan-500/40 shadow-[0_0_20px_rgba(30,58,138,0.5)]">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${activeTab === "upcoming" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]" : "text-blue-200/70 hover:text-white"}`}
              >
                Upcoming Conferences
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${activeTab === "past" ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]" : "text-blue-200/70 hover:text-white"}`}
              >
                Past Conferences
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeTab === "upcoming"
              ? upcomingConferences.map((conf) => <ConferenceCard key={conf.id} conference={conf} type="upcoming" />)
              : pastConferences.map((conf) => <ConferenceCard key={conf.id} conference={conf} type="past" />)}
          </div>
        </div>

        {/* Proceedings Archive */}
        <section className="bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-500/40 rounded-3xl p-10 sm:p-14 backdrop-blur-3xl shadow-[0_0_60px_rgba(30,58,138,0.6)] space-y-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-black text-white">Research Proceedings Archive</h2>
            <p className="text-blue-100/80 text-base">Search through our repository of peer-reviewed conference volumes.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
            <input
              type="text"
              placeholder="Search papers by keyword, author, or conference title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-cyan-500/40 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>
        </section>

        {/* Keynotes */}
        <section className="space-y-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center">Distinguished Keynote Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keynotes.map((speaker, idx) => <KeynoteCard key={idx} speaker={speaker} />)}
          </div>
        </section>

        {/* Awards */}
        <section className="space-y-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center">Conference Awards & Fellowships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awardsList.map((award, idx) => <AwardCard key={idx} award={award} />)}
          </div>
        </section>

        {/* Gallery */}
        <section className="space-y-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center">Conference Gallery</h2>
          <GalleryGrid 
            images={galleryImages} 
          />
        </section>

      </div>
    </div>
  );
}