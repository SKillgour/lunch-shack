import LSHero from "@/components/LSHero";
import LSMarquee from "@/components/LSMarquee";
import WhatToGetFinder from "@/components/WhatToGetFinder";
import Image from "next/image";
import Link from "next/link";

const featureCards = [
  {
    title: "Fresh Baking Every Morning",
    desc: "Breads, scrolls, pies and slices baked fresh from 6am. If it's in the cabinet, it was made today.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=80",
    alt: "Fresh baked breads and scrolls on a counter",
  },
  {
    title: "Hot Lunches",
    desc: "Cabinet rolls, filled rolls, soups, toasties. Made fresh, gone by 3pm. Come early for the good stuff.",
    image: "https://images.unsplash.com/photo-1768982418148-9fcdec0e2c7f?w=700&q=80",
    alt: "Cabinet display with sandwiches and lunch options",
  },
  {
    title: "Coffee That's Worth It",
    desc: "Proper espresso, made to order. None of that machine rubbish, just a good coffee done right.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80",
    alt: "A freshly made flat white coffee",
  },
];

const cabinetItems = [
  "Meat Pies",
  "Sausage Rolls",
  "Filled Rolls",
  "Muffins",
  "Slices",
  "Scrolls",
];

export default function HomePage() {
  return (
    <>
      <LSHero />
      <LSMarquee />

      {/* What We Do */}
      <section className="ls-whatwedo">
        <style>{`
          .ls-whatwedo {
            padding: 5rem 0;
            background-color: var(--color-bg);
          }
          .ls-whatwedo-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.78rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.75rem;
          }
          .ls-whatwedo-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(2rem, 4vw, 3rem);
            color: var(--color-primary);
            line-height: 1.1;
            margin-bottom: 1rem;
          }
          .ls-whatwedo-sub {
            font-size: 1.05rem;
            color: var(--color-text-muted);
            max-width: 520px;
            line-height: 1.65;
            margin-bottom: 3.5rem;
          }
          .ls-whatwedo-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          @media (max-width: 900px) {
            .ls-whatwedo-grid {
              grid-template-columns: 1fr;
              max-width: 480px;
            }
          }
          .ls-feature-card {
            background-color: var(--color-surface);
            border-radius: var(--radius-lg);
            overflow: hidden;
            border-top: 4px solid transparent;
            transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
          }
          .ls-feature-card:hover {
            border-top-color: var(--color-accent);
            transform: translateY(-5px);
            box-shadow: 0 16px 40px rgba(30,26,24,0.12);
          }
          .ls-feature-card-img-wrap {
            position: relative;
            height: 220px;
            overflow: hidden;
          }
          .ls-feature-card-img-wrap img {
            transition: transform 0.45s ease;
          }
          .ls-feature-card:hover .ls-feature-card-img-wrap img {
            transform: scale(1.04);
          }
          .ls-feature-card-body {
            padding: 1.5rem 1.75rem 2rem;
          }
          .ls-feature-card-title {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 1.2rem;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
          }
          .ls-feature-card-desc {
            font-size: 0.92rem;
            color: var(--color-text-muted);
            line-height: 1.6;
          }
        `}</style>
        <div className="container">
          <p className="ls-whatwedo-kicker ls-reveal">What we do</p>
          <h2 className="ls-whatwedo-heading ls-reveal">Good food, every day.</h2>
          <p className="ls-whatwedo-sub ls-reveal">
            We're a proper NZ bakery and lunch cafe in the heart of Hawera. Cabinet food made fresh every morning. Hot lunches from 11am. Coffee all day.
          </p>
          <div className="ls-whatwedo-grid ls-stagger-group">
            {featureCards.map((card) => (
              <div key={card.title} className="ls-feature-card ls-stagger-item">
                <div className="ls-feature-card-img-wrap">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="ls-feature-card-body">
                  <h3 className="ls-feature-card-title">{card.title}</h3>
                  <p className="ls-feature-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Cabinet */}
      <section className="ls-cabinet-section">
        <style>{`
          .ls-cabinet-section {
            background-color: #8b1a11;
            padding: 5rem 0;
            color: var(--color-text-on-dark);
          }
          .ls-cabinet-inner {
            max-width: 720px;
          }
          .ls-cabinet-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.78rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: rgba(245,240,232,0.6);
            margin-bottom: 0.75rem;
          }
          .ls-cabinet-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(2rem, 4vw, 3rem);
            color: #fff;
            line-height: 1.1;
            margin-bottom: 1rem;
          }
          .ls-cabinet-body {
            font-size: 1.05rem;
            color: rgba(245,240,232,0.75);
            line-height: 1.65;
            margin-bottom: 2rem;
          }
          .ls-cabinet-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.65rem;
            margin-bottom: 2.5rem;
          }
          .ls-cabinet-tag {
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.82rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #fff;
            background-color: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.22);
            padding: 0.45rem 1rem;
            border-radius: 50px;
          }
          .ls-cabinet-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background-color: #fff;
            color: #8b1a11;
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.95rem;
            padding: 0.75rem 1.75rem;
            border-radius: var(--radius);
            text-decoration: none;
            transition: background-color var(--transition), transform var(--transition);
          }
          .ls-cabinet-cta:hover {
            background-color: rgba(245,240,232,0.9);
            transform: translateY(-1px);
          }
        `}</style>
        <div className="container">
          <div className="ls-cabinet-inner">
            <p className="ls-cabinet-kicker ls-reveal">Cabinet food</p>
            <h2 className="ls-cabinet-heading ls-reveal">What's in the cabinet today?</h2>
            <p className="ls-cabinet-body ls-reveal">
              Cabinet changes daily. Check Facebook for today's lineup -- or just come in and see what catches your eye.
            </p>
            <div className="ls-cabinet-list ls-stagger-group">
              {cabinetItems.map((item) => (
                <span key={item} className="ls-cabinet-tag ls-stagger-item">{item}</span>
              ))}
            </div>
            <Link href="/menu" className="ls-cabinet-cta ls-reveal">
              See the full menu
            </Link>
          </div>
        </div>
      </section>

      {/* Hours & Location Strip */}
      <section className="ls-hours-strip">
        <style>{`
          .ls-hours-strip {
            background-color: var(--color-primary);
            padding: 3.5rem 0;
            color: var(--color-text-on-dark);
          }
          .ls-hours-strip-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            flex-wrap: wrap;
          }
          .ls-hours-strip-label {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.78rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.5rem;
          }
          .ls-hours-strip-title {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 1.5rem;
            color: #fff;
          }
          .ls-hours-strip-divider {
            width: 1px;
            height: 60px;
            background-color: rgba(255,255,255,0.12);
          }
          .ls-hours-strip-rows {
            display: flex;
            gap: 2.5rem;
            flex-wrap: wrap;
          }
          .ls-hours-strip-row {
            text-align: center;
          }
          .ls-hours-strip-day {
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.78rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(245,240,232,0.5);
            margin-bottom: 0.3rem;
          }
          .ls-hours-strip-time {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 1.1rem;
            color: #fff;
          }
          .ls-hours-strip-time.closed {
            color: rgba(245,240,232,0.35);
          }
          .ls-hours-strip-addr {
            font-size: 0.9rem;
            color: rgba(245,240,232,0.6);
            line-height: 1.5;
          }
          .ls-hours-strip-addr strong {
            display: block;
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 1rem;
            color: rgba(245,240,232,0.85);
            margin-bottom: 0.2rem;
          }
          @media (max-width: 768px) {
            .ls-hours-strip-divider { display: none; }
            .ls-hours-strip-inner { flex-direction: column; align-items: flex-start; }
          }
        `}</style>
        <div className="container">
          <div className="ls-hours-strip-inner">
            <div>
              <p className="ls-hours-strip-label">We're open</p>
              <p className="ls-hours-strip-title">Trading Hours</p>
            </div>
            <div className="ls-hours-strip-divider" />
            <div className="ls-hours-strip-rows">
              <div className="ls-hours-strip-row">
                <p className="ls-hours-strip-day">Mon -- Fri</p>
                <p className="ls-hours-strip-time">7am -- 3pm</p>
              </div>
              <div className="ls-hours-strip-row">
                <p className="ls-hours-strip-day">Saturday</p>
                <p className="ls-hours-strip-time">8am -- 2pm</p>
              </div>
              <div className="ls-hours-strip-row">
                <p className="ls-hours-strip-day">Sunday</p>
                <p className="ls-hours-strip-time closed">Closed</p>
              </div>
            </div>
            <div className="ls-hours-strip-divider" />
            <div className="ls-hours-strip-addr">
              <strong>79 High Street, Hawera</strong>
              South Taranaki -- easy parking out front
            </div>
          </div>
        </div>
      </section>

      <WhatToGetFinder />
    </>
  );
}
