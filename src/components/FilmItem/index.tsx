import { useState } from "react"

interface FilmItemProps {
    films: {
        title: string,
        release_date: string,
        poster_path: string,
        id: number,
    }
}

export function FilmItem({ films }:FilmItemProps) {

    const [filmDetails, setFilmDetails] = useState(0)

    function handleOpenFilmDetails() {
        setFilmDetails(films.id)
    }

    return (
        <article 
            onClick={handleOpenFilmDetails}
        >
                <a><img src={`https://image.tmdb.org/t/p/w500/${films.poster_path}`} alt="Capa do filme" /></a>
                <p>{films.title}</p>
                <span>{new Intl.DateTimeFormat('pt-BR', { day:'numeric', month:'short', year:'numeric' }).format(new Date(films.release_date))}</span>
        </article>
    )
}