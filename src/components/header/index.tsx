"use client";
import { useState } from "react";
import Link from 'next/link';
import './header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container">
                <div className="logo-container">
                    <div className="initials">
                        <span className="e">E</span><span className="m">M</span>
                    </div>
                    <div className="name">ELLEN MACHADO</div>
                    <div className="profession">PSICÓLOGA</div>
                    <div className="register">12/27784</div>
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    ☰
                </button>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link href="#hero" onClick={() => setMenuOpen(false)}>Início</Link>
                    <Link href="#about" onClick={() => setMenuOpen(false)}>Sobre</Link>
                    <Link href="#testimonials" onClick={() => setMenuOpen(false)}>Depoimentos</Link>
                    <Link href="#questions" onClick={() => setMenuOpen(false)}>Dúvidas Frequentes</Link>
                    <Link href="#articles" onClick={() => setMenuOpen(false)}>Artigos</Link>
                    <Link href="#social" onClick={() => setMenuOpen(false)}>Redes Sociais</Link>
                </nav>

                <div className={`nav-actions ${menuOpen ? "active" : ""}`}>
                    <Link href="#contact" className="btn outline" onClick={() => setMenuOpen(false)}>Entrar em Contato</Link>
                </div>
            </div>
        </header>
    )
}
