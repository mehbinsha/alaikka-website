import Image from "next/image";
import { transportServices } from "@/data/transport";

export function TransportServices() {
  return (
    <section
      className="transport-services"
      aria-labelledby="transport-services-title"
    >
      <div className="shell">
        <header className="transport-services__header">
          <p>Our fleet</p>
          <h2 id="transport-services-title">
            Built to
            <br />
            move more.
          </h2>
        </header>

        <div className="transport-services__grid">
          {transportServices.map((service) => {
            const isFeatured = service.id === "small-load-transport";

            return (
              <article
                className={`transport-service${isFeatured ? " transport-service--featured" : ""}`}
                key={service.id}
              >
                <div className="transport-service__visual">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 700px) calc(100vw - 2rem), (max-width: 1100px) 62vw, (min-width: 1500px) 59rem, 64vw"
                        : "(max-width: 700px) calc(100vw - 2rem), (max-width: 1100px) calc(50vw - 2.5rem), (min-width: 1500px) 45rem, calc(50vw - 2.5rem)"
                    }
                    loading="lazy"
                    style={{ objectPosition: service.objectPosition }}
                  />
                  <span aria-hidden="true">{service.number}</span>
                </div>
                <div className="transport-service__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    href={service.enquiryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    Enquire now <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
