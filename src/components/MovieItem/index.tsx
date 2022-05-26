interface MovieItemProps {
    movies: {
        title: string,
        release_date: string,
        poster_path: string,
        id: number,
    }

    onOpenMovieDetail: () => void
    setMovieID: (id: number) => void
}

export function MovieItem({ movies, onOpenMovieDetail, setMovieID }: MovieItemProps) {

    function catchID() {
        setMovieID(movies.id)
        onOpenMovieDetail()
    }

    return (
        <article 
            onClick={catchID}
        >
                <a><img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Capa do filme" /></a>
                <p>{movies.title}</p>
                <span>{new Intl.DateTimeFormat('pt-BR', { day:'numeric', month:'short', year:'numeric' }).format(new Date(movies.release_date))}</span>
        </article>
    )
}