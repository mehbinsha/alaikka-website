import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__visual" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero/alaikka-hero-poster.jpg"
          preload="metadata"
        >
          <source
            src="/media/hero/alaikka-hero.mp4"
            type="video/mp4"
            media="(prefers-reduced-motion: no-preference)"
          />
        </video>
        <div className="hero__wash" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content shell">
        <div className="hero__copy">
          <p className="eyebrow">
            <span />
            Malappuram · Tirur
          </p>

          <h1 id="hero-title">GO FURTHER.</h1>
          <p className="hero__subhead">Travel with Alaikka.</p>

          <div className="hero__details">
            <p>
              Tourist buses, thoughtfully planned tour packages, and custom
              journeys shaped around where you want to go.
            </p>

            <div className="hero__actions" aria-label="Trip actions">
              <Link href="/trips" className="button button--primary">
                Explore Trips
                <span aria-hidden="true">↗</span>
              </Link>
              <Link href="#fleet" className="button button--secondary">
                View Fleet
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__footer" aria-hidden="true">
          <p>Tourist buses · Tour packages · Custom trips</p>
          <div className="hero__scroll">
            <span />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
