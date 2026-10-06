"use client";

const partners = [
  { name: "DiamondClub", detail: "Dorchester Collection", className: "text-2xl tracking-[-0.08em]" },
  { name: "Saks Fifth Avenue", detail: "", className: "font-display text-3xl italic" },
  { name: "DESTINED", detail: "", className: "text-xl tracking-[0.3em]" },
  { name: "IHG", detail: "Hotels & Resorts", className: "text-4xl tracking-[-0.08em]" },
  { name: "Four Seasons", detail: "Preferred Partner", className: "font-display text-2xl" },
];

export default function TrustBar() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-24 lg:px-20 lg:py-28">
      <div className="container-wide mx-auto text-center">
        <p className="mb-5 font-display text-xl font-semibold italic text-nusafiri-gold md:text-2xl">
          Trusted by the world&apos;s leading ultra-luxury brands.
        </p>
        <div className="mx-auto mb-10 h-px w-full max-w-xl bg-nusafiri-border" />
        <h3 className="mb-16 font-display text-4xl font-semibold tracking-[0.12em] text-[#1A1A1A] md:text-6xl">
          Worldwide Partners
        </h3>
        <div className="grid grid-cols-2 items-center gap-10 text-nusafiri-charcoal/85 md:grid-cols-5 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="flex min-h-20 flex-col items-center justify-center">
              <span className={partner.className}>{partner.name}</span>
              {partner.detail && <span className="mt-1 text-[9px] uppercase tracking-[0.12em]">{partner.detail}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
