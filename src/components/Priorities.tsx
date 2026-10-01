"use client";

const priorities = [
  {
    title: "Youth-Based Politics",
    points: ["Young school & college students", "Matured youth"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Employment Revolution",
    points: [],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Startup Bharat",
    points: [],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Education Enablement",
    badge: "AI",
    points: [],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "National Security Focus",
    points: [],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Clean Governance",
    points: ["Transparency", "Accountability"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Rural & Urban Transformation",
    points: ["Rural India", "Urban India"],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const nclpActivities = [
  "Leadership training",
  "Public speaking",
  "Policy making",
  "Debate",
  "Community service",
  "Electoral literacy",
  "AI & ML wing",
];

export default function Priorities() {
  return (
    <section id="priorities" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Priorities
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mt-3 sm:mt-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What Rashtrama{" "}
              <span className="text-[var(--primary)]">Will Focus On</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12 md:mb-14">
            {priorities.map((priority) => (
              <div
                key={priority.title}
                className="card group hover:border-[var(--primary)] border-2 border-transparent p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-orange-light)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    {priority.icon}
                  </div>
                  {priority.badge && (
                    <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full bg-[var(--primary)] text-white">
                      {priority.badge}
                    </span>
                  )}
                </div>
                <h3
                  className={`text-lg font-bold text-[var(--foreground)] ${priority.points.length ? "mb-3" : ""}`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {priority.title}
                </h3>
                {priority.points.length > 0 && (
                  <ul className="space-y-1.5">
                    {priority.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed flex gap-2"
                      >
                        <span className="text-[var(--primary)] mt-0.5">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div
            id="nclp"
            className="bg-[var(--accent-cream)] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 border border-[var(--border-light)]"
          >
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
                Student &amp; Campus Wing
              </span>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--foreground)] mt-3 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Netaji Subhash Leadership Wing{" "}
                <span className="text-[var(--primary)]">(NCLP)</span>
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {nclpActivities.map((activity) => (
                <span
                  key={activity}
                  className="px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-full bg-white border border-[var(--border-light)] text-[var(--foreground)] font-medium"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
