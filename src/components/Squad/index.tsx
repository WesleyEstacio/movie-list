import { Slider } from "../Slider";
import { Container } from "./styles";

interface SquadProps {
    movieID: number
}

export function Squad({ movieID }: SquadProps) {

    return (
        <Container>
            <h1>Elenco original </h1>
            <Slider movieID={movieID}/>
        </Container>
    )
}