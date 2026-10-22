import Header from "@/components/Header";
 

const memoirGalleryImages = [
  { src: "/Frame%2076.webp", alt: "A yacht cruising across clear turquoise water" },
  { src: "/image%2036.webp", alt: "Private pool cabanas overlooking the sea at sunset" },
  { src: "/image%2030.webp", alt: "A tropical villa with poolside loungers" },
  { src: "/Frame%2078.webp", alt: "An aerial view of an island beach and seaplane" },
  { src: "/Frame%2079.webp", alt: "A guest enjoying a drink in an elegant hotel lounge" },
  { src: "/Frame%2077.webp", alt: "A mountain-view resort terrace with sun loungers" },
  { src: "/image%2035.webp", alt: "A white Santorini villa overlooking the sea" },
];

export default function TravelNotes() {
  return (
    <>
      <main>
        <section className="home-hero memoir-export-hero" aria-labelledby="memoir-hero-title">
          <div className="home-hero__background" aria-hidden="true">
            <img src="/Gemini_Generated_Image_epxe35epxe35epxe%201%20(5).webp" alt="" />
          </div>
          <div className="memoir-export-hero__shade" aria-hidden="true" />
          <Header
            variant="homeHero"
            logoSrc="/figma/nusafiri-logo.svg"
            mobileLogoSrc="/nusafiri%20logo%201.png"
          />
          <div className="memoir-export-hero__copy">
            <h1 id="memoir-hero-title">Memoir</h1>
          </div>
        </section>
        <section className="gallery-mosaic-section" aria-labelledby="memoir-gallery-title">
          <header className="memoir-gallery-heading">
            <p>Memoir</p>
            <h2 id="memoir-gallery-title">View Special Moments</h2>
          </header>
          <div className="gallery-mosaic">
            {memoirGalleryImages.map((image, index) => (
              <figure
                className="gallery-mosaic__card"
                key={image.src}
                style={{ "--gallery-index": index } as React.CSSProperties}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span className="gallery-mosaic__sheen" aria-hidden="true" />
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
