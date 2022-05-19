import { FilmDetailsHeader } from "../FilmDetailsHeader";
import { Squad } from "../Squad";
import { Trailer } from "../Trailer/Trailer";

export function FilmDetails() {
    return (
        <>
            <FilmDetailsHeader />
            <Squad />
            <Trailer />
        </>
    )
}