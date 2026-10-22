"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const entranceSelector = [
  "header img",
  "header nav a",
  "header button",
  "main h1",
  "main h2",
  "main h3",
  "main h4",
  "main h5",
  "main h6",
  "main p",
  "main blockquote",
  "main li",
  "main button",
  "main a",
  "main img",
  "main figcaption",
  "main dt",
  "main dd",
  "footer.site-footer",
].join(", ");

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(entranceSelector),
    ).filter((target) => {
      const interactiveParent = target.closest("a, button");
      if (interactiveParent && interactiveParent !== target) return false;
      if (target.matches("a, button") && target.closest("main li")) return false;
      return true;
    });
    const groups = new Map<Element, HTMLElement[]>();
    const groupIndexes = new Map<Element, number>();

    targets.forEach((target) => {
      const isImage =
        target instanceof HTMLImageElement ||
        (target.matches("a") && target.querySelector("img") !== null);
      target.classList.add("site-entrance-target");
      if (isImage) target.classList.add("site-entrance-image");
      if (
        target.getBoundingClientRect().width < window.innerWidth * 0.75 &&
        target.getBoundingClientRect().left +
          target.getBoundingClientRect().width / 2 >
          window.innerWidth / 2
      ) {
        target.classList.add("site-entrance-right");
      }

      const group =
        target.closest("header, section, article, footer") ??
        target.parentElement ??
        target;
      const groupTargets = groups.get(group) ?? [];
      const index = groupIndexes.get(group) ?? 0;
      groupTargets.push(target);
      groups.set(group, groupTargets);
      groupIndexes.set(group, index + 1);
      target.style.setProperty(
        "--site-entrance-delay",
        `${Math.min(index * 200, 900)}ms`,
      );
    });

    const showGroup = (group: Element) => {
      groups.get(group)?.forEach((target) => {
        target.classList.add("site-entrance-visible");
      });
    };

    if (!("IntersectionObserver" in window)) {
      groups.forEach((_, group) => showGroup(group));
      return () => {
        targets.forEach((target) => {
          target.classList.remove(
            "site-entrance-target",
            "site-entrance-image",
            "site-entrance-right",
            "site-entrance-visible",
          );
          target.style.removeProperty("--site-entrance-delay");
        });
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          showGroup(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px -8% 0px" },
    );

    groups.forEach((_, group) => observer.observe(group));

    return () => {
      observer.disconnect();
      targets.forEach((target) => {
        target.classList.remove(
          "site-entrance-target",
          "site-entrance-image",
          "site-entrance-right",
          "site-entrance-visible",
        );
        target.style.removeProperty("--site-entrance-delay");
      });
    };
  }, [pathname]);

  return null;
}
