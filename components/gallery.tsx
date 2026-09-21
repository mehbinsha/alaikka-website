import Image from "next/image";
import { contactConfig } from "@/config/contact";

type GalleryItem = {
  id: string;
  image: string;
  layout: "large" | "portrait" | "small-a" | "small-b" | "wide";
  label?: string;
  sizes: string;
};

const galleryItems: readonly GalleryItem[] = [
  {
    id: "open-road",
    image: "/images/demo/gallery/road-demo.png",
    layout: "large",
    label: "On the road",
    sizes: "(max-width: 600px) calc(100vw - 2rem), 66vw",
  },
  {
    id: "travellers-view",
    image: "/images/demo/gallery/window-demo.png",
    layout: "portrait",
    label: "With Alaikka",
    sizes: "(max-width: 600px) 80vw, 34vw",
  },
  {
    id: "kerala-landscape",
    image: "/images/demo/gallery/kerala-demo.png",
    layout: "small-a",
    label: "Kerala",
    sizes: "(max-width: 600px) 74vw, 34vw",
  },
  {
    id: "roadside-moment",
    image: "/images/demo/gallery/moment-demo.png",
    layout: "small-b",
    sizes: "(max-width: 600px) 74vw, 34vw",
  },
  {
    id: "journey-ahead",
    image: "/images/demo/gallery/journey-demo.png",
    layout: "wide",
    sizes: "(max-width: 600px) calc(100vw - 2rem), 58vw",
  },
] as const;

export function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery__inner shell">
        <div className="gallery__header">
          <div>
            <p className="gallery__eyebrow">On the road</p>
            <h2 id="gallery-title">Stories from the road.</h2>
          </div>

          <p className="gallery__intro">
            A glimpse of the journeys, places and moments along the way.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <figure
              className={`gallery__item gallery__item--${item.layout}`}
              key={item.id}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes={item.sizes}
                loading="lazy"
              />
              <span className="gallery__veil" aria-hidden="true" />
              <span className="gallery__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label && <figcaption>{item.label}</figcaption>}
            </figure>
          ))}
        </div>

        <div className="gallery__footer">
          <a
            href={contactConfig.instagramLink}
            className="gallery__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow the journey
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
