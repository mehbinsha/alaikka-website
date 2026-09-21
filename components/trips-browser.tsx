"use client";

import Image from "next/image";
import { useState } from "react";
import {
  tripDestinations,
  tripRegions,
  type TripRegion,
} from "@/data/trips";

export function TripsBrowser() {
  const [selectedRegion, setSelectedRegion] = useState<TripRegion>("All");

  const visibleDestinations =
    selectedRegion === "All"
      ? tripDestinations
      : tripDestinations.filter(({ state }) => state === selectedRegion);

  return (
    <section className="trips-browser shell" aria-label="Browse destinations">
      <div className="trips-filters" role="group" aria-label="Filter destinations by region">
        {tripRegions.map((region) => (
          <button
            key={region}
            type="button"
            className="trips-filter"
            aria-pressed={selectedRegion === region}
            onClick={() => setSelectedRegion(region)}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="destinations-grid" aria-live="polite">
        {visibleDestinations.map((trip) => (
          <article className="destination-card" key={trip.name}>
            <div className={`destination-card__visual destination-card__visual--${trip.format}`}>
              <Image
                src={trip.image}
                alt={trip.alt}
                fill
                sizes="(max-width: 600px) calc(100vw - 2rem), (max-width: 1100px) calc(50vw - 2.5rem), (min-width: 1600px) 43rem, 46vw"
                className="destination-card__image"
                loading="lazy"
              />
              <span className="destination-card__number" aria-hidden="true">
                {trip.number}
              </span>
            </div>

            <div className="destination-card__details">
              <div>
                <h2>{trip.name}</h2>
                <p>
                  {trip.category} &middot; {trip.state}
                </p>
              </div>
              <a
                href={trip.enquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="destination-card__cta"
                aria-label={`Plan a trip to ${trip.name} on WhatsApp`}
              >
                Plan this trip <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
