import { Container, Content } from './styles'

interface FilmDetailsProps {
    details: {
        title: string,
        release_date: string,
        poster_path: string,
        overview: string,
        
        runtime: number,
    }
}

export function FilmDetailsHeader({ details }: FilmDetailsProps) {   

    return (
        <Container>
            <Content>
                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} /> 

                <section>
                    <h2>{details.title}</h2>
                    
                    <p>
                        FAIXA ETARIA  • 
                        {details.release_date} (BR)  •  
                        TIPO  • 
                        {details.runtime} Minutos
                    </p>

                    <article>
                        <h3>76%</h3>
                        <span>Avaliação dos usuários</span>
                    </article>

                    <h3>Sinopse</h3>
                    <p>{details.overview}</p>
                </section>
            </Content>
        </Container>
    )
}