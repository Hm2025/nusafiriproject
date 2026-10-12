"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { curatedServices } from "@/app/ultra-luxury/services";

type NavItem = {
  label: string;
  href: string;
};

const blockedMenuUrls = new Set([
  "/plan-my-trip/",
]);

const navItems: NavItem[] = [
  { label: "ABOUT", href: "/about/" },
  { label: "EXPERIENCE", href: "/ultra-luxury/" },
  { label: "MEMOIR", href: "/travel-notes/" },
  { label: "BOOKINGS", href: "/plan-my-trip/" },
  { label: "CONTACT US", href: "/contact/" },
];

const aboutHeroNavItems: NavItem[] = [
  { label: "ABOUT", href: "/about/" },
  { label: "EXPERIENCES", href: "/ultra-luxury/" },
  { label: "PLAN MY TRIP", href: "/plan-my-trip/" },
  { label: "MEMOIR", href: "/travel-notes/" },
  { label: "CONTACT US", href: "/contact/" },
];

const homeHeroNavItems: NavItem[] = [
  { label: "ABOUT", href: "/about/" },
  { label: "EXPERIENCES", href: "/ultra-luxury/" },
  { label: "PLAN MY TRIP", href: "/plan-my-trip/" },
  { label: "MEMOIR", href: "/travel-notes/" },
  { label: "CONTACT US", href: "/contact/" },
];

type HeaderProps = {
  variant?: "default" | "aboutHero" | "homeHero";
  logoSrc?: string;
  mobileLogoSrc?: string;
  regularHeroNav?: boolean;
};

