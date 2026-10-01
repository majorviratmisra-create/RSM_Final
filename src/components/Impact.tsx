"use client";

const impactMetrics = [
  { label: "Districts Reached", value: "05" },
  { label: "Events Conducted", value: "08" },
  { label: "Students Mentored", value: "2,500" },
  { label: "Youth Associated & Trained", value: "2,500" },
];

export default function Impact() {
  return (
    <section id="impact" className="section-padding bg-[var(--accent-cream)]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Impact
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mt-3 sm:mt-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What Rashtrama{" "}
              <span className="text-[var(--primary)]">Has Done</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="card text-center p-5 sm:p-6 md:p-8 border-2 border-transparent hover:border-[var(--primary)]"
              >
                <p
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2 sm:mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[var(--foreground)] leading-snug">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
