const assetPathPrefix = "https://www.figma.com/api/mcp/asset/50a7106a-b128-4f5a-87db-2c7214e17c6d";
const imgImage3 = `${assetPathPrefix}/d56a9.png`;
const imgImage2 = `${assetPathPrefix}/08353.png`;
const imgPlumeriaFrangipaniTempleTreeFlowerCloseUpSingleWhiteyellowPlumeriaFlowersBouquetIsolatedWhiteBackground1 = `${assetPathPrefix}/d169a.png`;
const imgImage15 = "/image%2015.webp";
const imgImage22 = "/image%2022.webp";
const imgImage26 = "/image%2026.webp";
const imgGeminiGeneratedImage8Ly3R98Ly3R98Ly3Photoroom1 = "/Gemini_Generated_Image_8ly3r98ly3r98ly3-Photoroom%201.webp";
const imgLuxuryVillaWithPoolGarden1 = "/luxury-villa-with-pool-garden%201.webp";
const imgImage19 = "/image%2019.webp";
const imgImage20 = "/image%2019%20(1).webp";
const imgImage21 = "/image%2019%20(2).webp";
const imgImage23 = "/image%2019%20(4).webp";
const imgImage24 = "/image%2019%20(3).webp";
const imgFrame49 = "/figma/nusafiri-logo.svg";

import Header from "@/components/Header";
import Link from "next/link";

const experienceItems = [
  { title: "VIP\nConcierge", text: "Make every guest feel expected, welcomed and valued.", href: "/ultra-luxury/vip-concierge/" },
  { title: "Travel\nConcierge", text: "Your time is valuable. Your needs deserve attention.", href: "/ultra-luxury/travel-concierge/" },
  { title: "Guest\nManagement", text: "Travel planning, with someone thoughtful in your corner.", href: "/ultra-luxury/hospitality-guest-management/" },
  { title: "Bespoke\nExperiences", text: "Designed around your interests, your pace and your story.", href: "/ultra-luxury/bespoke-experiences/" },
  { title: "Destination\nCelebrations", text: "Give your special moments a setting worth remembering.", href: "/ultra-luxury/destination-celebrations/" },
];

