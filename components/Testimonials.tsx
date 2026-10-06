"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  image?: string;
}

export default function Testimonials({ testimonials, image }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section
      className={`section-padding relative overflow-hidden ${image ? "bg-nusafiri-charcoal" : "bg-nusafiri-warm"}`}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      {image && <div className="absolute inset-0 bg-black/55" />}
      <div className="relative z-10 container-narrow mx-auto text-center">
        {!image && (
          <div className="mb-12 flex items-center justify-center gap-5 md:mb-16">
            <div className="h-px flex-1 bg-nusafiri-border" />
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-nusafiri-gold to-[#f5d58d] font-display text-4xl leading-none text-white">
              &rdquo;
            </div>
            <div className="h-px flex-1 bg-nusafiri-border" />
          </div>
        )}
        <div className="relative min-h-[320px] flex items-center justify-center md:min-h-[280px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <blockquote className={`max-w-3xl text-base leading-relaxed mb-8 md:text-lg lg:text-xl ${image ? "font-body italic text-white" : "font-body text-nusafiri-charcoal"}`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className={`text-sm uppercase tracking-widest font-semibold ${image ? "text-white" : "text-nusafiri-charcoal"}`}>
                  {t.name}
                </p>
                <p className={`text-xs mt-1 ${image ? "text-white/70" : "text-nusafiri-muted"}`}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-nusafiri-border flex items-center justify-center hover:border-nusafiri-gold hover:text-nusafiri-gold transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-nusafiri-gold w-6" : "bg-nusafiri-border hover:bg-nusafiri-muted"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-nusafiri-border flex items-center justify-center hover:border-nusafiri-gold hover:text-nusafiri-gold transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
