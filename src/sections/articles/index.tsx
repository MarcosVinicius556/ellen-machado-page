import './articles.css';

export default function Articles() {
    return(
        <section className="section-artigos" id='articles'>
            <div className="container">
                <div className="artigo-destaque">
                    <img src="/images/posts/post_round_six.jpg" alt="Destaque" />
                    <div className="conteudo">
                        <span className="tempo">8 min de leitura</span>
                        <h3>Round 6 - Mas na visão de uma psicóloga</h3>
                        <p>Neste post quis compartilhar algumas de minhas impressões ao assistir a série Round 6.</p>
                        <a href="https://www.instagram.com/p/DMxjHyRsHyq/" target='_blank'>Leia mais →</a>
                    </div>
                </div>

                <div className="artigos-recentes">
                    <div className="card">
                        <img src="/images/posts/post_ansiedade.webp" alt="Imagem explicativa sobre ansiedade" />
                        <div className="conteudo">
                            <span className="tempo">4 min de leitura</span>
                            <h4>Ansiedade e como lidar com ela</h4>
                            <a href="https://www.instagram.com/p/DM9H_kwIRxc/" target='_blank'>Leia mais →</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/posts/post_stress.webp" alt="Imagem explicativa sobre estresse" />
                        <div className="conteudo">
                            <span className="tempo">2 min de leitura</span>
                            <h4>Estresse - Sinais que podem te ajudar a entender o que está sentindo</h4>
                            <a href="https://www.instagram.com/p/DK-uuEnvuAl/" target='_blank'>Leia mais →</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/images/posts/post_saude_mental.jpg" alt="Imagem falando sobre saúde mental" />
                        <div className="conteudo">
                            <span className="tempo">2 min de leitura</span>
                            <h4>Dicas de como fortalecer sua saúde mental</h4>
                            <a href="https://www.instagram.com/p/DKKNqbuuS5Q/" target='_blank'>Ler Mais →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}