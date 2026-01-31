"use client";

export default function WhyWeExist() {
  return (
    <section className="section-padding bg-[var(--accent-cream)]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mb-6 sm:mb-8 leading-tight" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why We <span className="text-[var(--primary)]">Exist</span>
          </h2>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            <p>
              Netaji taught us that <strong className="text-[var(--foreground)]">freedom and progress are earned, not granted.</strong>
            </p>
            <p>
              Today, nation-building demands the same resolve and action.
            </p>
          </div>

          {/* Highlight Box */}
          <div className="mt-6 sm:mt-8 md:mt-10 p-5 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg border-l-4 border-[var(--primary)]">
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--foreground)] font-semibold leading-relaxed">
              We exist to ensure India&apos;s youth do not wait for change —
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-[var(--primary)]">they become the desired Change Agents of राष्ट्रमा.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