export default function Header({ variant = "default", logoSrc = "/figma/nusafiri-logo.svg", mobileLogoSrc, regularHeroNav = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experiencesMenuOpen, setExperiencesMenuOpen] = useState(false);
  const [mobileExperiencesOpen, setMobileExperiencesOpen] = useState(false);
  const pathname = usePathname();
  const isHero = variant !== "default";
  const currentNavItems = variant === "aboutHero"
    ? aboutHeroNavItems
    : variant === "homeHero"
      ? homeHeroNavItems
      : navItems;

  const renderDesktopNavItem = (item: NavItem) => {
    const isExperiencesItem = item.href === "/ultra-luxury/";
    const isCurrent = pathname === item.href.replace(/\/$/, "");

    return (
      <li
        key={item.label}
        className={`relative${isExperiencesItem ? " experiences-nav__item" : ""}`}
        onMouseEnter={() => {
          if (isExperiencesItem) setExperiencesMenuOpen(true);
        }}
        onMouseLeave={() => {
          if (isExperiencesItem) setExperiencesMenuOpen(false);
        }}
        onFocus={() => {
          if (isExperiencesItem) setExperiencesMenuOpen(true);
        }}
        onBlur={(event) => {
          if (isExperiencesItem && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setExperiencesMenuOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (isExperiencesItem && event.key === "Escape") {
            setExperiencesMenuOpen(false);
            event.currentTarget.querySelector<HTMLButtonElement>(".experiences-nav__toggle")?.focus();
          }
        }}
      >
        {blockedMenuUrls.has(item.href) ? (
          <span
            aria-disabled="true"
            className="site-nav-disabled block max-w-[140px] cursor-not-allowed text-center text-[10px] font-medium uppercase leading-tight tracking-[0.2em] text-white/40 sm:text-[11px]"
          >
            {item.label}
          </span>
        ) : (
          <div className={isExperiencesItem ? "experiences-nav__trigger" : undefined}>
            <Link
              href={item.href}
              aria-current={isCurrent ? "page" : undefined}
              className={!isHero ? `block max-w-[140px] text-center text-[10px] font-medium uppercase leading-tight tracking-[0.2em] transition-colors duration-300 hover:text-white sm:text-[11px] ${isCurrent ? "text-white" : "text-white/75"}` : undefined}
            >
              {item.label}
            </Link>
            {isExperiencesItem && (
              <button
                type="button"
                className="experiences-nav__toggle"
                aria-label={`${experiencesMenuOpen ? "Close" : "Open"} Experiences menu`}
                aria-expanded={experiencesMenuOpen}
                aria-controls="experiences-mega-menu"
                onClick={() => setExperiencesMenuOpen((open) => !open)}
              >
                <ChevronDown aria-hidden="true" size={14} />
              </button>
            )}
          </div>
        )}
        {isExperiencesItem && experiencesMenuOpen && (
          <div id="experiences-mega-menu" className="experiences-mega-menu">
            <div className="experiences-mega-menu__feature">
              <Image src="/Section.png" alt="" fill sizes="(max-width: 1200px) 35vw, 360px" />
              <div className="experiences-mega-menu__feature-shade" aria-hidden="true" />
              <div className="experiences-mega-menu__feature-copy">
                <p>NU SAFIRI EXPERIENCES</p>
                <h2>Journeys shaped around you.</h2>
                <Link href="/ultra-luxury/" onClick={() => setExperiencesMenuOpen(false)}>
                  Explore all experiences <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <div className="experiences-mega-menu__services">
              {curatedServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/ultra-luxury/${service.id}/`}
                  className="experiences-mega-menu__service"
                  onClick={() => setExperiencesMenuOpen(false)}
                >
                  <span className="experiences-mega-menu__image">
                    <Image src={service.image} alt="" fill sizes="(max-width: 1200px) 25vw, 300px" />
                  </span>
                  <span className="experiences-mega-menu__eyebrow">SERVICE {service.number}</span>
                  <span className="experiences-mega-menu__title">{service.title}</span>
                  <span className="experiences-mega-menu__description">{service.paragraphs[0]}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </li>
    );
  };

  return (
    <header
      className={isHero ? `about-hero-header${regularHeroNav ? " about-hero-header--regular-nav" : ""}` : "absolute left-0 right-0 top-0 z-50 text-white"}
    >
      <div className={isHero ? "about-hero-header__inner" : "flex flex-col items-center"}>
        <div className={isHero ? "about-hero-header__stack" : "flex h-[190px] w-full items-start justify-center sm:h-[230px] lg:h-[304px]"}>
          <Link
            href="/"
            className={isHero ? "about-hero-header__logo" : "flex h-full w-[150px] items-start justify-center sm:w-[180px] lg:w-[234px]"}
          >
            <picture className={isHero ? "about-hero-header__picture" : undefined}>
              {(mobileLogoSrc || variant === "aboutHero") && (
                <source
                  media="(max-width: 640px)"
                  srcSet={mobileLogoSrc ?? "/nusafiri%20logo%201.png"}
                />
              )}
              <Image
                src={logoSrc}
                alt="Nusafiri"
                width={234}
                height={199}
                className={isHero ? "about-hero-header__logo-image" : "h-full w-full object-contain"}
                priority
              />
            </picture>
          </Link>

        {!isHero && <nav className="hidden w-full border-y border-white/10 bg-white/10 backdrop-blur-[2px] lg:block">
          <ul className="mx-auto flex h-[64px] max-w-[1170px] items-center justify-center gap-8 px-6 sm:gap-12 lg:gap-16">
            {currentNavItems.map(renderDesktopNavItem)}
          </ul>
        </nav>}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={isHero ? "about-hero-header__toggle" : "absolute right-6 top-8 text-white transition-colors duration-300 lg:hidden"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
        {isHero && (
          <nav className="about-hero-header__desktop-nav" aria-label="Main navigation">
            <ul>
              {currentNavItems.map(renderDesktopNavItem)}
            </ul>
          </nav>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`about-hero-header__mobile-menu lg:hidden bg-nusafiri-cream border-t border-nusafiri-border shadow-lg${regularHeroNav ? " about-hero-header__mobile-menu--regular" : ""}`}>
          <nav className="container-wide mx-auto px-6 py-8">
            <ul className="space-y-5">
              {currentNavItems.map((item) => {
                const isExperiencesItem = item.href === "/ultra-luxury/";
                return (
                <li key={item.label}>
                  {blockedMenuUrls.has(item.href) ? (
                    <span
                      className="site-nav-disabled block text-xs uppercase tracking-widest-xl font-medium"
                      aria-disabled="true"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={pathname === item.href.replace(/\/$/, "") ? "page" : undefined}
                      className={`block text-xs uppercase tracking-widest-xl font-medium transition-colors hover:text-nusafiri-gold ${pathname === item.href.replace(/\/$/, "") ? "text-nusafiri-gold" : "text-nusafiri-charcoal"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {isExperiencesItem && (
                    <>
                      <button
                        type="button"
                        className="experiences-mobile-toggle"
                        aria-expanded={mobileExperiencesOpen}
                        aria-controls="mobile-experiences-menu"
                        onClick={() => setMobileExperiencesOpen((open) => !open)}
                      >
                        Browse services
                        <ChevronDown aria-hidden="true" size={16} />
                      </button>
                      {mobileExperiencesOpen && (
                        <ul id="mobile-experiences-menu" className="experiences-mobile-menu">
                          {curatedServices.map((service) => (
                            <li key={service.id}>
                              <Link
                                href={`/ultra-luxury/${service.id}/`}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileExperiencesOpen(false);
                                }}
                              >
                                <span>{service.number}</span>
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
