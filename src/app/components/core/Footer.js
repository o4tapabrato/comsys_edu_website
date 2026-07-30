import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-blue-100/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About Trust */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight text-white">
              COMSYS
            </h3>
            <p className="text-sm text-blue-200/70 leading-relaxed">
              COMSYS Educational Trust is committed to advancing academic excellence, cutting-edge conferences, innovative research, and impactful community outreach.
            </p>
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex items-center space-x-3 text-blue-200/80">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Educational Trust Headquarters, India</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200/80">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>contact@comsys.org</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">About COMSYS </Link>
              </li>
              <li>
                <Link href="/about#vision" className="hover:text-white transition">Vision & Mission </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-white transition">Trustees </Link>
              </li>
              <li>
                <Link href="/conferences" className="hover:text-white transition">Conferences </Link>
              </li>
              <li>
                <Link href="/outreach" className="hover:text-white transition">Outreach </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition">News </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/support" className="hover:text-white transition">Donate </Link>
              </li>
              <li>
                <Link href="/support#csr" className="hover:text-white transition">CSR Partnership </Link>
              </li>
              <li>
                <Link href="/careers#volunteer" className="hover:text-white transition">Volunteer </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">Internship </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Governance & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/transparency#policies" className="hover:text-white transition">Privacy Policy </Link>
              </li>
              <li>
                <Link href="/transparency#terms" className="hover:text-white transition">Terms of Use </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-white transition">Registration & 12AB/80G</Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-white transition">Sitemap </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Closing */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300/60">
          <p>© {new Date().getFullYear()} COMSYS Educational Trust. All rights reserved .</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/transparency" className="hover:text-white transition">Transparency</Link>
            <Link href="/contact" className="hover:text-white transition">Support Desk</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}