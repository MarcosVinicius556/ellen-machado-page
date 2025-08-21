import React from "react";
import Image from "next/image";
import "./social.css";

export default function Social() {
  return (
    <section className="social-section" id="social">
        <h2 className="social-title">
            Redes Sociais
        </h2>
        
        <div className="social-container">
            <p className="social-subtext">
                <h3>Vamos nos conectar?</h3>
                <br />
                Se você quer acompanhar conteúdos sobre bem-estar emocional, autoconhecimento e desenvolvimento pessoal, dê uma olhadinha nas minhas redes sociais!
                <br />
                <br />
                Lá compartilho dicas, reflexões e novidades para apoiar sua jornada de crescimento e equilíbrio.
            </p>

            <div className="social-links">
                <a href="https://www.instagram.com/ellenmachado_psi" target='_blank' className="social-card">
                    <Image
                    src="/images/instagram_profile.jpg"
                    alt="Instagram Ellen Santos Machado"
                    width={130}
                    height={130}
                    className="social-avatar"
                    />
                    <div className="social-info">
                        <h3>Instagram</h3>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/ellen-santos-machado" target='_blank' className="social-card">
                    <Image
                        src="/images/linkedin_profile.jpg"
                        alt="LinkedIn Ellen Santos Machado"
                        width={130}
                    height={130}
                        className="social-avatar"
                        />
                    <div className="social-info">
                        <h3>LinkedIn</h3>
                    </div>
                </a>

                <a href="https://api.whatsapp.com/send?phone=5549988401516&text=Ol%C3%A1%2C%20gostaria%20de%20entender%20melhor%20como%20funciona%20suas%20sess%C3%B5es.%20Podemos%20marcar%20um%20hor%C3%A1rio%20para%20conversar%3F" target='_blank' className="social-card">
                        <Image
                        src="/images/logo.jpeg"
                        alt="WhatsApp Ellen Santos Machado"
                        width={130}
                        height={130}
                        className="social-avatar"
                        />
                    <div className="social-info">
                        <h3>WhatsApp</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>
  );
}
