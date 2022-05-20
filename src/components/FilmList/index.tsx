import { useContext } from "react";
import { FilmsContext } from "../../FilmsContext";
import { FilmItem } from "../FilmItem";
import { Container } from "./styles";

export function FilmList() {

    const films = useContext(FilmsContext)

    return (
        <Container>
            {films.map(films => <FilmItem key={films.id} films={films}/>)}
        </Container>
    )
}