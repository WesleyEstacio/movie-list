import { MovieDetailsHeader } from "../MovieDetailsHeader";
import { Squad } from "../Squad";
import { Trailer } from "../Trailer";

interface MovieDetailsProps {
    details: {
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

    movieID: number
}

export function MovieDetails({ details, movieID }: MovieDetailsProps) {

    return (
        <>
            <MovieDetailsHeader details={details} />
            <Squad movieID={movieID} />
            <Trailer movieID={movieID} details={details} />
        </>
    )
}