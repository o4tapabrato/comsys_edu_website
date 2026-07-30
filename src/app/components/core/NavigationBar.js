"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Add a rich shadow and background opacity shift when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white ${
        scrolled ? "shadow-2xl shadow-blue-950/40 py-3" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand with glowing effect */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300 hover:opacity-90 transition"
            >
              COMSYS
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-blue-100/80">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-250 focus:outline-none"
              >
                About Us{" "}
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {dropdownOpen === "about" && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/about"
                    className="block px-4 py-2.5 text-blue-100 hover:bg-blue-600/30 hover:text-white transition"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    href="/about#history"
                    className="block px-4 py-2.5 text-blue-100 hover:bg-blue-600/30 hover:text-white transition"
                  >
                    History of COMSYS
                  </Link>
                  <Link
                    href="/about#leadership"
                    className="block px-4 py-2.5 text-blue-100 hover:bg-blue-600/30 hover:text-white transition"
                  >
                    Trustees & Committee
                  </Link>
                  <Link
                    href="/about#roadmap"
                    className="block px-4 py-2.5 text-blue-100 hover:bg-blue-600/30 hover:text-white transition"
                  >
                    Strategic Roadmap (Vision 2035)
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/conferences"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Conferences
            </Link>

            <Link
              href="/outreach"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Outreach
            </Link>

            <Link
              href="/careers"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Careers
            </Link>

            <Link
              href="/innovation"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Innovation
            </Link>

            <Link
              href="/news"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              News
            </Link>

            <Link
              href="/gallery"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Gallery
            </Link>

            <Link
              href="/transparency"
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Transparency
            </Link>

            {/* CTA Support Button with rich contrast accent */}
            <Link
              href="/support"
              className="ml-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 focus:outline-none transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-6 py-6 space-y-3 animate-in slide-in-from-top-4 duration-300">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            About Us
          </Link>
          <Link
            href="/conferences"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            Conferences
          </Link>
          <Link
            href="/outreach"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            Outreach & Social Impact
          </Link>
          <Link
            href="/careers"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            Internship & Career
          </Link>
          <Link
            href="/innovation"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            Innovation & Entrepreneurship
          </Link>
          <Link
            href="/news"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            News & Media
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            Gallery
          </Link>
          <Link
            href="/transparency"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-blue-100 hover:text-white transition"
          >
            Transparency & Governance
          </Link>
          <div className="pt-2">
            <Link
              href="/support"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg shadow-blue-500/30 hover:opacity-95 transition"
            >
              Support Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}