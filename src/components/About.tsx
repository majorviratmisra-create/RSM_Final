"use client";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-6 sm:mb-8">
            <div className="decorative-line mx-auto mb-4 sm:mb-6"></div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] leading-tight" 
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Not a Movement of Words.{" "}
              <span className="text-[var(--primary)] block sm:inline">A Movement of Service.</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            <p>
              RSM (राष्ट्रमा) is a nation-building social service platform inspired by the ideals and vision of{" "}
              <strong className="text-[var(--foreground)]">Netaji Subhas Chandra Bose</strong>—who believed that 
              national resurgence is achieved through sacrifice, discipline, strong organisational edifice, and action.
            </p>

            <p>
              The platform is led by a <strong className="text-[var(--foreground)]">former Indian Army Officer</strong> and 
              an extremely committed core team of volunteers from different fields.
            </p>

            <div className="pt-2 sm:pt-4">
              <p className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">
                This is not about slogans.
              </p>
              <p className="text-lg sm:text-xl text-[var(--primary)] font-bold mt-2">
                It is about actual service to the nation (राष्ट्रमा).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
