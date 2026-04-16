"use client";

import { useEffect, useState } from "react";

const FULL_NAME = "Lunch Shack";
const CHAR_INTERVAL = 68;
const HOLD_AFTER_TYPED = 520;
const EXIT_DURATION = 600;

export default function LSIntro() {
  const [displayed, setDisplayed] = useState("");
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_NAME.slice(0, i));
      if (i >= FULL_NAME.length) {
        clearInterval(interval);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            setGone(true);
          }, EXIT_DURATION);
        }, HOLD_AFTER_TYPED);
      }
    }, CHAR_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  if (gone) return null;

  return (
    <div className={`ls-intro${exiting ? " ls-intro--exit" : ""}`}>
      <div className="ls-intro-inner">
        <span className="ls-intro-name" aria-hidden="true">
          {displayed}
          <span className="ls-intro-cursor" />
        </span>
        <span className="ls-intro-sub">Hawera, South Taranaki</span>
      </div>
      <style>{`
        .ls-intro {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background-color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform ${EXIT_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1);
        }
        .ls-intro--exit {
          transform: translateY(-100%);
        }
        .ls-intro-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }
        .ls-intro-name {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(2.2rem, 7vw, 4.5rem);
          color: #fff;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 2px;
          min-width: 14ch;
          justify-content: center;
        }
        .ls-intro-cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: var(--color-accent);
          border-radius: 2px;
          margin-left: 3px;
          animation: ls-blink 0.7s step-end infinite;
        }
        .ls-intro--exit .ls-intro-cursor {
          animation: none;
          opacity: 0;
        }
        @keyframes ls-blink {
          50% { opacity: 0; }
        }
        .ls-intro-sub {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-accent-2);
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
