"use client";

const visionPillars = [
  {
    number: "01",
    title: "National Unity",
    description: "Reject politics of religion and caste.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strong National Defence",
    description: "Strengthen our Police, CAPF, and Defence Forces.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Scientific Advancement",
    description: "Work and act towards making India a scientific & R&D superpower.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Economic Strength",
    description: "Make India strong economically — No. 1 in the world — and each Indian rich and stable. Also work for social security for each individual.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Youth-led Politics",
    description: "The most important pillar of RSM (राष्ट्रमा) vision. The youth to lead and serve. The elders to guide and nudge.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
];

export default function Vision() {
  return (
    <section id="vision" className="section-padding bg-[var(--accent-cream)]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Vision
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mt-3 sm:mt-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Netaji Bose &amp; Rashtrama&apos;s{" "}
              <span className="text-[var(--primary)]">Vision for India</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {visionPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="card group border-2 border-transparent hover:border-[var(--primary)] p-5 sm:p-6 md:p-8"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-[var(--accent-orange-light)] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-sm font-bold text-[var(--text-light)]">{pillar.number}</span>
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
