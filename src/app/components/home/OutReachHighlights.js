import { BookOpen, HeartHandshake, Users } from "lucide-react";

export default function OutreachHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950/40 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Outreach & Social Impact[cite: 1]</h2>
          <p className="text-blue-100/70">Beyond academics, COMSYS is deeply dedicated to uplifting rural communities, spreading digital literacy, and conducting regular community health camps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/80 border border-white/10 p-8 rounded-2xl text-center">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Rural Education & STEM[cite: 1]</h3>
            <p className="text-sm text-blue-200/70">Promoting foundational science and digital proficiency for underprivileged school children.</p>
          </div>

          <div className="bg-slate-900/80 border border-white/10 p-8 rounded-2xl text-center">
            <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Medical & Blood Donation Camps[cite: 1]</h3>
            <p className="text-sm text-blue-200/70">Organizing health checkup drives and blood donation camps to serve immediate public medical needs.</p>
          </div>

          <div className="bg-slate-900/80 border border-white/10 p-8 rounded-2xl text-center">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Mentorship & Careers</h3>
            <p className="text-sm text-blue-200/70">Offering targeted research internships, mentorship frameworks, and hands-on career growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}