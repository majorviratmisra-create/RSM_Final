"use client";

import Image from "next/image";

const credentials = [
  "Former Infantry officer, Indian Army",
  "Former Civil Servant (IRTS, UPSC - 2017 batch)",
  "Mentor & Nation Builder (IIT Kanpur)",
];

export default function Founder() {
  return (
    <section id="founder" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Founder &amp;{" "}
              <span className="text-[var(--primary)]">National President</span>
            </h2>
          </div>

          <div className="bg-[var(--accent-cream)] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-[var(--border-light)]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
              <div className="w-full md:w-auto flex-shrink-0">
                <div className="relative w-full max-w-md mx-auto md:mx-0 md:w-80 aspect-[3/2] overflow-hidden rounded-xl shadow-lg border border-[var(--border-light)]">
                  <Image
                    src="/founder-major-virat-mishra.png"
                    alt="Major Virat Misra speaking at Ideas Matter Most Talks"
                    fill
                    sizes="(max-width: 767px) calc(100vw - 4rem), 320px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Major Virat Mishra
                </h3>
                <p className="text-[var(--primary)] font-semibold mt-2 text-sm sm:text-base">
                  Founder &amp; National President, RSM (राष्ट्रमा)
                </p>

                <ol className="mt-6 sm:mt-8 space-y-3 text-left">
                  {credentials.map((item, index) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--primary)] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base text-[var(--foreground)] leading-relaxed pt-0.5">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
