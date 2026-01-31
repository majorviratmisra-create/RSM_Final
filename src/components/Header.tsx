"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#vision", label: "Our Vision" },
  { href: "#work", label: "Our Work" },
  { href: "#get-involved", label: "Get Involved" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "HI">("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "HI" : "EN");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 group z-50">
              <div className="flex gap-[3px]">
                <div className="w-[5px] h-8 bg-[var(--primary)] rounded-sm transform -skew-x-12"></div>
                <div className="w-[5px] h-8 bg-[var(--primary)] rounded-sm transform -skew-x-12"></div>
                <div className="w-[5px] h-8 bg-[var(--primary)] rounded-sm transform -skew-x-12"></div>
              </div>
              <span className="text-xl font-bold text-[var(--foreground)] font-[var(--font-heading)]">
                RSM <span className="text-[var(--primary)]">(राष्ट्रमा)</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6">
              <ul className="flex items-center gap-4 xl:gap-5 2xl:gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  />
                </svg>
                <span>{language}</span>
              </button>

              {/* CTA Button */}
              <Link href="#get-involved" className="btn-primary">
                Join the Movement
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2 text-[var(--foreground)] z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-[var(--background)]/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center px-8 transition-all duration-500 delay-100 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}>
          {/* Navigation Links */}
          <ul className="flex flex-col items-center gap-6 sm:gap-8">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className="overflow-hidden"
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${150 + index * 50}ms` : "0ms"
                }}
              >
                <Link
                  href={link.href}
                  className={`block text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-all duration-300 ${
                    isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                  style={{ 
                    fontFamily: "var(--font-heading)",
                    transitionDelay: isMobileMenuOpen ? `${150 + index * 50}ms` : "0ms"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom Section */}
          <div className={`mt-12 sm:mt-16 flex flex-col items-center gap-6 transition-all duration-500 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "400ms" : "0ms" }}
          >
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors font-medium text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{language === "EN" ? "EN | हिंदी" : "हिंदी | EN"}</span>
            </button>

            {/* CTA Button */}
            <Link
              href="#get-involved"
              className="btn-primary text-lg px-8 py-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Movement
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--accent-orange-light)] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--accent-cream)] rounded-full blur-3xl opacity-40"></div>
        </div>
      </div>
    </>
  );
}
