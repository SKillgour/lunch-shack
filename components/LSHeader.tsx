"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function LSHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`ls-header ${scrolled ? "ls-header--scrolled" : ""}`}
    >
      <style>{`
        .ls-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background-color 0.28s ease, box-shadow 0.28s ease;
          background-color: transparent;
        }
        .ls-header--scrolled {
          background-color: var(--color-bg);
          box-shadow: 0 2px 20px rgba(17,24,32,0.10);
        }
        .ls-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.5rem;
          max-width: var(--container);
          margin: 0 auto;
        }
        .ls-logo {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.35rem;
          letter-spacing: -0.01em;
          color: #fff;
          transition: color 0.28s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .ls-header--scrolled .ls-logo {
          color: var(--color-primary);
        }
        .ls-logo-sub {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent-2);
          opacity: 0.85;
        }
        .ls-header--scrolled .ls-logo-sub {
          color: var(--color-accent);
        }
        .ls-nav {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }
        .ls-nav-link {
          color: rgba(255,255,255,0.88);
          transition: color 0.22s ease;
        }
        .ls-header--scrolled .ls-nav-link {
          color: var(--color-text);
        }
        .ls-nav-link:hover {
          color: var(--color-accent) !important;
        }
        .ls-header-phone {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.85rem;
          color: #fff;
          background-color: var(--color-accent);
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          transition: background-color var(--transition), transform var(--transition);
          text-decoration: none;
          white-space: nowrap;
        }
        .ls-header-phone:hover {
          background-color: var(--color-accent-hover);
          transform: translateY(-1px);
        }
        .ls-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }
        .ls-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background-color: #fff;
          transition: background-color 0.28s ease;
          border-radius: 2px;
        }
        .ls-header--scrolled .ls-hamburger span {
          background-color: var(--color-primary);
        }
        .ls-mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--color-primary);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
        }
        .ls-mobile-menu.open {
          display: flex;
        }
        .ls-mobile-link {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 2rem;
          color: var(--color-text-on-dark);
          text-decoration: none;
          transition: color 0.22s ease;
        }
        .ls-mobile-link:hover {
          color: var(--color-accent);
        }
        .ls-mobile-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--color-text-on-dark);
          font-size: 2rem;
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 900;
          line-height: 1;
        }
        @media (max-width: 768px) {
          .ls-nav {
            display: none;
          }
          .ls-hamburger {
            display: flex;
          }
        }
      `}</style>

      <div className="ls-header-inner">
        <Link href="/" className="ls-logo">
          Lunch Shack
          <span className="ls-logo-sub">Hawera, NZ</span>
        </Link>

        <nav className="ls-nav">
          <Link href="/menu" className="ls-nav-link">Menu</Link>
          <Link href="/contact" className="ls-nav-link">Contact</Link>
          <a href="tel:062781349" className="ls-header-phone">
            <Phone size={14} strokeWidth={2.5} />
            06-278 1349
          </a>
        </nav>

        <button
          className="ls-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`ls-mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="ls-mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          x
        </button>
        <Link href="/" className="ls-mobile-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/menu" className="ls-mobile-link" onClick={() => setMenuOpen(false)}>Menu</Link>
        <Link href="/contact" className="ls-mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a href="tel:062781349" className="ls-header-phone" onClick={() => setMenuOpen(false)}>
          <Phone size={14} strokeWidth={2.5} />
          06-278 1349
        </a>
      </div>
    </header>
  );
}
