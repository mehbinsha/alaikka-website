import Image from "next/image";
import Link from "next/link";
import { PlanTripTrigger } from "@/components/plan-trip-trigger";

type JourneyMemory = {
  id: string;
  image: string;
  alt: string;
  caption: string;
  layout: "dominant" | "portrait" | "scenic" | "wide" | "candid";
  sizes: string;
};

const journeyMemories: readonly JourneyMemory[] = [
  {
    id: "group-memory",
    image: "/images/demo/completed-trips/group-memory.png",
    alt: "A travel group together in misty hills",
    caption: "Munnar — Kerala",
    layout: "dominant",
    sizes: "(max-width: 600px) calc(100vw - 2rem), (max-width: 900px) calc(100vw - 3rem), 66vw",
  },
  {
    id: "destination-bus",
    image: "/images/demo/completed-trips/offatootyy.png",
    alt: "A tourist bus at a mountain viewpoint",
    caption: "Ooty — Tamil Nadu",
    layout: "portrait",
    sizes: "(max-width: 600px) calc(50vw - 1.5rem), (max-width: 900px) calc(50vw - 2.25rem), 34vw",
  },
  {
    id: "scenic-group",
    image: "/images/demo/completed-trips/scenic-group.png",
    alt: "Travellers sharing a scenic view",
    caption: "Wayanad — Kerala",
    layout: "scenic",
    sizes: "(max-width: 600px) calc(50vw - 1.5rem), (max-width: 900px) calc(50vw - 2.25rem), 42vw",
  },
  {
    id: "mountain-journey",
    image: "/images/demo/completed-trips/34onroad.png",
    alt: "A tourist bus travelling through mountain roads",
    caption: "On the road",
    layout: "wide",
    sizes: "(max-width: 600px) calc(100vw - 2rem), (max-width: 900px) calc(100vw - 3rem), 58vw",
  },
  {
    id: "candid-stop",
    image: "/images/demo/completed-trips/candid-stop.png",
    alt: "Travellers sharing tea at a roadside stop",
    caption: "Between stops",
    layout: "candid",
    sizes: "(max-width: 600px) calc(50vw - 1.5rem), (max-width: 900px) calc(50vw - 2.25rem), 34vw",
  },
] as const;

export function JourneyMemories() {
  return (
    <section
      className="journey-memories"
      id="journey-memories"
      aria-labelledby="journey-memories-title"
    >
      <div className="journey-memories__inner shell">
        <div className="journey-memories__header">
          <div>
            <p className="journey-memories__eyebrow">Journeys we&apos;ve made</p>
            <h2 id="journey-memories-title">
              Miles behind us.
              <br />
              Memories with us.
            </h2>
          </div>

          <p className="journey-memories__intro">
            A glimpse at the journeys, groups and places that have become part
            of the Alaikka story.
          </p>
        </div>

        <div className="journey-memories__grid" id="journey-memories-grid">
          {journeyMemories.map((memory, index) => (
            <figure
              className={`journey-memory journey-memory--${memory.layout}`}
              key={memory.id}
            >
              <Image
                src={memory.image}
                alt={memory.alt}
                fill
                sizes={memory.sizes}
                loading="lazy"
              />
              <span className="journey-memory__shade" aria-hidden="true" />
              <span className="journey-memory__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <figcaption>{memory.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="journey-memories__footer">
          <div className="journey-memories__prompt">
            <p>Your group could be next.</p>
            <PlanTripTrigger>
              Plan a trip <span aria-hidden="true">↗</span>
            </PlanTripTrigger>
          </div>

          <Link href="#gallery" className="journey-memories__gallery-link">
            View journey gallery <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
