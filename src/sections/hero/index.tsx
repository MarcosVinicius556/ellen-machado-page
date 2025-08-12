import Link from 'next/link';
import './hero.css';
import Image from 'next/image';

export default function Hero() {
    return(
        <section className="hero" id='hero'>
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="badge">Para você que deseja ser ouvido com empatia, cuidado e sem julgamentos</span>
                    <h1>Cuidar da mente<br />também é um ato de coragem</h1>
                    <p>Está em busca de um espaço acolhedor para se conhecer melhor?</p>
                    <Link href="#contact" className="btn solid">Agendar conversa</Link>
                </div>
                <div className="hero-image">
                    <Image
                        src="/images/brave.png"
                        alt="Ilustração de pessoas felizes"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}