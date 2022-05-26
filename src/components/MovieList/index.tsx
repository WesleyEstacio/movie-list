import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../MoviesContext";
import { MovieDetails } from "../MovieDetails";
import { MovieItem } from "../MovieItem";
import { Container } from "./styles";

interface MovieListProps {
    onOpenMovieDetail: () => void,
    isOpenDetail: boolean,
}

interface Details {
    title: string,
    release_date: string,
    poster_path: string,
    overview: string,
    vote_average: number,
    backdrop_path: string,

    runtime: number,

    genres: [
        {
            name: string
        }
    ]
}

export function MovieList({ onOpenMovieDetail, isOpenDetail }: MovieListProps) {

    const movies = useContext(MoviesContext)
    const [movieID, setMovieID] = useState(675353)
    const [details, setDetails] = useState<Details>({} as Details)
    
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=c908cc361daab221ef316ddff3c6e5dc&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            setDetails(data)
        })
    }, [movieID])

    return (
        <>
        {!isOpenDetail
            ?
                <Container>
                    {movies.map(movies => 
                        <MovieItem 
                            key={movies.id} 
                            movies={movies} 
                            onOpenMovieDetail={onOpenMovieDetail} 
                            setMovieID={setMovieID}
                        />)  
                    }
                </Container>
            :
                <MovieDetails details={details} movieID={movieID} />
        }
        </>
    )
}