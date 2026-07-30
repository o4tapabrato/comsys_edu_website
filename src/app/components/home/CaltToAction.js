import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-white/10 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Partner With Us to Create Meaningful Change</h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Whether you want to contribute as a CSR partner[cite: 1], join our volunteer group[cite: 1], or collaborate on research, your support drives our mission forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/support"
              className="bg-white text-blue-950 font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition shadow-lg"
            >
              Support Us / Donate[cite: 1]
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-xl transition"
            >
              Contact Our Team[cite: 1]
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}