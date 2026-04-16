import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="ls-contact-hero">
        <style>{`
          .ls-contact-hero {
            background-color: var(--color-accent);
            padding: 7rem 0 4rem;
            color: #fff;
          }
          .ls-contact-hero-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.78rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.65);
            margin-bottom: 0.75rem;
          }
          .ls-contact-hero-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(2.4rem, 6vw, 4.5rem);
            line-height: 1.05;
            color: #fff;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          .ls-contact-hero-sub {
            font-size: 1.1rem;
            color: rgba(255,255,255,0.78);
            max-width: 480px;
            line-height: 1.6;
          }
        `}</style>
        <div className="container">
          <p className="ls-contact-hero-kicker">Come and see us</p>
          <h1 className="ls-contact-hero-heading">Find Us in Hawera</h1>
          <p className="ls-contact-hero-sub">79 High Street. Right in town. Easy parking out front.</p>
        </div>
      </section>

      {/* Main content */}
      <section className="ls-contact-main">
        <style>{`
          .ls-contact-main {
            padding: 5rem 0;
            background-color: var(--color-bg);
          }
          .ls-contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }
          @media (max-width: 768px) {
            .ls-contact-grid {
              grid-template-columns: 1fr;
              gap: 3rem;
            }
          }

          /* Left column */
          .ls-contact-section-label {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.75rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.75rem;
          }
          .ls-contact-detail-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 1.6rem;
            color: var(--color-primary);
            margin-bottom: 1.75rem;
          }
          .ls-contact-info-block {
            margin-bottom: 2rem;
          }
          .ls-contact-info-label {
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.8rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 0.35rem;
          }
          .ls-contact-info-value {
            font-size: 1rem;
            color: var(--color-text);
            line-height: 1.5;
          }
          .ls-contact-info-value a {
            color: var(--color-accent);
            font-weight: 600;
            transition: color var(--transition);
          }
          .ls-contact-info-value a:hover {
            color: var(--color-accent-hover);
          }

          /* Hours table */
          .ls-contact-hours-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 0.25rem;
          }
          .ls-contact-hours-table tr {
            border-bottom: 1px solid var(--color-surface);
          }
          .ls-contact-hours-table tr:last-child {
            border-bottom: none;
          }
          .ls-contact-hours-table td {
            padding: 0.55rem 0;
            font-size: 0.95rem;
          }
          .ls-contact-hours-table td:first-child {
            font-family: var(--font-heading);
            font-weight: 700;
            color: var(--color-text);
            width: 50%;
          }
          .ls-contact-hours-table td:last-child {
            color: var(--color-accent);
            font-weight: 600;
            text-align: right;
          }
          .ls-contact-hours-table td.closed {
            color: var(--color-text-muted);
            font-weight: 400;
          }

          /* Kitchen note */
          .ls-contact-kitchen-note {
            background-color: var(--color-surface);
            border-radius: var(--radius);
            padding: 1rem 1.25rem;
            font-size: 0.85rem;
            color: var(--color-text-muted);
            line-height: 1.6;
            margin-top: 1rem;
            margin-bottom: 1.75rem;
          }

          /* Facebook link */
          .ls-contact-fb-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.9rem;
            color: var(--color-accent);
            border: 2px solid var(--color-accent);
            padding: 0.6rem 1.25rem;
            border-radius: var(--radius);
            text-decoration: none;
            transition: background-color var(--transition), color var(--transition);
          }
          .ls-contact-fb-link:hover {
            background-color: var(--color-accent);
            color: #fff;
          }

          /* Map card */
          .ls-map-card {
            background-color: var(--color-primary);
            border-radius: var(--radius-lg);
            padding: 2.5rem;
            color: var(--color-text-on-dark);
            position: sticky;
            top: 100px;
          }
          .ls-map-card-label {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.75rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.6rem;
          }
          .ls-map-card-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 1.4rem;
            color: #fff;
            margin-bottom: 0.5rem;
          }
          .ls-map-card-addr {
            font-size: 0.9rem;
            color: rgba(245,240,232,0.65);
            line-height: 1.6;
            margin-bottom: 1.75rem;
          }
          .ls-map-placeholder {
            background-color: rgba(255,255,255,0.06);
            border: 1.5px solid rgba(255,255,255,0.12);
            border-radius: var(--radius);
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            color: rgba(245,240,232,0.35);
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 0.85rem;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }
          .ls-map-gmaps-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.9rem;
            color: #fff;
            background-color: var(--color-accent);
            padding: 0.7rem 1.5rem;
            border-radius: var(--radius);
            text-decoration: none;
            transition: background-color var(--transition), transform var(--transition);
          }
          .ls-map-gmaps-link:hover {
            background-color: var(--color-accent-hover);
            transform: translateY(-1px);
          }
          .ls-map-card-divider {
            border: none;
            border-top: 1px solid rgba(255,255,255,0.1);
            margin: 1.75rem 0;
          }
          .ls-map-card-phone-label {
            font-size: 0.78rem;
            color: rgba(245,240,232,0.4);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-family: var(--font-heading);
            font-weight: 700;
            margin-bottom: 0.35rem;
          }
          .ls-map-card-phone {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 1.3rem;
            color: #fff;
            text-decoration: none;
            transition: color var(--transition);
          }
          .ls-map-card-phone:hover {
            color: var(--color-accent);
          }
        `}</style>
        <div className="container">
          <div className="ls-contact-grid">
            {/* Left: Details */}
            <div>
              <p className="ls-contact-section-label ls-reveal">Location & Hours</p>
              <h2 className="ls-contact-detail-heading ls-reveal">Come find us</h2>

              <div className="ls-contact-info-block ls-reveal">
                <p className="ls-contact-info-label">Address</p>
                <p className="ls-contact-info-value">
                  79 High Street, Hawera, South Taranaki
                </p>
              </div>

              <div className="ls-contact-info-block ls-reveal">
                <p className="ls-contact-info-label">Phone</p>
                <p className="ls-contact-info-value">
                  <a href="tel:062781349">06-278 1349</a>
                </p>
              </div>

              <div className="ls-contact-info-block ls-reveal">
                <p className="ls-contact-info-label">Trading Hours</p>
                <table className="ls-contact-hours-table">
                  <tbody>
                    <tr>
                      <td>Mon to Fri</td>
                      <td>7:00am to 3:00pm</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>8:00am to 2:00pm</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td className="closed">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="ls-contact-kitchen-note ls-reveal">
                Cabinet food available from 7am. Hot lunch served from 11am. Kitchen closes at 2pm (1pm Saturday). Hours may vary on public holidays, check Facebook for updates.
              </div>

              <a
                href="https://www.facebook.com/lunchshack"
                target="_blank"
                rel="noopener noreferrer"
                className="ls-contact-fb-link ls-reveal"
              >
                Follow us on Facebook
              </a>
            </div>

            {/* Right: Map card */}
            <div className="ls-reveal">
              <div className="ls-map-card">
                <p className="ls-map-card-label">Find us in town</p>
                <h3 className="ls-map-card-heading">Lunch Shack</h3>
                <p className="ls-map-card-addr">
                  79 High Street, Hawera<br />
                  South Taranaki, New Zealand
                </p>
                <div className="ls-map-placeholder">
                  Map
                </div>
                <a
                  href="https://maps.google.com/?q=79+High+Street+Hawera+South+Taranaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ls-map-gmaps-link"
                >
                  View on Google Maps
                </a>
                <hr className="ls-map-card-divider" />
                <p className="ls-map-card-phone-label">Call us</p>
                <a href="tel:062781349" className="ls-map-card-phone">
                  06-278 1349
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering & Bulk Orders */}
      <section className="ls-catering-section">
        <style>{`
          .ls-catering-section {
            background-color: var(--color-surface);
            padding: 5rem 0;
          }
          .ls-catering-inner {
            max-width: 680px;
          }
          .ls-catering-kicker {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: 0.75rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: var(--color-accent);
            margin-bottom: 0.75rem;
          }
          .ls-catering-heading {
            font-family: var(--font-heading);
            font-weight: 900;
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            color: var(--color-primary);
            line-height: 1.1;
            margin-bottom: 1rem;
          }
          .ls-catering-body {
            font-size: 1rem;
            color: var(--color-text-muted);
            line-height: 1.7;
            margin-bottom: 2rem;
            max-width: 560px;
          }
          .ls-catering-features {
            display: flex;
            flex-wrap: wrap;
            gap: 0.65rem;
            margin-bottom: 2rem;
          }
          .ls-catering-tag {
            font-family: var(--font-heading);
            font-weight: 800;
            font-size: 0.82rem;
            letter-spacing: 0.06em;
            color: var(--color-primary);
            background-color: #fff;
            border: 1.5px solid rgba(30,26,24,0.12);
            padding: 0.45rem 1rem;
            border-radius: 50px;
          }
        `}</style>
        <div className="container">
          <div className="ls-catering-inner">
            <p className="ls-catering-kicker ls-reveal">Feeding the team?</p>
            <h2 className="ls-catering-heading ls-reveal">Catering & Bulk Orders</h2>
            <p className="ls-catering-body ls-reveal">
              We can cater for team lunches, work events, and function platters. Whether you need a tray of pies, assorted rolls, or a full cabinet spread, we can sort you out. Get in touch to discuss what you need and we'll put something together.
            </p>
            <div className="ls-catering-features ls-stagger-group">
              {["Team Lunches", "Work Events", "Function Platters", "Bulk Orders", "Assorted Cabinet Trays"].map((tag) => (
                <span key={tag} className="ls-catering-tag ls-stagger-item">{tag}</span>
              ))}
            </div>
            <a href="tel:062781349" className="ls-btn-primary ls-reveal">
              Call to discuss: 06-278 1349
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
