import { useState } from "react"

interface FilmItemProps {
    films: {
        title: string,
        release_date: string,
        poster_path: string,
        id: number,
    }

    onOpenFilmDetail: () => void
}

export function FilmItem({ films, onOpenFilmDetail }:FilmItemProps) {

    const [filmDetails, setFilmDetails] = useState(films.id)

    function handleOpenFilmDetails() {
        setFilmDetails(films.id)
        console.log(filmDetails)
    }

    return (
        <article 
            onClick={onOpenFilmDetail}
        >
                <a><img src={`https://image.tmdb.org/t/p/w500/${films.poster_path}`} alt="Capa do filme" /></a>
                <p>{films.title}</p>
                <span>{new Intl.DateTimeFormat('pt-BR', { day:'numeric', month:'short', year:'numeric' }).format(new Date(films.release_date))}</span>
        </article>
    )
}