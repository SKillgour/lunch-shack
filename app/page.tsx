import LSHero from "@/components/LSHero";
import LSMarquee from "@/components/LSMarquee";
import Image from "next/image";
import Link from "next/link";

const STORY_IMG = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80";

export default function HomePage() {
  return (
    <>
      <LSHero />
      <LSMarquee />

      {/* ── Story Block ──────────────────────────────────────────────── */}
      <section className="ls-story">
        <style>{`
          .ls-story {
            padding: 6rem 0;
            background-color: var(--color-bg);
            overflow: hidden;
          }
          .ls-story-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
          }
          @media (max-width: 900px) {
            .ls-story-grid {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
            .ls-story-image-col {
              order: -1;
            }
          }
          .ls-story-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 1rem;
          }
          .ls-story-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(2.2rem, 4.5vw, 3.4rem);
            color: var(--color-primary);
            line-height: 1.08;
            letter-spacing: -0.02em;
            margin-bottom: 1.5rem;
          }
          .ls-story-heading em {
            font-style: italic;
            color: var(--color-accent);
          }
          .ls-story-body {
            font-size: 1rem;
            color: var(--color-text-muted);
            line-height: 1.75;
            margin-bottom: 1rem;
            max-width: 480px;
          }
          .ls-story-cta {
            margin-top: 1.5rem;
            display: inline-flex;
          }
          .ls-story-image-col {
            position: relative;
          }
          .ls-story-image-wrap {
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
            height: 520px;
          }
          .ls-story-image-accent {
            position: absolute;
            bottom: -1.5rem;
            left: -1.5rem;
            width: 180px;
            height: 180px;
            background-color: var(--color-accent);
            border-radius: var(--radius-lg);
            z-index: 0;
          }
          .ls-story-image-wrap {
            position: relative;
            z-index: 1;
          }
          @media (max-width: 900px) {
            .ls-story-image-wrap {
              height: 320px;
            }
            .ls-story-image-accent {
              display: none;
            }
          }
        `}</style>
        <div className="container">
          <div className="ls-story-grid">
            <div>
              <p className="ls-story-kicker ls-reveal">A Hawera original</p>
              <h2 className="ls-story-heading ls-reveal">
                Made fresh.<br />
                <em>Every single morning.</em>
              </h2>
              <p className="ls-story-body ls-reveal">
                Lunch Shack is Hawera's local bakery and lunch cafe. Every morning we bake the pies, the scrolls, the muffins. Hot lunches go up from 11. Coffee runs all day.
              </p>
              <p className="ls-story-body ls-reveal">
                We're not a chain and we're not a franchise. We're a Taranaki business making proper cabinet food for the people who live and work here.
              </p>
              <Link href="/menu" className="ls-btn-primary ls-story-cta ls-reveal">
                See the full menu
              </Link>
            </div>
            <div className="ls-story-image-col ls-reveal">
              <div className="ls-story-image-accent" aria-hidden="true" />
              <div className="ls-story-image-wrap">
                <Image
                  src={STORY_IMG}
                  alt="Fresh breads and baked goods at the Lunch Shack counter"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services mosaic ───────────────────────────────────────────── */}
      <section className="ls-services">
        <style>{`
          .ls-services {
            padding: 6rem 0;
            background-color: var(--color-surface);
          }
          .ls-services-header {
            margin-bottom: 3.5rem;
          }
          .ls-services-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.75rem;
          }
          .ls-services-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(1.8rem, 3.5vw, 2.6rem);
            color: var(--color-primary);
            line-height: 1.1;
            letter-spacing: -0.02em;
          }
          /* Mosaic: 1 tall card left, 2 stacked right */
          .ls-services-mosaic {
            display: grid;
            grid-template-columns: 1.15fr 1fr;
            grid-template-rows: auto auto;
            gap: 1.25rem;
          }
          @media (max-width: 768px) {
            .ls-services-mosaic {
              grid-template-columns: 1fr;
            }
          }
          .ls-svc-card {
            background-color: #fff;
            border-radius: var(--radius-lg);
            overflow: hidden;
            border-bottom: 4px solid transparent;
            transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
          }
          .ls-svc-card:hover {
            border-bottom-color: var(--color-accent);
            transform: translateY(-4px);
            box-shadow: 0 20px 48px rgba(17,24,32,0.11);
          }
          .ls-svc-card--tall {
            grid-row: span 2;
          }
          .ls-svc-card--horizontal {
            display: flex;
            align-items: stretch;
          }
          .ls-svc-card-img-wrap {
            position: relative;
            overflow: hidden;
          }
          .ls-svc-card--tall .ls-svc-card-img-wrap {
            height: 260px;
          }
          .ls-svc-card--horizontal .ls-svc-card-img-wrap {
            width: 42%;
            flex-shrink: 0;
          }
          .ls-svc-card img {
            transition: transform 0.45s ease;
          }
          .ls-svc-card:hover img {
            transform: scale(1.04);
          }
          .ls-svc-card-body {
            padding: 1.75rem 2rem 2rem;
          }
          .ls-svc-card--horizontal .ls-svc-card-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1.5rem;
          }
          .ls-svc-card-tag {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.7rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.6rem;
          }
          .ls-svc-card-title {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 1.3rem;
            color: var(--color-primary);
            line-height: 1.2;
            margin-bottom: 0.6rem;
          }
          .ls-svc-card-desc {
            font-size: 0.9rem;
            color: var(--color-text-muted);
            line-height: 1.65;
          }
          @media (max-width: 560px) {
            .ls-svc-card--horizontal {
              flex-direction: column;
            }
            .ls-svc-card--horizontal .ls-svc-card-img-wrap {
              width: 100%;
              height: 200px;
            }
          }
        `}</style>
        <div className="container">
          <div className="ls-services-header">
            <p className="ls-services-kicker ls-reveal">What we do</p>
            <h2 className="ls-services-heading ls-reveal">Cabinet food, hot lunches,<br />and proper coffee.</h2>
          </div>
          <div className="ls-services-mosaic ls-stagger-group">

            {/* Tall card: Bakery */}
            <div className="ls-svc-card ls-svc-card--tall ls-stagger-item">
              <div className="ls-svc-card-img-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=80"
                  alt="Fresh breads and scrolls baked at the Lunch Shack every morning"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="ls-svc-card-body">
                <p className="ls-svc-card-tag">From 7am</p>
                <h3 className="ls-svc-card-title">Fresh Baking Every Morning</h3>
                <p className="ls-svc-card-desc">
                  Pies, sausage rolls, scrolls, muffins and slices baked fresh from 6am. Cabinet stocked and ready when we open. If it's in there, it was made today.
                </p>
              </div>
            </div>

            {/* Horizontal card: Hot Lunches */}
            <div className="ls-svc-card ls-svc-card--horizontal ls-stagger-item">
              <div className="ls-svc-card-img-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1768982418148-9fcdec0e2c7f?w=700&q=80"
                  alt="Hot lunch cabinet with filled rolls and toasties"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="ls-svc-card-body">
                <p className="ls-svc-card-tag">From 11am</p>
                <h3 className="ls-svc-card-title">Hot Lunches</h3>
                <p className="ls-svc-card-desc">Soup, toasties, loaded rolls, and a burger of the day. Closes at 2pm.</p>
              </div>
            </div>

            {/* Horizontal card: Coffee */}
            <div className="ls-svc-card ls-svc-card--horizontal ls-stagger-item">
              <div className="ls-svc-card-img-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80"
                  alt="Freshly made flat white coffee at Lunch Shack"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="ls-svc-card-body">
                <p className="ls-svc-card-tag">All day</p>
                <h3 className="ls-svc-card-title">Coffee Worth Having</h3>
                <p className="ls-svc-card-desc">Proper espresso, made to order. Flat whites, lattes, long blacks. No machine rubbish.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Quote Strip (Personality C signature: textured section) ────── */}
      <section className="ls-quote-strip">
        <style>{`
          .ls-quote-strip {
            position: relative;
            background-color: #0d1b26;
            padding: 7rem 0;
            overflow: hidden;
          }
          .ls-quote-strip::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
            opacity: 0.06;
            pointer-events: none;
            z-index: 0;
          }
          .ls-quote-strip-inner {
            position: relative;
            z-index: 1;
            max-width: 860px;
          }
          .ls-quote-mark {
            font-family: var(--font-heading);
            font-size: 6rem;
            font-weight: 900;
            color: var(--color-accent);
            opacity: 0.45;
            line-height: 0.6;
            margin-bottom: 1.5rem;
            display: block;
          }
          .ls-quote-text {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(1.8rem, 4vw, 3rem);
            color: #fff;
            line-height: 1.25;
            letter-spacing: -0.01em;
            margin-bottom: 2rem;
          }
          .ls-quote-text em {
            color: var(--color-accent-2);
            font-style: italic;
          }
          .ls-quote-source {
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 0.8rem;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: rgba(240, 246, 250,0.45);
          }
          .ls-quote-source span {
            color: var(--color-accent-2);
          }
        `}</style>
        <div className="container">
          <div className="ls-quote-strip-inner">
            <span className="ls-quote-mark ls-reveal" aria-hidden="true">"</span>
            <p className="ls-quote-text ls-reveal">
              Made fresh every morning.<br />
              <em>Gone by the afternoon.</em><br />
              That's just how we do it.
            </p>
            <p className="ls-quote-source ls-reveal">
              <span>Lunch Shack</span>, 79 High Street, Hawera
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ─────────────────────────────────────────────── */}
      <section className="ls-gallery-strip">
        <style>{`
          .ls-gallery-strip {
            background-color: var(--color-bg);
            padding: 5rem 0;
          }
          .ls-gallery-strip-header {
            margin-bottom: 2.5rem;
          }
          .ls-gallery-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.6rem;
          }
          .ls-gallery-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(1.6rem, 3vw, 2.2rem);
            color: var(--color-primary);
            letter-spacing: -0.02em;
          }
          .ls-gallery-grid {
            display: grid;
            grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
            grid-template-rows: 200px 200px;
            gap: 0.75rem;
          }
          @media (max-width: 900px) {
            .ls-gallery-grid {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 180px 180px;
            }
            .ls-gallery-item:nth-child(4),
            .ls-gallery-item:nth-child(5) {
              display: none;
            }
          }
          @media (max-width: 560px) {
            .ls-gallery-grid {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 150px 150px;
            }
          }
          .ls-gallery-item {
            position: relative;
            border-radius: var(--radius);
            overflow: hidden;
            background-color: var(--color-surface);
          }
          .ls-gallery-item--tall {
            grid-row: span 2;
          }
          .ls-gallery-item img {
            transition: transform 0.55s ease;
          }
          .ls-gallery-item:hover img {
            transform: scale(1.06);
          }
          .ls-gallery-caption-strip {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1.5rem 1rem 0.75rem;
            background: linear-gradient(to top, rgba(17,24,32,0.72), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .ls-gallery-item:hover .ls-gallery-caption-strip {
            opacity: 1;
          }
          .ls-gallery-caption {
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 0.75rem;
            color: #fff;
            letter-spacing: 0.04em;
          }
        `}</style>
        <div className="container">
          <div className="ls-gallery-strip-header">
            <p className="ls-gallery-kicker ls-reveal">At the counter</p>
            <h2 className="ls-gallery-heading ls-reveal">What you'll find on any given day</h2>
          </div>
          <div className="ls-gallery-grid ls-stagger-group">
            <div className="ls-gallery-item ls-gallery-item--tall ls-stagger-item">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80"
                alt="Lunch Shack cabinet display with fresh baked goods"
                fill
                sizes="(max-width: 900px) 50vw, 30vw"
                style={{ objectFit: "cover" }}
              />
              <div className="ls-gallery-caption-strip">
                <span className="ls-gallery-caption">The cabinet</span>
              </div>
            </div>
            <div className="ls-gallery-item ls-stagger-item">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=80"
                alt="Fresh baked breads and scrolls"
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <div className="ls-gallery-caption-strip">
                <span className="ls-gallery-caption">Fresh baking</span>
              </div>
            </div>
            <div className="ls-gallery-item ls-stagger-item">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80"
                alt="Flat white coffee"
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
              <div className="ls-gallery-caption-strip">
                <span className="ls-gallery-caption">Coffee, all day</span>
              </div>
            </div>
            <div className="ls-gallery-item ls-gallery-item--tall ls-stagger-item">
              <Image
                src="https://images.unsplash.com/photo-1768982418148-9fcdec0e2c7f?w=700&q=80"
                alt="Hot lunch cabinet with rolls and toasties"
                fill
                sizes="(max-width: 900px) 50vw, 30vw"
                style={{ objectFit: "cover" }}
              />
              <div className="ls-gallery-caption-strip">
                <span className="ls-gallery-caption">Hot lunches from 11</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="ls-cta-banner">
        <style>{`
          .ls-cta-banner {
            background-color: var(--color-surface);
            padding: 5rem 0;
            border-top: 1px solid rgba(42,184,232,0.15);
          }
          .ls-cta-banner-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2.5rem;
            flex-wrap: wrap;
          }
          .ls-cta-banner-text {}
          .ls-cta-banner-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.75rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.6rem;
          }
          .ls-cta-banner-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(1.6rem, 3vw, 2.4rem);
            color: var(--color-primary);
            line-height: 1.1;
            letter-spacing: -0.02em;
          }
          .ls-cta-banner-btns {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            flex-shrink: 0;
          }
        `}</style>
        <div className="container">
          <div className="ls-cta-banner-inner">
            <div className="ls-cta-banner-text ls-reveal">
              <p className="ls-cta-banner-kicker">Hawera's local bakery</p>
              <h2 className="ls-cta-banner-heading">Open Monday to Saturday.<br />Come see what's good today.</h2>
            </div>
            <div className="ls-cta-banner-btns ls-reveal">
              <Link href="/menu" className="ls-btn-primary">See the menu</Link>
              <Link href="/contact" className="ls-btn-ghost-dark">Find us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
