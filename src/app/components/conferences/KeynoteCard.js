export default function KeynoteCard({ speaker }) {
  return (
    <div className="bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-indigo-950/90 border border-cyan-400/40 rounded-3xl p-8 backdrop-blur-3xl shadow-[0_0_40px_rgba(30,58,138,0.6)] flex flex-col justify-between hover:border-cyan-300 transition-all">
      <div>
        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/60 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-2xl font-black text-white mb-1">{speaker.name}</h3>
        <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4">{speaker.title}</p>
        <p className="text-sm text-blue-200/80 italic">"{speaker.topic}"</p>
      </div>
    </div>
  );
}