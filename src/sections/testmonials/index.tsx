"use client";

import { useState } from 'react';
import testimonialsData from '@/data/testimonialsData';
import './testmonials.css';

export default function Testmonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev: any) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev: any) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="testimonials-title">
          Relatos de alguns pacientes <strong>atendidos</strong>
        </h2>
        <div className="testimonial-box">
          <div className="testimonial-avatars">
          </div>
          <div className="testimonial-content">
            <p className="quote">“{testimonialsData[currentIndex].quote}”</p>
            <p className="author">
              <strong>{testimonialsData[currentIndex].author}</strong>
              <br />
              paciente desde {testimonialsData[currentIndex].since}
            </p>
          </div>
          <div className="testimonial-nav">
            <button onClick={handlePrev} aria-label="Depoimento anterior">
              &uarr;
            </button>
            <button onClick={handleNext} aria-label="Próximo depoimento">
              &darr;
            </button>
          </div>
          <p className="testimonial-disclaimer">
            Utilizado nomes fictícios para preservar a identidade dos pacientes
          </p>
        </div>
      </div>
    </section>
  );
}