import { Container, Content } from './styles'

interface FilmDetailsProps {
    details: {
        title: string,
        release_date: string,
        poster_path: string,
        overview: string,
        vote_average: number
        
        runtime: number,

        genres: [
            {
                name: string
            }
        ]
    }
}

export function FilmDetailsHeader({ details }: FilmDetailsProps) {   

    const date = new Date(details.release_date)

    return (
        <Container>
            <Content>
                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} /> 

                <section>
                    <h2>{details.title}</h2>
                    
                    <p>
                        {new Intl.DateTimeFormat().format(date)} (BR) {details.genres.map(genres => <span key={genres.name}> {genres.name}, </span>)} {details.runtime} Minutos.
                    </p>

                    <article>
                        <h3>{details.vote_average}</h3>
                        <span>Avaliação dos usuários</span>
                    </article>

                    <h3>Sinopse</h3>
                    <p>{details.overview}</p>
                </section>
            </Content>
        </Container>
    )
}