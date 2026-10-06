"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  image: string;
  video?: string;
  slides?: Array<{ image: string; video?: string; headline?: string }>;
  headline: string;
  subheadline: string;
  description?: string;
  height?: string;
  headlineFont?: "birthstone";
}

export default function Hero({ image, video, slides, headline, subheadline, description, height = "h-screen", headlineFont }: HeroProps) {
  const slideItems = slides ?? [{ image, video }];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slideItems.length < 2) return;
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slideItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideItems.length]);

  const activeSlide = slideItems[currentSlide];

  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <div
        className="absolute inset-0 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={activeSlide.video ? undefined : { backgroundImage: `url("${activeSlide.image}")` }}
      >
        {activeSlide.video ? (
          <video
            className="h-full w-full object-cover"
            src={activeSlide.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        ) : (
          <div className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-[190px] text-center sm:pt-[210px] lg:pt-[250px]">
        <h1 className="max-w-6xl whitespace-pre-line text-6xl leading-[0.9] text-white sm:text-7xl md:text-8xl font-body font-normal">
          {activeSlide.headline ?? headline}
        </h1>
        <div className="mb-5 flex w-full max-w-7xl items-center gap-4 md:gap-6">
          <div className="h-px flex-1 bg-white/70" />
          <p className="text-sm md:text-base tracking-[0.2em] text-white/90 font-light whitespace-nowrap">
            {subheadline}
          </p>
          <div className="h-px flex-1 bg-white/70" />
        </div>
        {description && (
          <p className="max-w-3xl text-sm md:text-base leading-relaxed text-white/80 font-light">
            {description}
          </p>
        )}
      </div>
      {slideItems.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          <button
            type="button"
            onClick={() => setCurrentSlide((current) => (current - 1 + slideItems.length) % slideItems.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-lg text-white transition-colors hover:border-white hover:bg-white/10"
            aria-label="Previous hero slide"
          >
            &#8249;
          </button>
          <div className="flex items-center gap-2" aria-label="Hero slides">
            {slideItems.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/60 hover:bg-white"}`}
                aria-label={`Go to hero slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setCurrentSlide((current) => (current + 1) % slideItems.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-lg text-white transition-colors hover:border-white hover:bg-white/10"
            aria-label="Next hero slide"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
