import { useEffect, useState } from "react";
import { FilmItem } from "../FilmItem";
import { Container } from "./styles";

interface Films {
    title: string,
    release_date: string,
    poster_path: string,
}

export function FilmList() {

    const [films,setFilms] = useState<Films[]>([])

    useEffect( ()=> {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c908cc361daab221ef316ddff3c6e5dc')
        .then(response => response.json())
        .then(data => {
            setFilms(data.results)
        })
    }, [])

    return (
        <Container>
            {films.map(films => <FilmItem key={films.title} films={films}/>)}
        </Container>
    )
}