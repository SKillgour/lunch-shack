"use client";
import { useState } from "react";

const questions = [
  {
    id: "time",
    question: "When are you coming in?",
    options: ["Morning (before 11am)", "Lunchtime (11am-2pm)", "Late afternoon"],
  },
  {
    id: "hungry",
    question: "How hungry are you?",
    options: ["Just a snack", "Properly hungry", "Absolutely starving"],
  },
  {
    id: "vibe",
    question: "What are you feeling?",
    options: ["Something warm and savory", "Something sweet", "Coffee and a bite"],
  },
];

// Recommendation logic based on answers
function getRecommendation(answers: Record<string, string>): string {
  const { time, hungry, vibe } = answers;
  if (vibe === "Coffee and a bite") return "Flat white + cinnamon scroll. Classic combo.";
  if (time === "Morning (before 11am)" && vibe === "Something sweet") return "Fresh muffin of the day and a latte. Go on.";
  if (hungry === "Absolutely starving" && time === "Lunchtime (11am-2pm)") return "Soup of the day AND a loaded roll. You won't regret it.";
  if (hungry === "Just a snack" && vibe === "Something warm and savory") return "Sausage roll. Freshly baked. Perfect.";
  if (time === "Lunchtime (11am-2pm)" && vibe === "Something warm and savory") return "Burger of the day. Check the board -- it changes daily.";
  if (hungry === "Properly hungry" && vibe === "Something warm and savory") return "Meat pie and a coffee. The Lunch Shack staple.";
  if (time === "Late afternoon") return "We might be closing up -- check Facebook or call ahead. Or grab a scroll on your way out.";
  return "Honestly? Just come in and see what's in the cabinet. It's always good.";
}

export default function WhatToGetFinder() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const currentQ = questions[step];

  function handleSelect(option: string) {
    const newAnswers = { ...answers, [currentQ.id]: option };
    setAnswers(newAnswers);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function handleReset() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  return (
    <section className="ls-wtg-section">
      <style>{`
        .ls-wtg-section {
          background-color: var(--color-primary);
          color: var(--color-text-on-dark);
          padding: 5rem 0;
        }
        .ls-wtg-inner {
          max-width: 640px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
        }
        .ls-wtg-kicker {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 0.75rem;
        }
        .ls-wtg-heading {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          line-height: 1.1;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        .ls-wtg-sub {
          font-size: 1rem;
          color: rgba(245,240,232,0.65);
          margin-bottom: 3rem;
        }
        .ls-wtg-question {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          color: #fff;
          margin-bottom: 1.75rem;
        }
        .ls-wtg-options {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .ls-wtg-option-btn {
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.15);
          color: rgba(245,240,232,0.88);
          font-family: var(--font-body);
          font-size: 1rem;
          padding: 0.9rem 1.5rem;
          border-radius: var(--radius);
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          text-align: center;
        }
        .ls-wtg-option-btn:hover {
          background: rgba(212,43,30,0.25);
          border-color: var(--color-accent);
          color: #fff;
        }
        .ls-wtg-progress {
          font-size: 0.78rem;
          color: rgba(245,240,232,0.4);
          margin-bottom: 1.5rem;
          font-family: var(--font-body);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .ls-wtg-result {
          background: rgba(212,43,30,0.18);
          border: 1.5px solid rgba(212,43,30,0.4);
          border-radius: var(--radius);
          padding: 2rem;
          margin-bottom: 1.75rem;
        }
        .ls-wtg-result-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 0.75rem;
        }
        .ls-wtg-result-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          color: #fff;
          line-height: 1.3;
        }
        .ls-wtg-reset {
          background: none;
          border: 1.5px solid rgba(255,255,255,0.3);
          color: rgba(245,240,232,0.7);
          font-family: var(--font-body);
          font-size: 0.875rem;
          padding: 0.6rem 1.5rem;
          border-radius: var(--radius);
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .ls-wtg-reset:hover {
          border-color: rgba(255,255,255,0.6);
          color: #fff;
        }
      `}</style>

      <div className="ls-wtg-inner">
        <p className="ls-wtg-kicker">Not sure what to get?</p>
        <h2 className="ls-wtg-heading">We'll sort you out.</h2>
        <p className="ls-wtg-sub">Answer three quick questions. We'll tell you what to order.</p>

        {!done ? (
          <>
            <p className="ls-wtg-progress">Question {step + 1} of {questions.length}</p>
            <p className="ls-wtg-question">{currentQ.question}</p>
            <div className="ls-wtg-options">
              {currentQ.options.map((opt) => (
                <button key={opt} className="ls-wtg-option-btn" onClick={() => handleSelect(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="ls-wtg-result">
              <p className="ls-wtg-result-label">We reckon you should get</p>
              <p className="ls-wtg-result-text">{getRecommendation(answers)}</p>
            </div>
            <button className="ls-wtg-reset" onClick={handleReset}>Start again</button>
          </>
        )}
      </div>
    </section>
  );
}
