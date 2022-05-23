import { useContext, useState } from "react";
import { FilmsContext } from "../../FilmsContext";
import { FilmDetails } from "../FilmDetails";
import { FilmItem } from "../FilmItem";
import { Container } from "./styles";

interface FilmListProps {
    onOpenFilmDetail: () => void,
    isOpenDetail: boolean
}

export function FilmList({ onOpenFilmDetail, isOpenDetail }: FilmListProps) {

    const films = useContext(FilmsContext)

    return (
        <>
        {!isOpenDetail
            ?
                <Container>
                    {films.map(films => <FilmItem key={films.id} films={films} onOpenFilmDetail={onOpenFilmDetail} />)}
                </Container>
            :
                <FilmDetails />
        }
        </>
    )
}