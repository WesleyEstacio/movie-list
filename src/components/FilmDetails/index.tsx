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

    credits: {
        original_name: string,
        character: string,
        profile_path: string,
    }
}

export function FilmDetails({ details, credits }: FilmDetailsProps) {

    return (
        <>
            <FilmDetailsHeader details={details}/>
            <Squad credits={credits}/>
            <Trailer />
        </>
    )
}