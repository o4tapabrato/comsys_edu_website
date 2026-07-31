import { Quote } from "lucide-react";

export default function LeadershipMessages({ messages }) {
  if (!messages?.length) return null;
  return (
    <section className="relative py-20 bg-white/[0.02] border-y border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {messages.map((m, i) => (
          <div
            key={m.role}
            className="bg-gradient-to-br from-blue-950/80 via-indigo-950/60 to-slate-900/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl animate-border-glow"
            style={{ animationDelay: `${i * 1}s` }}
          >
            <Quote className="w-8 h-8 text-blue-400/60 mb-4" />
            <p className="text-blue-100/85 text-sm leading-relaxed italic mb-6">{m.message}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              {m.photoUrl && (
                <img src={m.photoUrl} alt={m.name} className="w-11 h-11 rounded-full object-cover" />
              )}
              <div>
                <div className="text-white font-semibold text-sm">{m.name}</div>
                <div className="text-blue-300 text-xs">{m.designation || m.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}