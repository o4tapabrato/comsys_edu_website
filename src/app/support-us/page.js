"use client";

import { useState, useRef, useEffect } from "react";
import { 
  HeartHandshake, 
  Building2, 
  Award, 
  Coins, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  Flame, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import GridTracerBackground from "../components/core/GridTracerBackground";

export default function SupportAndContactPage() {
  const [particles, setParticles] = useState([]);
  const [cardRotates, setCardRotates] = useState({});
  const [selectedTier, setSelectedTier] = useState("₹5,000");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cardRefs = useRef({});

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

      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;

      setCardRotates((prev) => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
    }
  };

  const handleMouseLeave = (id) => {
    setCardRotates((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const supportOptions = [
    { id: "sup-1", title: "Donate & Tax Benefits", desc: "Support grassroots digital literacy and research with 80G tax exemption eligibility.", icon: HeartHandshake, badge: "80G Verified" },
    { id: "sup-2", title: "CSR Partnership", desc: "Collaborate with COMSYS under Corporate Social Responsibility initiatives for large-scale social upliftment.", icon: Building2, badge: "Corporate Impact" },
    { id: "sup-3", title: "Conference Sponsorship", desc: "Promote your brand at global academic summits and research proceedings.", icon: Award, badge: "High Visibility" },
    { id: "sup-4", title: "Endowment Fund", desc: "Establish long-term financial endowments supporting perpetual trust governance and innovation.", icon: Coins, badge: "Perpetual Legacy" },
    { id: "sup-5", title: "Scholarship Fund", desc: "Empower talented underprivileged students with direct academic tuition grants.", icon: GraduationCap, badge: "Student Success" },
    { id: "sup-6", title: "Research Support", desc: "Fund empirical data science and demographic survey analytics projects.", icon: BookOpen, badge: "Empirical Science" },
    { id: "sup-7", title: "Volunteer Program", desc: "Join our on-ground camps, conference committees, and rural mentorship drives.", icon: Users, badge: "Join Movement" },
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden perspective-[1200px]">
      
      {/* Background Cybernetic Grid & Light Tracers */}
      <div className="absolute inset-0 bg-animated-grid opacity-30 pointer-events-none"></div>
      <GridTracerBackground opacity={0.5} />

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
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.9)",
              backgroundColor: "rgba(125, 211, 252, 0.9)",
            }}
          />
        ))}
      </div>

      {/* Massive Neon Aurora Backdrops */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-cyan-600/35 via-blue-600/35 to-indigo-600/35 blur-[200px] pointer-events-none animate-pulse-glow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10 space-y-28">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2.5 bg-cyan-500/20 border border-cyan-400/60 px-5 py-2.5 rounded-full text-cyan-200 text-sm font-extrabold backdrop-blur-3xl shadow-[0_0_35px_rgba(6,182,212,0.5)] animate-pulse">
            <Flame className="w-4 h-4 text-cyan-300 animate-bounce" />
            <span>Empower Growth & Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Support Us & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_50px_rgba(56,189,248,0.9)]">Connect</span>
          </h1>
          <p className="text-blue-100/80 text-lg">
            Partner with COMSYS Educational Trust through donations, CSR initiatives, endowments, sponsorships, or get in touch with our team.
          </p>
        </div>

        {/* Interactive Donation Tier Selector */}
        <div className="relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border-2 border-cyan-400/60 rounded-3xl p-8 sm:p-12 backdrop-blur-3xl shadow-[0_0_70px_rgba(6,182,212,0.4)] space-y-8 text-center">
          <div className="space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Instant Contribution</span>
            <h2 className="text-3xl font-black text-white">Choose Your Impact Tier</h2>
            <p className="text-sm text-blue-200/80 max-w-xl mx-auto">All contributions enjoy 80G tax deduction benefits under Indian Income Tax regulations.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {["₹1,000", "₹5,000", "₹10,000", "₹25,000", "Custom Amount"].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-6 py-3.5 rounded-2xl text-sm font-black transition-all cursor-pointer border ${
                  selectedTier === tier
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.7)] scale-105"
                    : "bg-slate-900/80 text-blue-200/80 border-cyan-500/30 hover:border-cyan-400 hover:text-white"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          <button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-black py-4 px-10 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_55px_rgba(6,182,212,0.9)] hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-3 text-base border border-cyan-300/50 cursor-pointer">
            <span>Proceed with {selectedTier} Contribution</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Support Options Grid (Wobbling Cards) */}
        <div className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-black text-white">Partnership & Support Avenues</h2>
            <p className="text-blue-100/80 text-sm">Explore various ways to contribute to academic research and social welfare.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((opt) => {
              const IconComp = opt.icon;
              return (
                <div
                  key={opt.id}
                  ref={(el) => (cardRefs.current[opt.id] = el)}
                  onMouseMove={(e) => handleMouseMove(e, opt.id)}
                  onMouseLeave={() => handleMouseLeave(opt.id)}
                  style={{
                    transform: `rotateX(${cardRotates[opt.id]?.x || 0}deg) rotateY(${cardRotates[opt.id]?.y || 0}deg)`,
                    transition: "transform 0.1s ease-out",
                  }}
                  className="group relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border border-cyan-400/50 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_50px_rgba(30,58,138,0.7)] hover:shadow-[0_0_80px_rgba(6,182,212,0.8)] flex flex-col justify-between transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/60 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        {opt.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-200 transition-colors">
                      {opt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed mb-6">
                      {opt.desc}
                    </p>
                  </div>

                  <button className="w-full bg-slate-900 hover:bg-slate-800 text-cyan-300 font-extrabold py-3 px-6 rounded-xl border border-cyan-400/40 transition-all flex items-center justify-center space-x-2 text-xs cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <span>Explore Pathway</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-cyan-500/30">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">Contact COMSYS Trust</h2>
              <p className="text-blue-100/80 text-base leading-relaxed">
                Have questions regarding our conferences, research grants, tax certificates, or partnership opportunities? Reach out to our executive secretariat.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Headquarters</h4>
                  <p className="text-xs text-blue-200/70 mt-1">COMSYS Educational Trust, Academic Institutional District, New Delhi, India.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Email Us</h4>
                  <p className="text-xs text-blue-200/70 mt-1">secretariat@comsystrust.org | support@comsystrust.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Call Secretariat</h4>
                  <p className="text-xs text-blue-200/70 mt-1">+91 (011) 4567-8900 / +91 98765-43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border-2 border-cyan-400/60 rounded-3xl p-8 sm:p-10 backdrop-blur-3xl shadow-[0_0_60px_rgba(6,182,212,0.4)]">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_#22d3ee]">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-white">Message Dispatched!</h3>
                <p className="text-sm text-blue-200/80">Thank you for reaching out. Our secretariat team will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-black text-white mb-2">Send an Inquiry</h3>
                
                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Jane Doe"
                    className="w-full bg-slate-950/90 border border-cyan-500/40 rounded-xl py-3.5 px-4 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane.doe@university.edu"
                    className="w-full bg-slate-950/90 border border-cyan-500/40 rounded-xl py-3.5 px-4 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Subject / Inquiry Type</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="CSR Partnership / Conference Submission"
                    className="w-full bg-slate-950/90 border border-cyan-500/40 rounded-xl py-3.5 px-4 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950/90 border border-cyan-500/40 rounded-xl py-3.5 px-4 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-black py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_50px_rgba(6,182,212,0.9)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 border border-cyan-300/50 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}