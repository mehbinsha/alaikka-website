import type { Metadata } from "next";
import Image from "next/image";
import { ContactWidget } from "@/components/contact-widget";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TransportServices } from "@/components/transport-services";
import { contactConfig } from "@/config/contact";

export const metadata: Metadata = {
  title: "Transport | Alaikka",
  description:
    "Explore Alaikka goods, commercial, heavy vehicle and machinery transport services.",
};

export default function TransportPage() {
  return (
    <main className="transport-page">
      <SiteHeader homeHref="/" sectionPrefix="/" />

      <section className="transport-hero" aria-labelledby="transport-title">
        <div className="transport-hero__visual" aria-hidden="true">
          <Image
            src="/media/transport/alaikka-transport-fleet.jpg"
            alt=""
            fill
            sizes="100vw"
            preload
          />
        </div>
        <div className="transport-hero__shade" aria-hidden="true" />

        <div className="transport-hero__inner shell">
          <p className="transport-hero__eyebrow">Alaikka Transport</p>
          <h1 id="transport-title">
            <span>We move</span>
            <span>what matters.</span>
          </h1>
          <div className="transport-hero__footer">
            <p>
              Reliable transport solutions backed by Alaikka&apos;s own fleet.
            </p>
            <a
              href={contactConfig.whatsapp.transport.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transport-hero__cta"
            >
              Transport enquiry <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <TransportServices />
      <SiteFooter />
      <ContactWidget />
    </main>
  );
}
