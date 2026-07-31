export default function StrategicRoadmap({ data }) {
  if (!data) return null;
  return (
    <section id="roadmap" className="relative py-20 bg-white/[0.02] border-y border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-indigo-600/20 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-14">
          {data.title || "Strategic Roadmap — Vision 2035"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.milestones?.map((m, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl animate-border-glow"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <span className="text-cyan-300 font-black text-lg">{m.year}</span>
              <h3 className="text-white font-semibold mt-2 text-sm">{m.title}</h3>
              <p className="text-blue-100/65 text-xs mt-2 leading-relaxed">{m.body}</p>
              {m.status && (
                <span className="inline-block mt-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  {m.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}