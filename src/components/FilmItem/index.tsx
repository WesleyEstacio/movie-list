interface FilmItemProps {
    films: {
        title: string,
        release_date: string,
        poster_path: string,
        id: number,
    }

    onOpenFilmDetail: () => void
    setFilmID: (id: number) => void
}

export function FilmItem({ films, onOpenFilmDetail, setFilmID }:FilmItemProps) {

    function catchId() {
        setFilmID(films.id)
        onOpenFilmDetail()
    }

    return (
        <article 
            onClick={catchId}
        >
                <a><img src={`https://image.tmdb.org/t/p/w500/${films.poster_path}`} alt="Capa do filme" /></a>
                <p>{films.title}</p>
                <span>{new Intl.DateTimeFormat('pt-BR', { day:'numeric', month:'short', year:'numeric' }).format(new Date(films.release_date))}</span>
        </article>
    )
}