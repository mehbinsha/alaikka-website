import { BrandIntroduction } from "@/components/brand-introduction";
import { ContactWidget } from "@/components/contact-widget";
import { FeaturedTrips } from "@/components/featured-trips";
import { Fleet } from "@/components/fleet";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { JourneyMemories } from "@/components/journey-memories";
import { ServiceDivisions } from "@/components/service-divisions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main id="home">
      <SiteHeader />
      <Hero />
      <BrandIntroduction />
      <ServiceDivisions />
      <FeaturedTrips />
      <Fleet />
      <JourneyMemories />
      <Gallery />
      <SiteFooter />
      <ContactWidget />
    </main>
  );
}
