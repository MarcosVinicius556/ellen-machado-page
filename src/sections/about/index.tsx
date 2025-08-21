import React from "react";
import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-name">ELLEN SANTOS MACHADO</h2>
          <p className="about-role">PSICÓLOGA</p>
        </div>

        <div className="about-photo">
          <Image
            src="/images/profile.jpg"
            alt="Foto de Guilherme Pilger, corretor de imóveis"
            width={320}
            height={400}
            className="photo"
            priority
          />
        </div>

        <div className="about-right">
          <h3 className="about-title">
            Um Espaço Para Crescer e se Reconectar
          </h3>

          <p className="about-text">
            <strong>Ellen Santos Machado</strong> é psicóloga em Lages-SC e se destaca pelo seu jeito humano e acessível de conduzir o processo terapêutico. Com foco no atendimento de adolescentes e adultos, Ellen ajuda pessoas a lidarem com a ansiedade, desenvolverem autoestima e resgatarem o amor-próprio.
          </p>

          <p className="about-text">
            Com uma linguagem clara e acolhedora, busca tornar a psicologia mais próxima e prática no dia a dia, oferecendo um espaço seguro para quem deseja cuidar da saúde emocional e encontrar equilíbrio entre vida pessoal e profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
