import Header from "@/components/Header";
import Hero from "@/components/Hero";

const galleryImages = [
  { src: "/Frame%2076.png", alt: "A yacht cruising across clear turquoise water" },
  { src: "/image%2036.png", alt: "Private pool cabanas at sunset" },
  { src: "/image%2030.png", alt: "A tropical villa and poolside loungers" },
  { src: "/Frame%2078.png", alt: "Aerial view of an island beach and seaplane" },
  { src: "/Frame%2079.png", alt: "A guest enjoying a drink in an elegant hotel lounge" },
  { src: "/Frame%2077.png", alt: "Sun loungers beside a resort swimming pool" },
  { src: "/image%2035.png", alt: "A white Santorini villa overlooking the sea" },
];

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <Hero image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80" headline="Gallery" subheadline="A Window Into Extraordinary Journeys" />
        <section className="gallery-mosaic-section" aria-label="Travel gallery">
          <div className="gallery-mosaic">
            {galleryImages.map((image, index) => (
              <article className="gallery-mosaic__card" key={image.src} style={{ "--gallery-index": index } as React.CSSProperties}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span className="gallery-mosaic__sheen" aria-hidden="true" />
              </article>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
