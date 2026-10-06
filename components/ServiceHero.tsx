import Header from "@/components/Header";
import type { CSSProperties } from "react";

type ServiceHeroProps = {
  title: string;
  image?: string;
  mobileImage?: string;
};

export default function ServiceHero({ title, image, mobileImage }: ServiceHeroProps) {
  const heroStyle: CSSProperties & {
    "--service-page-hero-mobile-image"?: string;
  } = {
    ...(image
      ? {
          backgroundImage: `linear-gradient(rgb(0 0 0 / 28%), rgb(0 0 0 / 28%)), url("${image}")`,
        }
      : {}),
    ...(mobileImage
      ? { "--service-page-hero-mobile-image": `url("${mobileImage}")` }
      : {}),
  };

  return (
    <>
      <Header variant="aboutHero" />
      <section
        className="service-page-hero"
        aria-label={title}
        style={image || mobileImage ? heroStyle : undefined}
      >
        <h1 className="service-page-hero__title">
          <span>{title}</span>
        </h1>
      </section>
    </>
  );
}
