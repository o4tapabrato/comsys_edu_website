import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedConferences() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Featured Conferences & Events[cite: 1]</h2>
          <p className="text-blue-100/70">Discover our flagship academic series and ongoing symposiums.</p>
        </div>
        <Link href="/conferences" className="mt-4 md:mt-0 text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-1">
          <span>View all series</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition duration-300 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 mb-4">COMSYS Series[cite: 1]</span>
            <h3 className="text-xl font-bold text-white mb-3">Annual International COMSYS Symposium</h3>
            <p className="text-sm text-blue-200/70 mb-6">Bringing together global leaders, researchers, and technologists to discuss breakthroughs in computing systems.</p>
          </div>
          <Link href="/conferences" className="text-sm font-semibold text-blue-400 hover:underline flex items-center space-x-1">
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition duration-300 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 mb-4">ICDEC Series[cite: 1]</span>
            <h3 className="text-xl font-bold text-white mb-3">International Conference on Digital Economy</h3>
            <p className="text-sm text-blue-200/70 mb-6">Exploring the intersection of modern economics, data science, and digital transformations worldwide.</p>
          </div>
          <Link href="/conferences" className="text-sm font-semibold text-blue-400 hover:underline flex items-center space-x-1">
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition duration-300 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 mb-4">Innovation & Hackathons[cite: 1]</span>
            <h3 className="text-xl font-bold text-white mb-3">Student Hackathons & Startup Support</h3>
            <p className="text-sm text-blue-200/70 mb-6">Encouraging youth entrepreneurship through structured challenges, grant awards, and mentorship programs.</p>
          </div>
          <Link href="/innovation" className="text-sm font-semibold text-blue-400 hover:underline flex items-center space-x-1">
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}