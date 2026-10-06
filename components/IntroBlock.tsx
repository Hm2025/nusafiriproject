"use client";

import Image from "next/image";

interface IntroBlockProps {
  paragraphs: string[];
  title?: string;
}

export default function IntroBlock({ paragraphs, title }: IntroBlockProps) {
  return (
    <section className="bg-nusafiri-cream px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
      <div className="container-wide mx-auto">
        {title && (
          <div className="mb-16 flex items-center gap-6 md:mb-20">
            <h2 className="shrink-0 font-display text-3xl font-semibold text-nusafiri-charcoal md:text-5xl">{title}</h2>
            <div className="h-px flex-1 bg-nusafiri-gold/70" />
          </div>
        )}
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-28">
          <div className="flex justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center p-6 md:h-80 md:w-80 md:p-8">
              <Image
                src="/nusafiri body.png"
                alt="Nusafiri"
                width={512}
                height={512}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="space-y-7 text-left">
            {paragraphs.map((text, i) => (
              <p key={i} className="max-w-2xl text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
