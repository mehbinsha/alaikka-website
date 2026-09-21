import Image from "next/image";
import Link from "next/link";

const divisions = [
  {
    number: "01",
    name: "Travel",
    image: "/images/demo/brand-journey.png",
    alt: "A tourist bus travelling through a mountain landscape",
    services: [
      "Tourist Buses",
      "Tour Packages",
      "Group Trips",
      "Custom Journeys",
    ],
    href: "/trips",
    cta: "Explore travel",
  },
  {
    number: "02",
    name: "Transport",
    image: "/media/transport/alaikka-transport-fleet.jpg",
    alt: "Alaikka transport fleet gathered together",
    services: [
      "Goods Transport",
      "Commercial Transport",
      "Heavy Vehicle Services",
      "JCB / Machinery",
    ],
    href: "/transport",
    cta: "Explore transport",
  },
] as const;

export function ServiceDivisions() {
  return (
    <section
      className="service-divisions"
      id="travel"
      aria-labelledby="divisions-title"
    >
      <div className="service-divisions__inner shell">
        <header className="service-divisions__header">
          <p className="service-divisions__eyebrow">Alaikka services</p>
          <h2 id="divisions-title">What we move.</h2>
          <p>
            From memorable journeys to essential goods, Alaikka keeps people
            and progress moving.
          </p>
        </header>

        <div className="service-divisions__grid">
          {divisions.map((division) => (
            <article className="division-card" key={division.name}>
              <Link
                href={division.href}
                className="division-card__visual"
                aria-label={`${division.cta}: ${division.name}`}
              >
                <Image
                  src={division.image}
                  alt={division.alt}
                  fill
                  sizes="(max-width: 700px) calc(100vw - 2rem), (min-width: 1500px) 45rem, 48vw"
                  loading="lazy"
                />
                <span aria-hidden="true">{division.number}</span>
              </Link>

              <div className="division-card__body">
                <h3>{division.name}</h3>
                <ul>
                  {division.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
                <Link href={division.href} className="division-card__cta">
                  {division.cta} <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
