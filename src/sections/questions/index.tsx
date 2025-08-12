"use client";

import faqData from '@/data/faqData';
import './questions.css';
import { useState } from 'react';

export default function FrequentlyQuestions() {
  const [activeId, setActiveId] = useState<number | null>(2);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="frequently-questions-section" id="questions">
      <div className="frequently-questions-container">
        <div className="frequently-questions-image">
          <img src="/images/frequently_questions.png" alt="Pessoas com dúvidas" />
        </div>
        <div className="frequently-questions-content">
          <h2>
            <span>Dúvidas frequentes</span>
          </h2>
          {faqData.map(({ id, icon, question, answer }) => (
            <div
                key={id}
                className={`feature-card ${activeId === id ? "active" : ""}`}
                onClick={() => toggle(id)}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(id);
                    }
                }}
                role="button"
                aria-expanded={activeId === id}
            >
                <span className="icon">{icon}</span>
                <div>
                    <p>
                    <strong>{question}</strong>
                    </p>
                    {activeId === id && <p className="subtext">{answer}</p>}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}