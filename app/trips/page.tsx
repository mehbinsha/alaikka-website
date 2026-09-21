import type { Metadata } from "next";
import { ContactWidget } from "@/components/contact-widget";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TripsBrowser } from "@/components/trips-browser";

export const metadata: Metadata = {
  title: "Destinations | Alaikka Travel Mate",
  description:
    "Explore destinations and plan your next journey with Alaikka Travel Mate.",
};

export default function TripsPage() {
  return (
    <main className="trips-page">
      <SiteHeader homeHref="/" sectionPrefix="/" />

      <header className="trips-hero">
        <div className="shell trips-hero__inner">
          <p className="trips-hero__eyebrow">
            <span>01 &middot;</span> Alaikka Destinations
          </p>
          <h1>
            Where do you
            <br />
            want to go?
          </h1>
          <p className="trips-hero__copy">
            Explore popular destinations and start planning your next journey
            with Alaikka.
          </p>
        </div>
      </header>

      <TripsBrowser />
      <SiteFooter />
      <ContactWidget />
    </main>
  );
}
