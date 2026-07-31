import { Eye, Target } from "lucide-react";

export default function VisionMission({ data }) {
  if (!data) return null;
  return (
    <section id="vision" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none animate-pulse-glow" />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card icon={Eye} title={data.vision?.title || "Our Vision"} body={data.vision?.body} delay="0s" />
          <Card icon={Target} title={data.mission?.title || "Our Mission"} body={data.mission?.body} delay="1.5s" />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, body, delay }) {
  return (
    <div
      className="bg-gradient-to-br from-blue-950/80 via-indigo-950/60 to-slate-900/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl animate-border-glow"
      style={{ animationDelay: delay }}
    >
      <div
        className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-5 animate-float"
        style={{ animationDelay: delay }}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-blue-100/75 leading-relaxed">{body}</p>
    </div>
  );
}