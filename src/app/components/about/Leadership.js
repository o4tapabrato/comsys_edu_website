export default function Leadership({ trustees, executives }) {
  return (
    <section id="leadership" className="relative py-20 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Group title="Board of Trustees" people={trustees} />
        <div className="h-14" />
        <Group title="Executive Committee" people={executives} />
      </div>
    </section>
  );
}

function Group({ title, people }) {
  if (!people?.length) return null;
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-white text-center mb-10">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {people.map((p, i) => (
          <div
            key={p.id}
            className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-xl hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300"
          >
            {p.photoUrl && (
              <img
                src={p.photoUrl}
                alt={p.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border border-white/10 animate-float-slow"
                style={{ animationDelay: `${(i % 4) * 0.5}s` }}
              />
            )}
            <div className="text-white font-semibold text-sm">{p.name}</div>
            <div className="text-blue-300 text-xs mt-1">{p.designation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}