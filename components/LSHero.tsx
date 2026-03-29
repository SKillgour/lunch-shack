"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function LSHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      if (headingRef.current) headingRef.current.style.opacity = "1";
      if (subRef.current) subRef.current.style.opacity = "1";
      if (ctaRef.current) ctaRef.current.style.opacity = "1";
      if (badgeRef.current) badgeRef.current.style.opacity = "1";
      return;
    }

    let ctx: { revert: () => void } | null = null;

    const loadGsap = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        const heading = headingRef.current;
        const sub = subRef.current;
        const cta = ctaRef.current;
        const badge = badgeRef.current;

        if (!heading) return;

        // Split heading text into words and wrap each in a span
        const rawText = heading.textContent || "";
        const words = rawText.split(" ");
        heading.innerHTML = words
          .map((w) => `<span class="ls-hero-word" style="display:inline-block; overflow:hidden; vertical-align:bottom;"><span class="ls-hero-word-inner" style="display:inline-block;">${w}</span></span>`)
          .join(" ");

        const wordInners = heading.querySelectorAll<HTMLElement>(".ls-hero-word-inner");

        gsap.set(wordInners, { yPercent: 110, opacity: 0 });
        if (sub) gsap.set(sub, { opacity: 0, y: 18 });
        if (cta) gsap.set(cta, { opacity: 0, y: 22 });
        if (badge) gsap.set(badge, { opacity: 0, x: -16 });

        const tl = gsap.timeline({ delay: 0.15 });

        tl.to(wordInners, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
        });

        if (sub) {
          tl.to(sub, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          }, "-=0.2");
        }

        if (cta) {
          tl.to(cta, {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          }, "-=0.25");
        }

        if (badge) {
          tl.to(badge, {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          }, "-=0.3");
        }
      });
    };

    loadGsap();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section className="ls-hero">
      <Image
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80"
        alt="Lunch Shack bakery counter with fresh baked goods"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="ls-hero-overlay" />

      <div className="ls-hero-content container">
        <div ref={badgeRef} className="ls-hero-badge">
          <MapPin size={13} />
          79 High Street, Hawera
        </div>

        <h1 ref={headingRef} className="ls-hero-heading">
          Hawera's Favourite Lunch Spot.
        </h1>

        <p ref={subRef} className="ls-hero-sub">
          Fresh baked goods, great lunches, and proper cabinet food.
          <br />
          Come see what's good today.
        </p>

        <div ref={ctaRef} className="ls-hero-ctas">
          <Link href="/menu" className="ls-btn-primary">
            See Our Menu
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
          <Link href="/contact" className="ls-btn-ghost">
            Find Us
          </Link>
        </div>
      </div>

      <style>{`
        .ls-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: rgba(212, 43, 30, 0.25);
          border: 1px solid rgba(212, 43, 30, 0.5);
          color: var(--color-accent-2);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.4rem 0.9rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }
        .ls-hero-heading {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(2.6rem, 6vw, 5rem);
          line-height: 1.05;
          color: #fff;
          max-width: 760px;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .ls-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(245, 240, 232, 0.8);
          line-height: 1.65;
          max-width: 520px;
          margin-bottom: 2.25rem;
          font-weight: 300;
        }
        .ls-hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
