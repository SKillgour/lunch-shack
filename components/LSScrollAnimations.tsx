"use client";
import { useEffect } from "react";

export default function LSScrollAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Reveal elements
        gsap.utils.toArray<Element>(".ls-reveal").forEach((el) => {
          gsap.set(el, { opacity: 0, y: 28 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.75, ease: "power2.out" }),
          });
        });

        // Stagger groups
        gsap.utils.toArray<Element>(".ls-stagger-group").forEach((group) => {
          const items = group.querySelectorAll(".ls-stagger-item");
          gsap.set(items, { opacity: 0, y: 24 });
          ScrollTrigger.create({
            trigger: group,
            start: "top 85%",
            onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out" }),
          });
        });
      });
    };

    init();
    return () => { if (ctx) ctx.revert(); };
  }, []);

  return null;
}
