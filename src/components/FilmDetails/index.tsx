import { FilmDetailsHeader } from "../FilmDetailsHeader";
import { Squad } from "../Squad";
import { Trailer } from "../Trailer/Trailer";

interface FilmDetailsProps {
    details: {
        title: string,
        release_date: string,
        poster_path: string,
        overview: string,

        runtime: number,

        genres: [
            {
                name: string
            }
        ]
    }

    filmID: number
}

export function FilmDetails({ details, filmID }: FilmDetailsProps) {

    return (
        <>
            <FilmDetailsHeader details={details} />
            <Squad filmID={filmID} />
            <Trailer />
        </>
    )
}