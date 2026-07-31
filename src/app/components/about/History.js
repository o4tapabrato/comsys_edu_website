export default function History({ data }) {
  if (!data) return null;
  return (
    <section id="history" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-animated-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-4">History of COMSYS</h2>
        <p className="text-blue-100/75 text-center max-w-2xl mx-auto mb-14 text-sm">{data.intro}</p>

        <div className="relative border-l border-white/10 pl-8 space-y-10">
          {data.timeline?.map((item, i) => (
            <div key={i} className="relative">
              <span
                className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse-glow"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <span className="text-blue-300 text-sm font-bold">{item.year}</span>
              <h3 className="text-white font-semibold mt-1">{item.title}</h3>
              <p className="text-blue-100/70 text-sm mt-1 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}