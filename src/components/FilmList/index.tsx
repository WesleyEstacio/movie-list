import { useContext, useEffect, useState } from "react";
import { FilmsContext } from "../../FilmsContext";
import { FilmDetails } from "../FilmDetails";
import { FilmItem } from "../FilmItem";
import { Container } from "./styles";

interface FilmListProps {
    onOpenFilmDetail: () => void,
    isOpenDetail: boolean,
}

interface Details {
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

export function FilmList({ onOpenFilmDetail, isOpenDetail }: FilmListProps) {

    const films = useContext(FilmsContext)
    const [filmID, setFilmID] = useState(675353)
    const [details, setDetails] = useState<Details>({} as Details)
    
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${filmID}?api_key=c908cc361daab221ef316ddff3c6e5dc&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            setDetails(data)
        })
    }, [filmID])

    console.log(films)

    return (
        <>
        {!isOpenDetail
            ?
                <Container>
                    {films.map(films => 
                        <FilmItem 
                            key={films.id} 
                            films={films} 
                            onOpenFilmDetail={onOpenFilmDetail} 
                            setFilmID={setFilmID}
                        />)  
                    }
                </Container>
            :
                <FilmDetails details={details} filmID={filmID} />
        }
        </>
    )
}