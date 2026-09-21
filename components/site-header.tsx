"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PlanTripTrigger } from "@/components/plan-trip-trigger";

const navigation = [
  { label: "Travel", href: "#travel", section: true },
  { label: "Transport", href: "/transport", section: false },
  { label: "Trips", href: "/trips", section: false },
  { label: "Fleet", href: "#fleet", section: true },
  { label: "Contact", href: "#contact", section: true },
];

type SiteHeaderProps = {
  homeHref?: string;
  sectionPrefix?: string;
};

export function SiteHeader({
  homeHref = "#home",
  sectionPrefix = "",
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          href={homeHref}
          className="wordmark"
          aria-label="Alaikka Travel Mate home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/alaikka-logo.svg"
            alt="Alaikka Travel Mate"
            width={1345}
            height={269}
            className="wordmark__logo"
            loading="eager"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.section ? `${sectionPrefix}${item.href}` : item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <PlanTripTrigger className="header-cta">
          Plan a Trip
          <span aria-hidden="true">↗</span>
        </PlanTripTrigger>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className="mobile-menu"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.section ? `${sectionPrefix}${item.href}` : item.href}
              className="mobile-menu__link"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <PlanTripTrigger
          className="mobile-menu__cta"
          onBeforeOpen={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          Plan a Trip
          <span aria-hidden="true">↗</span>
        </PlanTripTrigger>

        <p className="mobile-menu__location">Malappuram · Tirur · Kerala</p>
      </div>
    </header>
  );
}
