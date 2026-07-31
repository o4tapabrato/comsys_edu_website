import { Award } from "lucide-react";

export default function AwardCard({ award }) {
  return (
    <div className="bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-blue-400/40 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_40px_rgba(30,58,138,0.6)]">
      <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
        <Award className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
      <p className="text-xs text-blue-200/70 mb-4">{award.desc}</p>
      <div className="text-xs font-black text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 px-3 py-1.5 rounded-xl inline-block">
        {award.prize}
      </div>
    </div>
  );
}