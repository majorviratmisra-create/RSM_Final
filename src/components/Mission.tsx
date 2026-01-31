"use client";

const missionPillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Youth for National Development",
    description: "We mobilise young Indians for real work — education, community service, civic responsibility, disaster response, socio-political engagement, and grassroots development.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Character Comes First",
    description: "We emphasise discipline, integrity, physical fitness, and mental resilience — because the strongest nation is built by strong individuals with real spine and drive. Not by lazy bones or pessimists.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "From Citizens to Leaders",
    description: "We prepare youth to lead — not through privilege, but through service, competence, responsibility, and action.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Unity Through Action",
    description: "We work beyond divisions of region, religion, and language — uniting India through shared purpose and common effort in service of राष्ट्रमा.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Self-Reliance at the Core",
    description: "We promote action-oriented responsible citizenship.",
  },
];

export default function Mission() {
  return (
    <section id="work" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Our Mission
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mt-3 sm:mt-4 leading-tight" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Youth for{" "}
            <span className="text-[var(--primary)]">National Development</span>
          </h2>
        </div>

        {/* Mission Cards - Better tablet grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {missionPillars.map((pillar, index) => (
            <div
              key={index}
              className="card group hover:border-[var(--primary)] border-2 border-transparent p-5 sm:p-6 md:p-8"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-[var(--accent-orange-light)] flex items-center justify-center text-[var(--primary)] mb-4 sm:mb-5 md:mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>

              {/* Content */}
              <h3 
                className="text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3 sm:mb-4" 
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
    </section>
  );
}
