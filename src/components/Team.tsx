"use client";

export default function Team() {
  return (
    <section className="section-padding bg-[var(--accent-cream)]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mb-6 sm:mb-8 leading-tight" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our <span className="text-[var(--primary)]">Team</span>
          </h2>

          {/* Team Description */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-[var(--border-light)]">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex -space-x-3 sm:-space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-3 sm:border-4 border-white bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center shadow-lg"
                    style={{ zIndex: 5 - i }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)] leading-relaxed font-medium">
              A dedicated and disciplined team of volunteers from diverse fields, united by one mission —{" "}
              <span className="text-[var(--primary)] font-bold">service to राष्ट्रमा.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
