import { FilmItem } from "../FilmItem";
import { Container } from "./styles";

export function FilmList() {

    function handleFetchApi() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c908cc361daab221ef316ddff3c6e5dc')
        .then(response => response.json())
        .then(data => console.log(data))
    }

    
    return (
        <Container>
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <button onClick={handleFetchApi}>Teeste</button>
        </Container>
    )
}