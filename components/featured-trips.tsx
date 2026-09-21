import Image from "next/image";
import Link from "next/link";

const featuredTrips = [
  {
    name: "Munnar",
    region: "Kerala",
    image: "/images/demo/trips/munnar-demo.png",
    position: "01",
  },
  {
    name: "Wayanad",
    region: "Kerala",
    image: "/images/demo/trips/wayanad-demo.png",
    position: "02",
  },
  {
    name: "Ooty",
    region: "Tamil Nadu",
    image: "/images/demo/trips/ooty-demo.png",
    position: "03",
  },
] as const;

export function FeaturedTrips() {
  return (
    <section className="featured-trips" id="packages" aria-labelledby="trips-title">
      <div className="featured-trips__inner shell">
        <div className="featured-trips__header">
          <div>
            <p className="featured-trips__eyebrow">Featured trips</p>
            <h2 id="trips-title">Where to next?</h2>
          </div>

          <Link href="/trips" className="text-link">
            View all trips
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="trip-grid">
          {featuredTrips.map((trip) => (
            <article className="trip-card" key={trip.name}>
              <div className="trip-card__image">
                <Image
                  src={trip.image}
                  alt=""
                  fill
                  sizes="(max-width: 600px) calc(100vw - 2rem), (max-width: 900px) calc(50vw - 2rem), (min-width: 1500px) 29rem, 33vw"
                  loading="lazy"
                />
                <span className="trip-card__number" aria-hidden="true">
                  {trip.position}
                </span>
              </div>

              <div className="trip-card__caption">
                <h3>{trip.name}</h3>
                <p>{trip.region}</p>
              </div>
            </article>
          ))}
        </div>

        <Link href="/trips" className="text-link featured-trips__mobile-link">
          View all trips
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
