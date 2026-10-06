import Image from "next/image";
import Link from "next/link";
import { CircleCheck } from "lucide-react";

import { curatedServices } from "@/app/ultra-luxury/services";

export type CuratedService = {
  id: string;
  number: string;
  title: string;
  image: string;
  alt: string;
  quote: string;
  paragraphs: readonly string[];
  listTitle: string;
  features: readonly string[];
  signoff: string;
};

type CuratedServiceDetailProps = {
  activeService: CuratedService;
  headingOverride?: string;
  imageOverride?: string;
  mobileImageOverride?: string;
  imageAltOverride?: string;
};

export default function CuratedServiceDetail({
  activeService,
  headingOverride,
  imageOverride,
  mobileImageOverride,
  imageAltOverride,
}: CuratedServiceDetailProps) {
  return (
    <section className="service-detail" aria-label={activeService.title}>
      <div className="service-detail__layout">
        <div className="service-detail__content">
          <header className="service-detail__header">
            <h2>{headingOverride ?? activeService.title}</h2>
            <blockquote>&ldquo;{activeService.quote}&rdquo;</blockquote>
            <div className="service-detail__body-copy">
              {activeService.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </header>

          <figure className="service-detail__image-band">
            <picture className="service-detail__picture">
              {mobileImageOverride && (
                <source
                  media="(max-width: 640px)"
                  srcSet={encodeURI(mobileImageOverride)}
                />
              )}
            <Image
              className="service-detail__image"
              src={imageOverride ?? activeService.image}
              alt={imageAltOverride ?? activeService.alt}
              fill
              sizes="(max-width: 900px) 100vw, 72vw"
            />
            </picture>
            <figcaption className="service-detail__image-quote">
              Feeling is part of the itinerary.
            </figcaption>
          </figure>

          <section
            className={`service-detail__offerings${activeService.id === "bespoke-experiences" ? " service-detail__offerings--bespoke" : activeService.id === "destination-celebrations" ? " service-detail__offerings--destination" : ""}`}
            aria-labelledby="service-detail-offerings-title"
          >
            <Image
              className="service-detail__pattern"
              src="/Frame 54.png"
              alt=""
              fill
              sizes="(max-width: 960px) 297px, 24.5vw"
              aria-hidden="true"
            />
            <div className="service-detail__offerings-inner">
              <div className="service-detail__features-panel">
                {(activeService.id === "bespoke-experiences" || activeService.id === "destination-celebrations") && (
                  <p className="service-detail__features-intro">
                    {activeService.id === "destination-celebrations"
                      ? "Our destination celebrations include:"
                      : "Our bespoke experiences include:"}
                  </p>
                )}
                {(activeService.id === "bespoke-experiences" || activeService.id === "destination-celebrations") && (
                  <div className="service-detail__features-kicker">
                    <CircleCheck
                      className="service-detail__features-check"
                      aria-hidden="true"
                    />
                    <h2 id="service-detail-offerings-title">{activeService.listTitle}</h2>
                  </div>
                )}
                {activeService.id !== "bespoke-experiences" && activeService.id !== "destination-celebrations" && (
                  <h2 id="service-detail-offerings-title">{activeService.listTitle}</h2>
                )}
                <ul className="service-detail__features">
                  {activeService.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="service-detail__closing">{activeService.signoff}</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="service-detail__sidebar" aria-label="Curated services">
          <div className="service-detail__index">
            <h2>Curated Services</h2>
            <nav aria-label="Curated services">
              <ol>
                {curatedServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/ultra-luxury/${service.id}`}
                      className={service.id === activeService.id ? "is-active" : undefined}
                      aria-current={service.id === activeService.id ? "page" : undefined}
                    >
                      <span>{service.number}</span>
                      {service.id === "hospitality-guest-management"
                        ? "Hospitality & Guest Mgmt"
                        : service.title.replace(" services", "")}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="service-detail__inquiry">
              <p className="service-detail__inquiry-script">Tailored for your lifestyle</p>
              <p>Require a custom itinerary or personal assistant arrangement?</p>
              <Link href="/contact">Inquire directly</Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
