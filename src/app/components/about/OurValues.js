import { getIcon } from "../../lib/iconMap";

export default function OurValues({ values }) {
  if (!values?.length) return null;
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-animated-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-14">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = getIcon(v.icon);
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-950/70 via-indigo-950/50 to-slate-900/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-4 animate-float"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}