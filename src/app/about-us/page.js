"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Target, 
  Compass, 
  History, 
  Quote, 
  Users, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Award,
  BookOpen,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  const [particles, setParticles] = useState([]);
  const [cardRotates, setCardRotates] = useState({});
  const cardRefs = useRef({});

  // Generate background particles safely on client side
  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * -20}%`,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  const handleMouseMove = (e, id) => {
    const cardEl = cardRefs.current[id];
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;

      setCardRotates((prev) => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
    }
  };

  const handleMouseLeave = (id) => {
    setCardRotates((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  const values = [
    { title: "Academic Excellence", desc: "Rigorous standards in global conferences, research publications, and scholarly mentorship.", icon: Award },
    { title: "Uncompromising Integrity", desc: "Full adherence to 12AB & 80G governance, financial accountability, and transparent outreach.", icon: ShieldCheck },
    { title: "Inclusive Empowerment", desc: "Bridging the digital divide across tier-2 and tier-3 regions through rural STEM camps.", icon: Users },
    { title: "Forward Innovation", desc: "Pioneering cloud computing systems, AI applications, and sustainable economic frameworks.", icon: TrendingUp },
  ];

  const leadership = [
    { role: "President", name: "Dr. Alok Sharma", quote: "Education and empirical research are the dual pillars upon which a sustainable global economy is built.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" },
    { role: "General Secretary", name: "Prof. Meenakshi Verma", quote: "Our trust remains steadfast in fostering a vibrant community of young innovators and social changemakers.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
  ];

  const roadmapMilestones = [
    { year: "2026 - 2028", title: "Expansion of Global Summits", desc: "Scaling COMSYS and ICDEC conferences across international academic hubs and deploying rural digital literacy drives." },
    { year: "2029 - 2031", title: "Advanced Research Labs", desc: "Establishing dedicated data science and AI research incubators focused on empirical survey analytics and predictive social trust." },
    { year: "2032 - 2035", title: "Vision 2035 Global Impact", desc: "Reaching over 100,000 scholars globally, establishing international fellowship exchange programs, and achieving 100% sustainable community trust governance." },
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden perspective-[1200px]">
      
      {/* Background Cybernetic Grid */}
      <div className="absolute inset-0 bg-animated-grid opacity-25 pointer-events-none"></div>

      {/* Floating Kinetic Particles */}
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

      {/* Massive Neon Aurora Backdrops */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-blue-600/30 via-cyan-500/25 to-indigo-600/30 blur-[180px] pointer-events-none animate-pulse-glow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 space-y-32">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2.5 bg-blue-500/20 border border-blue-400/50 px-5 py-2.5 rounded-full text-blue-200 text-sm font-extrabold backdrop-blur-3xl shadow-[0_0_30px_rgba(59,130,246,0.4)] animate-pulse">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-bounce" />
            <span>About COMSYS Educational Trust</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Pioneering Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]">Research & Trust</span>
          </h1>
          <p className="text-blue-100/80 text-lg">
            Dedicated to academic leadership, empirical data transparency, and grassroots social welfare.
          </p>
        </div>

        {/* 1. Vision & Mission Section */}
        <section id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div 
            ref={(el) => (cardRefs.current["vision"] = el)}
            onMouseMove={(e) => handleMouseMove(e, "vision")}
            onMouseLeave={() => handleMouseLeave("vision")}
            style={{
              transform: `rotateX(${cardRotates["vision"]?.x || 0}deg) rotateY(${cardRotates["vision"]?.y || 0}deg)`,
              transition: "transform 0.1s ease-out",
            }}
            className="relative bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-indigo-950/95 border border-cyan-400/50 rounded-3xl p-10 backdrop-blur-3xl shadow-[0_0_50px_rgba(30,58,138,0.7)] flex flex-col justify-between"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <Compass className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Our Ultimate Horizon</div>
              <h3 className="text-3xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-blue-100/80 text-base leading-relaxed">
                To be a globally recognized institution at the intersection of advanced computing research, economic trust, and transformative social welfare.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div 
            ref={(el) => (cardRefs.current["mission"] = el)}
            onMouseMove={(e) => handleMouseMove(e, "mission")}
            onMouseLeave={() => handleMouseLeave("mission")}
            style={{
              transform: `rotateX(${cardRotates["mission"]?.x || 0}deg) rotateY(${cardRotates["mission"]?.y || 0}deg)`,
              transition: "transform 0.1s ease-out",
            }}
            className="relative bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-indigo-950/95 border border-blue-400/50 rounded-3xl p-10 backdrop-blur-3xl shadow-[0_0_50px_rgba(30,58,138,0.7)] flex flex-col justify-between"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <Target className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Our Core Purpose</div>
              <h3 className="text-3xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-blue-100/80 text-base leading-relaxed">
                To empower scholars and communities by organizing world-class academic summits, funding empirical research, and executing grassroots digital literacy and healthcare programs.
              </p>
            </div>
          </div>

        </section>

        {/* 2. History of COMSYS */}
        <section id="history" className="relative bg-gradient-to-br from-blue-950/80 via-slate-900/90 to-indigo-950/80 border border-cyan-500/40 rounded-3xl p-10 sm:p-14 backdrop-blur-3xl shadow-[0_0_60px_rgba(30,58,138,0.6)]">
          <div className="max-w-3xl space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <History className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Our Legacy</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">History of COMSYS</h2>
            <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed">
              Founded by a collective of visionary researchers and academicians, COMSYS Educational Trust started with a singular premise: to bridge the gap between theoretical computer science, empirical economic survey data, and practical societal upliftment. Over the years, COMSYS has scaled into a pan-Indian academic leader, hosting flagship international conferences and empowering tens of thousands of scholars.
            </p>
          </div>
        </section>

        {/* 3 & 4. President's & Secretary's Messages */}
        <section id="leadership-messages" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leadership.map((leader, index) => (
            <div key={index} className="relative bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-400/40 rounded-3xl p-8 sm:p-10 backdrop-blur-3xl shadow-[0_0_50px_rgba(30,58,138,0.6)] flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{leader.role}'s Message</div>
                    <h3 className="text-2xl font-black text-white">{leader.name}</h3>
                  </div>
                </div>
                <blockquote className="text-blue-100/90 text-base italic leading-relaxed relative pl-6 border-l-2 border-cyan-400/60">
                  "{leader.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </section>

        {/* 5 & 6. Trustees & Executive Committee */}
        <section id="trustees-committee" className="space-y-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Trustees & Executive Committee</h2>
            <p className="text-blue-100/80 text-base">
              Guided by distinguished leaders across academia, law, technology, and public welfare administration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Dr. R. K. Malhotra", "Prof. Sunita Deshmukh", "Adv. Rajesh Nair", "Dr. Vikramaditya Roy"].map((name, i) => (
              <div key={i} className="bg-slate-900/90 border border-cyan-500/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(30,58,138,0.5)]">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-400/40 mx-auto flex items-center justify-center text-cyan-300 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Users className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{name}</h4>
                <p className="text-xs text-cyan-300 font-bold uppercase tracking-wider">Governing Board Member</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Our Values */}
        <section id="values" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Our Core Values</h2>
            <p className="text-blue-100/80 text-base">The ethical and professional bedrock driving every initiative we undertake.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-blue-950/80 via-slate-900/90 to-indigo-950/80 border border-cyan-500/30 p-8 rounded-3xl shadow-[0_0_35px_rgba(30,58,138,0.5)] hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-xs text-blue-200/70 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. Strategic Roadmap (Vision 2035) */}
        <section id="roadmap" className="relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border-2 border-cyan-400/50 rounded-3xl p-10 sm:p-14 backdrop-blur-3xl shadow-[0_0_70px_rgba(6,182,212,0.4)]">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-400/40 px-4 py-1.5 rounded-full text-cyan-200 text-xs font-bold uppercase tracking-wider">
              Strategic Blueprint
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Strategic Roadmap (Vision 2035)</h2>
            <p className="text-blue-100/80 text-sm sm:text-base">Our structured milestones for sustainable academic and social expansion over the next decade.</p>
          </div>

          <div className="space-y-8">
            {roadmapMilestones.map((milestone, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-slate-900/9onda border border-cyan-500/30 shadow-[0_0_20px_rgba(30,58,138,0.4)] gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-black shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{milestone.year}</span>
                    <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-blue-200/80 max-w-md">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}