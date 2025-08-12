import './footer.css';

export default function Footer() {
    return(
        <footer className="footer">
        <hr />

        <div className="container footer-bottom">
            <div className="footer-links">

                <div className="footer-col">
                    <h4>Meus Contatos</h4>
                    <a href="https://w.app/ellen-santos-machado" target='_blank'>Whatsapp</a>
                    <a href="https://www.instagram.com/ellenmachado_psi" target='_blank'>Instagram</a>
                    <a href="https://www.facebook.com/ellenmachadopsicologa" target='_blank'>Facebook</a>
                    <a href="https://www.linkedin.com/in/ellen-santos-machado" target='_blank'>Linkedin</a>
                </div>

                <div className="footer-col">
                    <h4>Atendimento</h4>
                    <p>Online e Presencial: seg. a sex. das 08h às 20h e sab. 08h às 13h</p>
                    
                </div>

                <div className="footer-col">
                        <h4>Endereço do consultório:</h4>
                        <p>Clínica PsicoSaúde</p>
                        <p>R. Lídio Réis, 114 - Centro, Lages - SC, 88502-150</p>
                </div>

            </div>
            <div className="footer-copy">
                <p>
                    © 2025 Marcos Vinicius Angeli Costa - Todos os direitos reservados.
                </p>
            </div>
        </div>
    </footer>
    )
}