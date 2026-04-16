import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink, Clock } from "lucide-react";

export default function LSFooter() {
  return (
    <footer className="ls-footer">
      <style>{`
        .ls-footer {
          background-color: var(--color-dark-surface);
          color: var(--color-text-on-dark);
          padding: 4rem 0 2rem;
        }
        .ls-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .ls-footer-brand-name {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 0.4rem;
        }
        .ls-footer-brand-sub {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent-2);
          margin-bottom: 1.25rem;
        }
        .ls-footer-tagline {
          font-size: 0.9rem;
          color: rgba(240, 246, 250, 0.6);
          line-height: 1.6;
          max-width: 280px;
        }
        .ls-footer-social {
          margin-top: 1.5rem;
        }
        .ls-footer-fb {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-accent-2);
          transition: color var(--transition);
          text-decoration: none;
        }
        .ls-footer-fb:hover {
          color: #fff;
        }
        .ls-footer-heading {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 1.25rem;
        }
        .ls-footer-info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          margin-bottom: 0.85rem;
          font-size: 0.875rem;
          color: rgba(240, 246, 250, 0.75);
          line-height: 1.5;
        }
        .ls-footer-info-item a {
          color: rgba(240, 246, 250, 0.75);
          transition: color var(--transition);
        }
        .ls-footer-info-item a:hover {
          color: var(--color-accent-2);
        }
        .ls-footer-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--color-accent);
        }
        .ls-footer-hours-row {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          color: rgba(240, 246, 250, 0.75);
        }
        .ls-footer-hours-day {
          font-weight: 600;
        }
        .ls-footer-hours-time {
          color: var(--color-accent-2);
          font-weight: 500;
        }
        .ls-footer-hours-time.closed {
          color: rgba(240, 246, 250,0.4);
          font-size: 0.875rem;
        }
        .ls-footer-hours-note {
          margin-top: 1rem;
          font-size: 0.75rem;
          color: rgba(240, 246, 250,0.4);
          line-height: 1.5;
        }
        .ls-footer-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 1.75rem;
        }
        .ls-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: rgba(240, 246, 250, 0.4);
          gap: 1rem;
          flex-wrap: wrap;
        }
        .ls-footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        .ls-footer-bottom-links a {
          color: rgba(240, 246, 250, 0.4);
          transition: color var(--transition);
        }
        .ls-footer-bottom-links a:hover {
          color: rgba(240, 246, 250, 0.8);
        }
        @media (max-width: 768px) {
          .ls-footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        .footer-credit { text-align: center; font-size: 0.68rem; opacity: 0.35; margin-top: 1.5rem; padding-bottom: 0.75rem; letter-spacing: 0.02em; }
        .footer-credit a { color: inherit; text-decoration: none; }
        .footer-credit a:hover { opacity: 0.7; }
      `}</style>

      <div className="container">
        <div className="ls-footer-grid">
          <div>
            <div className="ls-footer-brand-name">Lunch Shack</div>
            <div className="ls-footer-brand-sub">Hawera, South Taranaki</div>
            <p className="ls-footer-tagline">
              Cabinet food done right. Baked every morning, gone by afternoon. Come in and see what's good today.
            </p>
            <div className="ls-footer-social">
              <a
                href="https://www.facebook.com/lunchshack"
                target="_blank"
                rel="noopener noreferrer"
                className="ls-footer-fb"
              >
                <ExternalLink size={16} />
                Follow us on Facebook
              </a>
            </div>
          </div>

          <div>
            <div className="ls-footer-heading">Find Us</div>
            <div className="ls-footer-info-item">
              <MapPin size={15} className="ls-footer-icon" />
              <span>79 High Street, Hawera, South Taranaki</span>
            </div>
            <div className="ls-footer-info-item">
              <Phone size={15} className="ls-footer-icon" />
              <a href="tel:062781349">06-278 1349</a>
            </div>
            <div className="ls-footer-info-item">
              <Mail size={15} className="ls-footer-icon" />
              <a href="mailto:admin@lunchshack.co.nz">admin@lunchshack.co.nz</a>
            </div>
            <div className="ls-footer-info-item">
              <Clock size={15} className="ls-footer-icon" />
              <span>In-store collection only</span>
            </div>
          </div>

          <div>
            <div className="ls-footer-heading">Hours</div>
            <div className="ls-footer-hours-row">
              <span className="ls-footer-hours-day">Mon - Fri</span>
              <span className="ls-footer-hours-time">7am - 3pm</span>
            </div>
            <div className="ls-footer-hours-row">
              <span className="ls-footer-hours-day">Saturday</span>
              <span className="ls-footer-hours-time">8am - 2pm</span>
            </div>
            <div className="ls-footer-hours-row">
              <span className="ls-footer-hours-day">Sunday</span>
              <span className="ls-footer-hours-time closed">Closed</span>
            </div>
            <p className="ls-footer-hours-note">
              Hours may vary. Check Facebook for updates.
            </p>
          </div>
        </div>

        <hr className="ls-footer-divider" />

        <div className="ls-footer-bottom">
          <span>2025 Lunch Shack, Hawera. All rights reserved.</span>
          <div className="ls-footer-bottom-links">
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://www.facebook.com/lunchshack" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        <p className="footer-credit">Website by <a href="https://insightly.nz" target="_blank" rel="noopener noreferrer">Insightly</a></p>
      </div>
    </footer>
  );
}
