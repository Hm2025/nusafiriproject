"use client";

import Image from "next/image";
import Link from "next/link";

interface SplitFeatureProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  eyebrow?: string;
  reversed?: boolean;
}

export default function SplitFeature({
  image,
  title,
  description,
  linkText,
  linkHref,
  eyebrow,
  reversed = false,
}: SplitFeatureProps) {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
      <div className={`mx-auto grid max-w-[1640px] grid-cols-1 items-center lg:grid-cols-2 ${reversed ? "lg:grid-flow-dense" : ""}`}>
        {/* Image */}
        <div className={`relative z-0 h-[380px] md:h-[500px] lg:h-[560px] ${reversed ? "lg:col-start-2" : "lg:mt-12"}`}>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className={`relative z-10 flex min-h-[560px] items-center bg-white shadow-[0_18px_45px_rgba(26,26,26,0.08)] ${reversed ? "lg:col-start-1 lg:row-start-1" : "lg:-ml-px"}`}>
          <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-b from-nusafiri-gold to-[#f5d58d]" />
          <div className="w-full px-10 py-16 text-center md:px-16 lg:px-20">
            {eyebrow && <p className="mb-6 font-display text-xl font-semibold italic text-nusafiri-gold md:text-2xl">{eyebrow}</p>}
            <h2 className="mx-auto mb-10 max-w-xl font-display text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-nusafiri-charcoal md:text-lg">
              {description}
            </p>
            <Link href={linkHref} className="inline-flex items-center justify-center bg-gradient-to-r from-[#a96f36] via-nusafiri-gold to-[#f5d58d] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
