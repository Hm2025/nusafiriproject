import Header from "@/components/Header";
import { Mail, Phone, MapPin } from "lucide-react";

const mapCenter = { latitude: 6.4373922, longitude: 3.416781 };
const mapZoom = 13;
const tileCount = { columns: 7, rows: 5 };
const tileScale = 2 ** mapZoom;
const centerTile = {
  x: Math.floor(((mapCenter.longitude + 180) / 360) * tileScale),
  y: Math.floor(
    ((1 - Math.asinh(Math.tan((mapCenter.latitude * Math.PI) / 180)) / Math.PI) / 2) * tileScale,
  ),
};
const tileOffset = {
  x: (((mapCenter.longitude + 180) / 360) * tileScale - centerTile.x) * 256,
  y: (((1 - Math.asinh(Math.tan((mapCenter.latitude * Math.PI) / 180)) / Math.PI) / 2) * tileScale - centerTile.y) * 256,
};
const mapTiles = Array.from({ length: tileCount.rows }, (_, row) =>
  Array.from({ length: tileCount.columns }, (_, column) => {
    const x = centerTile.x + column - Math.floor(tileCount.columns / 2);
    const y = centerTile.y + row - Math.floor(tileCount.rows / 2);
    return {
      key: `${x}-${y}`,
      src: `https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/${mapZoom}/${y}/${x}`,
      left: column * 256,
      top: row * 256,
    };
  }),
).flat();

export default function Contact() {
  return (
    <>
      <main>
        <section className="contact-page-hero" aria-labelledby="contact-hero-title">
          <div className="home-hero__background" aria-hidden="true">
            <img src="/Gemini_Generated_Image_epxe35epxe35epxe%201%20(6).png" alt="" />
          </div>
          <div className="contact-page-hero__shade" aria-hidden="true" />
          <Header
            variant="homeHero"
            logoSrc="/figma/nusafiri-logo.svg"
            mobileLogoSrc="/nusafiri%20logo%201.png"
          />
          <div className="contact-page-hero__copy">
            <h1 id="contact-hero-title">Contact us</h1>
          </div>
        </section>
        <section className="section-padding bg-nusafiri-cream">
          <div className="container-wide mx-auto px-6">
            <div className="contact-page-intro-art">
              <img
                src="/Frame%2073%20(1).png"
                alt="Start the Conversation. Tell Us What You're Planning. Whether you're planning a complex journey, need help with a luxury hotel stay, or want to discuss an ongoing travel relationship, our team is here to help. Contact us by phone, email, or WhatsApp, and we'll make sure your inquiry reaches the right Advisor."
              />
              <div className="contact-page-intro-art__mobile-copy">
                <p>Start the Conversation</p>
                <h2>Tell Us What You&apos;re Planning</h2>
                <p>
                  Whether you are planning a complex journey, need help with a luxury hotel stay, or want to discuss an ongoing travel relationship, our team is here to help. Contact us by phone, email or WhatsApp, and we&apos;ll make sure your inquiry reaches the right Advisor.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-nusafiri-border flex items-center justify-center flex-shrink-0"><Mail className="w-4 h-4 text-nusafiri-gold" /></div>
                    <div><p className="text-xs uppercase tracking-widest text-nusafiri-muted mb-1">Email</p><a href="mailto:info@nusafiri.com" className="text-nusafiri-charcoal hover:text-nusafiri-gold transition-colors">info@nusafiri.com</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-nusafiri-border flex items-center justify-center flex-shrink-0"><Phone className="w-4 h-4 text-nusafiri-gold" /></div>
                    <div><p className="text-xs uppercase tracking-widest text-nusafiri-muted mb-1">Phone</p><a href="tel:+180068723474" className="text-nusafiri-charcoal hover:text-nusafiri-gold transition-colors">+1 (800) NUSAFIRI</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-nusafiri-border flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-nusafiri-gold" /></div>
                    <div><p className="text-xs uppercase tracking-widest text-nusafiri-muted mb-1">Office</p><a href="https://www.google.com/maps/search/?api=1&query=12B%20Victoria%20Island%20Road%2C%20Lagos%2C%20Nigeria" target="_blank" rel="noreferrer" className="text-nusafiri-charcoal hover:text-nusafiri-gold transition-colors">12B Victoria Island Road,<br />Lagos, Nigeria</a></div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-10 border border-nusafiri-border">
                <h3 className="font-display text-xl text-nusafiri-charcoal mb-6">Send a Message</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" placeholder="First Name" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors" />
                    <input type="text" placeholder="Last Name" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors" />
                  <input type="text" placeholder="Subject" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors" />
                  <textarea rows={5} placeholder="Your message" className="w-full border border-nusafiri-border px-4 py-3 text-sm focus:outline-none focus:border-nusafiri-gold transition-colors resize-none" />
                  <button type="submit" className="w-full bg-nusafiri-charcoal text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-nusafiri-gold hover:text-nusafiri-charcoal transition-colors duration-300">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-map-section" aria-label="Map to 12B Victoria Island Road, Lagos, Nigeria">
          <div className="contact-map__frame" role="img" aria-label="Street map centered near 12B Victoria Island Road, Lagos, Nigeria">
            <div className="contact-map__tiles" aria-hidden="true">
              {mapTiles.map((tile) => (
                <img
                  key={tile.key}
                  className="contact-map__tile"
                  src={tile.src}
                  alt=""
                  loading="lazy"
                  style={{ left: tile.left, top: tile.top }}
                />
              ))}
              <span
                className="contact-map__marker"
                style={{
                  left: `${((Math.floor(tileCount.columns / 2) * 256 + tileOffset.x) / (tileCount.columns * 256)) * 100}%`,
                  top: `${((Math.floor(tileCount.rows / 2) * 256 + tileOffset.y) / (tileCount.rows * 256)) * 100}%`,
                }}
              />
            </div>
            <span className="contact-map__attribution">Map tiles © Esri, HERE, Garmin, FAO, NOAA, USGS, © OpenStreetMap contributors</span>
            <a
              className="contact-map__link"
              href="https://www.google.com/maps/search/?api=1&query=12B%20Victoria%20Island%20Road%2C%20Lagos%2C%20Nigeria"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
