"use client";

export default function PresidentMessage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] leading-tight" 
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Not Just Talk.{" "}
              <span className="text-[var(--primary)]">Real Action.</span>
            </h2>
          </div>

          {/* President Card */}
          <div className="bg-[var(--accent-cream)] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8 items-center sm:items-start">
              {/* President Avatar Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                {/* President Info */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <h3 
                    className="text-xl sm:text-2xl font-bold text-[var(--foreground)]" 
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    [CLIENT NAME]
                  </h3>
                  <p className="text-[var(--primary)] font-semibold mt-1 text-sm sm:text-base">
                    Founder & National President, RSM (राष्ट्रमा)
                  </p>
                  <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-1">
                    Former Indian Army Officer
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed italic">
                  <p className="mb-3 sm:mb-4">
                    &quot;RSM (राष्ट्रमा) was not born out of ambition, but out of responsibility.
                  </p>
                  <p className="mb-3 sm:mb-4">
                    Our nation does not suffer from lack of ideas — it suffers from lack of disciplined action.
                  </p>
                  <p>
                    India&apos;s resurgence will come not from speeches or applause, but from young Indians willing to serve, sacrifice, and act for Bharat Mata (राष्ट्रमा).&quot;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
