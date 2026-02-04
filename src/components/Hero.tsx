"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--accent-cream)] to-[var(--background-cream)]">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        {/* Decorative circles - Responsive sizes */}
        <div className="absolute top-10 left-5 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[var(--accent-orange-light)] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-5 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[var(--accent-cream)] rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-20 pb-12 sm:pt-22 sm:pb-14 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading - Smooth responsive scaling */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-[var(--foreground)] mb-4 sm:mb-5 md:mb-6 animate-fade-in-up opacity-0 leading-tight" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            India&apos;s Future Begins With Its{" "}
            <span className="text-[var(--primary)]">Youth</span>
          </h1>

          {/* Sub-heading - Better scaling */}
          <h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] xl:text-3xl text-[var(--text-muted)] mb-6 sm:mb-7 md:mb-8 animate-fade-in-up opacity-0 stagger-1 leading-relaxed" 
            style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
          >
            Who are ready to sacrifice everything for{" "}
            <span className="text-[var(--primary)] block sm:inline">Mother India / Bharat Mata (राष्ट्रमा)</span>
          </h2>

          {/* Supporting Text */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-7 md:mb-8 animate-fade-in-up opacity-0 stagger-2">
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              India does not need spectators.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              India needs disciplined, committed, courageous and action-oriented youth.
            </p>
          </div>

          {/* Highlight Line */}
          <div className="mb-8 sm:mb-9 md:mb-10 animate-fade-in-up opacity-0 stagger-3">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--foreground)]">
              Not Just Talk.{" "}
              <span className="text-[var(--primary)]">Real Action.</span>
            </p>
            <p className="text-base sm:text-lg text-[var(--text-muted)] mt-2">
              That&apos;s what RSM (राष्ट्रमा) is all about.
            </p>
          </div>

          {/* CTA Buttons - Responsive sizing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up opacity-0 stagger-4">
            <Link 
              href="#get-involved" 
              className="btn-primary text-base sm:text-lg px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4"
            >
              Get Involved
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="#about" 
              className="btn-secondary text-base sm:text-lg px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4"
            >
              Know Our Purpose
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
