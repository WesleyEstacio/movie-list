import { useContext, useEffect, useState } from "react";
import { FilmsContext } from "../../FilmsContext";
import { FilmDetails } from "../FilmDetails";
import { FilmItem } from "../FilmItem";
import { Container } from "./styles";

interface FilmListProps {
    onOpenFilmDetail: () => void,
    isOpenDetail: boolean,
}

export function FilmList({ onOpenFilmDetail, isOpenDetail }: FilmListProps) {

    const films = useContext(FilmsContext)
    const [filmID, setFilmID] = useState(0)
    const [details, setDetails] = useState()

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${filmID}?api_key=c908cc361daab221ef316ddff3c6e5dc`)
        .then(response => response.json())
        .then(data => {
            setDetails(data)
            console.log(data)
        })
    }, [filmID])

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
                <FilmDetails />
        }
        </>
    )
}