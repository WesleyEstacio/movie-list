interface FilmItemProps {
    films: {
        title: string,
        release_date: string,
        poster_path: string,
    }
}

export function FilmItem({ films }:FilmItemProps) {
    return (
        <article>
                <a><img src={`https://image.tmdb.org/t/p/w500/${films.poster_path}`} alt="Capa do filme" /></a>
                <p>{films.title}</p>
                <span>{new Intl.DateTimeFormat('pt-BR', { day:'numeric', month:'short', year:'numeric' }).format(new Date(films.release_date))}</span>
        </article>
    )
}