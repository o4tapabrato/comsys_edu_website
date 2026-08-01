"use client";

import { useState, useRef, useEffect } from "react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  ChevronDown, 
  Globe, 
  Share2,
  Building,
  Compass
} from "lucide-react";
import GridTracerBackground from "../components/core/GridTracerBackground";

export default function ContactPage() {
  const [particles, setParticles] = useState([]);
  const [cardRotates, setCardRotates] = useState({});
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", category: "General Inquiry" });
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
    setTimeout(() => setIsSubmitted(false), 4500);
    setFormData({ name: "", email: "", subject: "", message: "", category: "General Inquiry" });
  };

  const offices = [
    { id: "off-1", city: "New Delhi (Headquarters)", address: "Academic Institutional District, Sector 4, New Delhi, 110001", phone: "+91 (011) 4567-8900", email: "hq@comsystrust.org" },
    { id: "off-2", city: "Bengaluru Regional Hub", address: "Tech Innovation Corridor, Outer Ring Road, Bengaluru, 560103", phone: "+91 (080) 2345-6789", email: "bengaluru@comsystrust.org" },
    { id: "off-3", city: "Mumbai Liaison Office", address: "Financial Capital Center, Bandra Kurla Complex, Mumbai, 400051", phone: "+91 (022) 9876-5432", email: "mumbai@comsystrust.org" },
  ];

  const faqs = [
    { q: "How do I register for upcoming COMSYS and ICDEC conferences?", a: "You can navigate to the Conferences tab, select the active summit, and click 'Register & Submit Paper' to access author registration and camera-ready paper uploads." },
    { q: "Are donations eligible for 80G tax deductions?", a: "Yes! COMSYS Educational Trust is fully registered under Section 12AB and 80G of the Indian Income Tax Act. All contributors receive tax exemption certificates." },
    { q: "How can academic institutions collaborate on empirical survey research?", a: "Institutions can reach out directly via the enquiry form or email secretariat@comsystrust.org to establish formal Memorandums of Understanding (MoUs)." },
    { q: "Can students apply for young researcher fellowships?", a: "Yes, researchers under 35 presenting at our conferences are automatically considered for the ICDEC and COMSYS Young Researcher Fellowship grants." },
  ];

  const socials = [
    { name: "LinkedIn", handle: "@comsys-educational-trust", color: "from-blue-600 to-cyan-500" },
    { name: "X (Twitter)", handle: "@COMSYSTrust", color: "from-cyan-500 to-blue-700" },
    { name: "YouTube", handle: "COMSYS Global Summits", color: "from-red-600 to-indigo-600" },
    { name: "ResearchGate", handle: "COMSYS Trust Archive", color: "from-emerald-600 to-cyan-600" },
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
            <span>Direct Secretariat Access</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-hyper-glow drop-shadow-[0_0_50px_rgba(56,189,248,0.9)]">Support Hub</span>
          </h1>
          <p className="text-blue-100/80 text-lg">
            Connect with COMSYS Educational Trust across our headquarters, regional offices, digital portals, or submit an official enquiry.
          </p>
        </div>

        {/* 1. Contact Information & Office Locations (Wobbling Cards) */}
        <div className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-black text-white">Global Office Locations</h2>
            <p className="text-blue-100/80 text-sm">Visit or contact our operational hubs across India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((off) => (
              <div
                key={off.id}
                ref={(el) => (cardRefs.current[off.id] = el)}
                onMouseMove={(e) => handleMouseMove(e, off.id)}
                onMouseLeave={() => handleMouseLeave(off.id)}
                style={{
                  transform: `rotateX(${cardRotates[off.id]?.x || 0}deg) rotateY(${cardRotates[off.id]?.y || 0}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="group relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border border-cyan-400/50 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_50px_rgba(30,58,138,0.7)] hover:shadow-[0_0_80px_rgba(6,182,212,0.8)] flex flex-col justify-between transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/60 flex items-center justify-center text-cyan-300 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform">
                    <Building className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-200 transition-colors">
                    {off.city}
                  </h3>
                  <p className="text-xs text-blue-200/80 leading-relaxed mb-6">
                    {off.address}
                  </p>
                </div>

                <div className="space-y-2 pt-6 border-t border-white/10 text-xs font-bold text-cyan-300">
                  <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{off.phone}</span></div>
                  <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-blue-400" /><span>{off.email}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Google Map Integration Container */}
        <div className="relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border-2 border-cyan-400/60 rounded-3xl p-4 sm:p-6 backdrop-blur-3xl shadow-[0_0_70px_rgba(6,182,212,0.4)] space-y-4">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <Compass className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Interactive Headquarters Location</span>
            </div>
            <span className="text-xs text-blue-300 font-bold">New Delhi, India</span>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            {/* Embedded Interactive Google Map Preview */}
            <iframe
              title="COMSYS Headquarters Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.134543789456!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(110%)" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* 3 & 4. Enquiry Form & Social Media Portals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Enquiry Form */}
          <div className="relative bg-gradient-to-br from-blue-950/95 via-slate-900/98 to-indigo-950/95 border-2 border-cyan-400/60 rounded-3xl p-8 sm:p-10 backdrop-blur-3xl shadow-[0_0_60px_rgba(6,182,212,0.4)]">
            {isSubmitted ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_#22d3ee]">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-white">Enquiry Dispatched Successfully!</h3>
                <p className="text-sm text-blue-200/80">Our secretariat team has received your submission and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Official Channel</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Submit an Enquiry</h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Inquiry Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-950/90 border border-cyan-500/40 rounded-xl py-3.5 px-4 text-white text-sm focus:outline-none focus:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  >
                    <option className="bg-slate-900">General Inquiry</option>
                    <option className="bg-slate-900">Conference Registration & Papers</option>
                    <option className="bg-slate-900">CSR Partnership & Donations</option>
                    <option className="bg-slate-900">Tax Exemption / 80G Certificate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Alexander Wright"
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
                    placeholder="alexander.wright@university.edu"
                    className="w-full bg-slate-950/90 border border-cyan-500/40 rounded-xl py-3.5 px-4 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your detailed enquiry here..."
                    className="w-full bg-slate-950/90 border border-cyan-500/40 rounded-xl py-3.5 px-4 text-white placeholder-blue-300/40 text-sm focus:outline-none focus:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-black py-4 px-8 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_50px_rgba(6,182,212,0.9)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 border border-cyan-300/50 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Social Media Portals */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Global Networks</span>
              <h3 className="text-3xl font-black text-white">Social Media Channels</h3>
              <p className="text-blue-100/80 text-sm">Follow our academic feeds, live summit streams, and research breakthroughs across platforms.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {socials.map((soc, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-400/40 rounded-3xl p-6 backdrop-blur-3xl shadow-[0_0_35px_rgba(30,58,138,0.6)] hover:border-cyan-300 transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-black text-white">{soc.name}</h4>
                  <p className="text-xs font-bold text-cyan-400">{soc.handle}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 5. Frequently Asked Questions (FAQ Accordion) */}
        <div className="space-y-8 pt-12 border-t border-cyan-500/30">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-blue-100/80 text-sm">Quick answers to common queries regarding conferences, tax certificates, and trust governance.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-400/40 rounded-2xl p-6 backdrop-blur-3xl shadow-[0_0_30px_rgba(30,58,138,0.5)] cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white pr-4">{faq.q}</h3>
                    <div className={`w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {isOpen && (
                    <p className="mt-4 text-sm text-blue-200/80 leading-relaxed pt-4 border-t border-white/10 animate-fadeIn">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}