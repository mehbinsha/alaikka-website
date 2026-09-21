import Image from "next/image";

export function BrandIntroduction() {
  return (
    <section className="brand-intro" id="about" aria-labelledby="brand-title">
      <div className="brand-intro__inner shell">
        <div className="section-marker">
          <span>01</span>
          <p>About Alaikka</p>
        </div>

        <div className="brand-intro__heading-row">
          <h2 id="brand-title">
            NOT JUST A RIDE.
            <br />
            PART OF THE <em>JOURNEY.</em>
          </h2>

          <p className="brand-intro__summary">
            Tourist bus services, planned tours, and custom trips from Kerala—
            made for the road ahead.
          </p>
        </div>

        <div className="brand-intro__visual" aria-hidden="true">
          <Image
            src="/images/demo/brand-journey.png"
            alt=""
            fill
            sizes="(max-width: 600px) calc(100vw - 2rem), (max-width: 768px) calc(100vw - 3rem), (min-width: 1600px) 92rem, 92vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
