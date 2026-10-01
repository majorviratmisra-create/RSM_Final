"use client";

const youthProblems = [
  {
    title: "Unemployment",
    description: "Tied to skill gaps that keep young Indians from real opportunity.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Lack of leadership opportunities",
    description: "Young people rarely get the chance to develop and exercise leadership.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Political exclusion",
    description: "Youth are shut out of meaningful political participation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Exam paper leaks",
    description: "Examination integrity is a crisis affecting young Indians.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Old, power-hungry politicians",
    description: "Leadership that hoards power instead of making room for the next generation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="why-youth" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="decorative-line mx-auto mb-4 sm:mb-6"></div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Not a movement of words.{" "}
              <span className="text-[var(--primary)] block sm:inline">Instead, a movement of service.</span>
            </h2>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl mx-auto">
              Rashtrama is a nation-building{" "}
              <strong className="text-[var(--foreground)]">social &amp; political</strong> service platform.
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Why Youth Matters
            </span>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              Rashtrama believes that youth should not merely vote. As India is the biggest
              and youngest major nation of the world, it should be led by able young leaders.
            </p>
            <p className="mt-4 text-base sm:text-lg font-semibold text-[var(--foreground)]">
              Yet millions of Indians struggle with:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {youthProblems.map((problem) => (
              <div
                key={problem.title}
                className="card group hover:border-[var(--primary)] border-2 border-transparent p-5 sm:p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-orange-light)] flex items-center justify-center text-[var(--primary)] mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                  {problem.icon}
                </div>
                <h3
                  className="text-lg font-bold text-[var(--foreground)] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl shining-banner">
              <p className="shining-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
                Hence, the Indian youth must come forward
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
