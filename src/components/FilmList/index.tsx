import { useContext } from "react";
import { FilmsContext } from "../../FilmsContext";
import { FilmItem } from "../FilmItem";
import { Container } from "./styles";

interface FilmListProps {
    onOpenFilmDetail: () => void
}

export function FilmList({ onOpenFilmDetail }: FilmListProps) {

    const films = useContext(FilmsContext)

    return (
        <Container>
            {films.map(films => <FilmItem key={films.id} films={films} onOpenFilmDetail={onOpenFilmDetail} />)}
        </Container>
    )
}