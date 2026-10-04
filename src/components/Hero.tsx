"use client";

import Link from "next/link";

const movementGroups = [
  "Young leaders",
  "Entrepreneurs",
  "Innovators",
  "Soldiers",
  "Professionals",
  "College students",
  "School students",
  "Youth from rural & urban India",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--accent-cream)] to-[var(--background-cream)]">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-10 left-5 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-[var(--accent-orange-light)] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-5 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[var(--accent-cream)] rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4 sm:mb-5 animate-fade-in-up opacity-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            सब राष्ट्र का!
          </p>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-[var(--foreground)] mb-5 sm:mb-6 md:mb-7 animate-fade-in-up opacity-0 stagger-1 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            India&apos;s Next Generation Will Lead
            <span className="block text-[var(--primary)] mt-1 sm:mt-2">
              the World&apos;s Largest Democracy.
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-5 sm:mb-6 animate-fade-in-up opacity-0 stagger-2">
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              Inspired by the Great{" "}
              <strong className="text-[var(--foreground)]">Netaji Subhas Chandra Bose</strong>,{" "}
              RSM (राष्ट्रमा) is building a political movement of young leaders,
              entrepreneurs, innovators, soldiers, professionals, college and school
              students, and young boys and girls from rural and urban areas who are
              committed to building a <strong className="text-[var(--foreground)]">Strong Bharat</strong>.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-7 animate-fade-in-up opacity-0 stagger-3">
            {movementGroups.map((group) => (
              <span
                key={group}
                className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-white border border-[var(--border-light)] text-[var(--foreground)] font-medium"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="mb-8 sm:mb-9 md:mb-10 animate-fade-in-up opacity-0 stagger-4">
            <p className="text-base sm:text-lg text-[var(--text-muted)] mb-3">
              We are looking for courageous &amp; action-oriented youth.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--foreground)]">
              Not Just Talk.{" "}
              <span className="text-[var(--primary)]">Real Action.</span>
            </p>
            <p className="text-base sm:text-lg text-[var(--text-muted)] mt-2">
              That&apos;s what Rashtrama (RSM) is all about.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up opacity-0 stagger-5">
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
              href="#why-youth"
              className="btn-secondary text-base sm:text-lg px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4"
            >
              Why Youth Must Lead
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
