"use client";

const values = [
  { 
    text: "Nation First", 
    description: "The nation's interest is supreme. Every action, every decision must serve the greater good of Bharat.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    )
  },
  { 
    text: "Service Before Self", 
    description: "Personal gains are secondary. True fulfillment comes from serving others and the motherland.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  { 
    text: "Discipline Over Disorder", 
    description: "Discipline is the foundation of strength. A disciplined mind and body can conquer any challenge.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    text: "Unity Over Division", 
    description: "Together we are invincible. Unity in purpose transcends all differences of region, religion, and language.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
];

export default function Values() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Our Values
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mt-3 sm:mt-4 leading-tight" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We{" "}
            <span className="text-[var(--primary)]">Stand For</span>
          </h2>
        </div>

        {/* Values Grid - Better tablet breakpoints */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="card group hover:border-[var(--primary)] border-2 border-transparent text-center p-4 sm:p-5 md:p-6"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-[var(--accent-orange-light)] flex items-center justify-center text-[var(--primary)] mb-3 sm:mb-4 md:mb-5 mx-auto group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>

              {/* Content */}
              <h3 
                className="text-base sm:text-lg md:text-xl font-bold text-[var(--foreground)] mb-2 sm:mb-3" 
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {value.text}
              </h3>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Over Words - Highlight Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12 text-center text-white shadow-xl">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span className="h-[2px] w-8 sm:w-12 bg-white/50"></span>
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="h-[2px] w-8 sm:w-12 bg-white/50"></span>
            </div>
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Action Over Words
            </h3>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Because talk is cheap. Results matter. We believe in doing, not just saying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
