import { FilmDetailsHeader } from "../FilmDetailsHeader";
import { Squad } from "../Squad";
import { Trailer } from "../Trailer/Trailer";

interface FilmDetailsProps {
    details: {
        title: string,
        release_date: string,
        poster_path: string,
        overview: string,

        runtime: number
    }
}

export function FilmDetails({ details }: FilmDetailsProps) {
    
    return (
        <>
            <FilmDetailsHeader details={details}/>
            <Squad />
            <Trailer />
        </>
    )
}