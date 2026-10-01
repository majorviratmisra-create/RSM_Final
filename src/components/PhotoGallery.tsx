"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imageFiles = [
  "Thankyou Sudeep, Thankyou students and Thankyou Chanakya Fellows at Chanakya University, Bangal.webp",
  "#labourday मेहनत को सम्मान, मज़दूर भाइयों को सलाम। ये वो गुमनाम हाथ हैं, जो इमारतें नहीं, सभ्यता (1).webp",
  "गौसेवा-मातृसेवा (1).webp",
  "#labourday मेहनत को सम्मान, मज़दूर भाइयों को सलाम। ये वो गुमनाम हाथ हैं, जो इमारतें नहीं, सभ्यता.webp",
  "Building India at the grassroots through the young and energetic. Thank you IIT Kanpur for this.webp",
  "WhatsApp Image 2026-09-18 at 13.41.17.jpeg",
  "लखनऊ के विकासनगर में एक झुग्गी बस्ती में लगी भीषण आग ने कई परिवारों को बेघर कर दिया। जिनके प.webp",
  "Building India at the grassroots through the young and energetic. Thank you IIT Kanpur for this (1).webp",
  "WhatsApp Image 2026-09-18 at 13.41.15.jpeg",
];

const galleryImages = imageFiles.map((fileName, index) => ({
  alt: `Rashtrama community initiative ${index + 1}`,
  src: `/${encodeURIComponent(fileName)}`,
}));

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalImages = galleryImages.length;

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + totalImages) % totalImages);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % totalImages);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalImages);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [isPaused, totalImages]);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Our Gallery
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[var(--foreground)] mt-3 sm:mt-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Rashtrama in <span className="text-[var(--primary)]">Pictures</span>
            </h2>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            aria-roledescription="carousel"
            aria-label="Rashtrama photo gallery"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] min-h-[280px]">
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={index !== activeIndex}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1280px) calc(100vw - 4rem), 1152px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              <p className="absolute bottom-5 left-5 sm:bottom-7 sm:left-8 text-white text-sm sm:text-base font-semibold drop-shadow-md">
                {activeIndex + 1} / {totalImages}
              </p>

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-[var(--foreground)] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg transition-colors flex items-center justify-center"
                aria-label="Show previous photo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-[var(--foreground)] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg transition-colors flex items-center justify-center"
                aria-label="Show next photo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m9 6 6 6-6 6" />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Show photo ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
