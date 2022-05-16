import { Container, Content } from './styles'

export function HeaderContent() {
    return (
        <Container>
            <Content>
                <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>

                <article>
                    <p>FILTRE POR:</p>

                    <button>Ação</button>
                    <button>Aventura</button>
                    <button>Animação</button>
                    <button>Comédia</button>
                    <button>Crime</button>
                    <button>Documentário</button>
                    <button>Drama</button>
                    <button>Família</button>
                    <button>Fantasia</button>
                    <button>História</button>
                    <button>Terror</button>
                    <button>Música</button>
                    <button>Mistério</button>
                    <button>Romance</button>
                    <button>Ficção científica</button>
                    <button>Cinema TV</button>
                    <button>Thriller</button>
                    <button>Guerra</button>
                    <button>Faroeste</button>
                </article>
            </Content>
        </Container>  
    )
}