const experienceImages = [imgImage19, imgImage20, imgImage21, imgImage23, imgImage24];
const aboutInteriorImage = "/images/abt1.png";
const aboutDestinationImage = "/images/abt2.png";
const aboutFlowerImage = "/images/abt3.webp";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f5f1eb] text-[#473921]">
      <div className="relative flex w-full flex-col items-start overflow-x-hidden" data-node-id="2022:337">
        <section className="home-hero relative h-[1055px] w-full overflow-hidden" data-node-id="2016:4">
          <div className="home-hero__background" aria-hidden="true" data-node-id="2016:6">
            <picture>
              <source media="(max-width: 760px)" srcSet="/Overlay%20(4).webp" />
              <img src="/Overlay%20(3).webp" alt="" />
            </picture>
          </div>

          <Header
            variant="homeHero"
            logoSrc="/figma/nusafiri-logo.svg"
            mobileLogoSrc="/nusafiri%20logo%201%20(1).png"
          />

          <div className="home-hero__copy" data-node-id="2016:9">
            <div className="home-hero__copy-inner">
              <h1 className="home-hero__title" data-node-id="2016:10">
                We design experiences
              </h1>
              <p className="home-hero__subtitle" data-node-id="2016:12">
                <span>that take you away, so you can <br className="home-hero__mobile-break" />find your way</span>
                <span>back to yourself.</span>
              </p>
            </div>
          </div>
        </section>

        <section className="about-export" aria-labelledby="about-export-title">
          <div className="about-export__canvas">
            <div className="about-export__copy">
              <p className="about-export__eyebrow">ABOUT US</p>
              <h2 id="about-export-title" className="about-export__title">
                <span>Hospitality, Thoughtfully<br className="about-export__mobile-break" /> Personalized.</span>
                <span>Experiences,<br className="about-export__mobile-break" /> Beautifully Orchestrated.</span>
              </h2>
              <div className="about-export__body">
                <p>
                  NuSafiri is an Experience Design and Hospitality Company creating seamless,
                  personalised experiences for individuals, families, executives, groups and
                  organisations.
                </p>
                <p>
                  We bring together hospitality, concierge services, travel management and
                  destination expertise to ensure every guest feels considered, every detail feels
                  intentional and every moment feels effortless.
                </p>
                <p>
                  From the first enquiry to the final farewell, we manage the experience around you,
                  anticipating needs, coordinating details and creating meaningful moments along the way.
                </p>
              </div>
            </div>

            <div className="about-export__art" aria-label="Hospitality, destination and floral imagery">
              <img className="about-export__interior" src="/image%203.webp" alt="Elegant hotel interior" loading="lazy" />
              <picture>
                <source media="(max-width: 760px)" srcSet="/image%202%20(1).webp" />
                <img className="about-export__destination" src="/image%202.webp" alt="Whitewashed Mediterranean village" loading="lazy" />
              </picture>
              <picture>
                <source
                  media="(max-width: 760px)"
                  srcSet="/plumeria-frangipani-temple-tree-flower-close-up-single-whiteyellow-plumeria-flowers-bouquet-isolated-white-background%201%20(1).png"
                />
                <img
                  className="about-export__flowers"
                  src="/plumeria-frangipani-temple-tree-flower-close-up-single-whiteyellow-plumeria-flowers-bouquet-isolated-white-background%201.webp"
                  alt="White and yellow plumeria flowers"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="itinerary-hero" data-node-id="2016:83" aria-label="NuSafiri travel experiences">
          <div className="itinerary-hero__canvas">
            <img className="itinerary-hero__background" alt="" src={imgImage15} loading="lazy" />
            <div className="itinerary-hero__shade" aria-hidden="true" />
            <img className="itinerary-hero__logo" alt="NuSafiri" src={imgFrame49} />
            <img
              className="itinerary-hero__photo"
              alt="A group of NuSafiri guests enjoying a trip to Santorini"
              src={imgImage22}
              loading="lazy"
            />
            <h2 className="itinerary-hero__headline">Feeling is part of the itinerary.</h2>
          </div>
        </section>

        <section className="service-story" aria-labelledby="service-story-title">
          <div className="service-story__canvas">
            <picture>
              <source media="(max-width: 760px)" srcSet="/image%2026%20(1).webp" />
              <img className="service-story__coast" src={imgImage26} alt="" aria-hidden="true" loading="lazy" />
            </picture>
            <div className="service-story__panel" aria-hidden="true" />
            <div className="service-story__pattern-frame" aria-hidden="true">
              <img className="service-story__pattern" src="/Logo%26Patterns-03%206%20(Traced).png" alt="" loading="lazy" />
            </div>
            <div className="service-story__copy">
              <h2 id="service-story-title">
                At NuSafiri, we believe exceptional<br className="service-story__desktop-break" /> service is found in the details.
              </h2>
              <p>
                The welcome that feels personal, the transfer that arrives on time, the room prepared with your preferences in mind, the recommendation that feels like it was made just for you. The small problem resolved before it becomes your concern.
              </p>
            </div>
            <p className="service-story__signature">Your story comes first.</p>
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet="/Gemini_Generated_Image_8ly3r98ly3r98ly3-Photoroom%201%20(1).webp"
              />
              <img
                className="service-story__luggage"
                src={imgGeminiGeneratedImage8Ly3R98Ly3R98Ly3Photoroom1}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            </picture>
          </div>
        </section>

        <section className="experiences-export" aria-labelledby="experiences-export-title">
          <img className="experiences-export__backdrop" src={imgLuxuryVillaWithPoolGarden1} alt="" aria-hidden="true" loading="lazy" />
          <div className="experiences-export__panel">
            <h2 id="experiences-export-title" className="experiences-export__heading">
              <span>OUR</span>
              <span>EXPERIENCES</span>
            </h2>
            <div className="experiences-export__cards">
              {experienceItems.map((item, index) => (
                <Link key={item.title} href={item.href} className="experience-card">
                  <img className="experience-card__image" src={experienceImages[index]} alt="" loading="lazy" />
                  <div className="experience-card__caption">
                    <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                    <p>{item.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
