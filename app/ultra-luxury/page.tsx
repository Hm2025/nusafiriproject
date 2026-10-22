import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

import { curatedServices } from "./services";

export default function UltraLuxury() {
  return (
    <>
      <Header
        variant="homeHero"
        logoSrc="/figma/nusafiri-logo.svg"
        mobileLogoSrc="/nusafiri%20logo%201.png"
        regularHeroNav
      />
      <main>
        <section className="experiences-hero" aria-labelledby="experiences-hero-title">
          <Image
            className="experiences-hero__background"
            src="/Section.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="experiences-hero__shade" aria-hidden="true" />
          <div className="experiences-hero__copy">
            <h1 id="experiences-hero-title">
              <span>Some experiences cannot be</span>{" "}
              <span>selected from a menu.</span>
            </h1>
            <p>They need to be imagined, curated and thoughtfully brought to life.</p>
          </div>
        </section>

        <section className="experiences-services" aria-label="Curated services">
          <div className="experiences-services__layout">
            <aside className="experiences-services__sidebar">
              <div className="experiences-services__index">
                <h2>Curated Services</h2>
                <nav aria-label="Curated services">
                  <ol>
                    {curatedServices.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/ultra-luxury/${service.id}`}
                          className={service.number === "01" ? "is-active" : undefined}
                          aria-current={service.number === "01" ? "page" : undefined}
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
                <div className="experiences-services__inquiry">
                  <p className="experiences-services__script">Tailored for your lifestyle</p>
                  <p>Require a custom itinerary or personal assistant arrangement?</p>
                  <button type="button" disabled>Inquire directly</button>
                </div>
              </div>
            </aside>

            <div className="experiences-services__cards">
              {curatedServices.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="experiences-service-card"
                  aria-labelledby={`${service.id}-title`}
                >
                  <div className="experiences-service-card__image">
                    <Image src={service.image} alt={service.alt} fill sizes="(max-width: 900px) 100vw, 62vw" />
                    <span className="experiences-service-card__number">{service.number}</span>
                    <div className="experiences-service-card__image-title">
                      <p>Service Offering</p>
                      <h2 id={`${service.id}-title`}>{service.title}</h2>
                    </div>
                  </div>
                  <div className="experiences-service-card__body">
                    <blockquote>{service.quote}</blockquote>
                    <div className="experiences-service-card__description">
                      {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <h3>{service.listTitle}</h3>
                    <ul className="experiences-service-card__features">
                      {service.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <div className="experiences-service-card__footer">
                      <p>{`“${service.signoff}”`}</p>
                      <button type="button" disabled>Request Service</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experiences-closing" aria-labelledby="experiences-closing-title">
          <div className="experiences-closing__content">
            <h2 id="experiences-closing-title">Feeling is part of the itinerary.</h2>
            <p>
              Exceptional service lives in the details. The welcome that feels personal, the transfer
              that arrives on time, the room prepared with your preferences in mind.
            </p>
            <button className="experiences-closing__button" type="button" disabled>
              Begin Your Journey
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
