"use client";

export default function Vision() {
  return (
    <section id="vision" className="section-padding bg-[var(--accent-cream)]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <div className="mb-3 sm:mb-4">
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Vision
            </span>
          </div>

          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mb-6 sm:mb-8 leading-tight" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A Blueprint for{" "}
            <span className="text-[var(--primary)]">National Resurrection</span>
          </h2>

          {/* Vision Statement */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-[var(--border-light)]">
            <blockquote 
              className="text-lg sm:text-xl md:text-2xl text-[var(--foreground)] leading-relaxed" 
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
            >
              <p className="mb-3 sm:mb-4">
                Not just to build a strong, self-reliant, and powerful India,
              </p>
              <p className="text-[var(--primary)] font-bold">
                but to build the most powerful force on Earth.
              </p>
            </blockquote>
            
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[var(--border-light)]">
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                This will be achieved by awakening a deep sense of duty, discipline, and national consciousness 
                among India&apos;s youth — the true guardians of <strong className="text-[var(--primary)]">राष्ट्रमा</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
