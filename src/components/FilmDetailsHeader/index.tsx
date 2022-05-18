import foto from '../../assets/teste.png'
import { Container, Content } from './styles'

export function FilmDetailsHeader() {
    return (
        <Container>
            <Content>
                <img src={foto} /> 

                <section>
                    <h2>Deadpool (2016)</h2>
                    
                    <p>16 anos  • 11/02/2016 (BR)  •  Ação, Aventura, Comédia, Ficção científica • 1h 47m</p>

                    <article>
                        <h3>76%</h3>
                        <span>Avaliação dos usuários</span>
                    </article>

                    <h3>Sinopse</h3>
                    <p>Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.</p>

                    <article>
                        <div>
                            <h4>Rob Liefeld</h4>
                            <p>Characters</p>
                        </div>

                        <div>
                            <h4>Rob Liefeld</h4>
                            <p>Characters</p>
                        </div>

                        <div>
                            <h4>Rob Liefeld</h4>
                            <p>Characters</p>
                        </div>

                        <div>
                            <h4>Rob Liefeld</h4>
                            <p>Characters</p>
                        </div>

                        <div>
                            <h4>Rob Liefeld</h4>
                            <p>Characters</p>
                        </div>
                    </article>
                </section>
            </Content>
        </Container>
    )
}