import { Slider } from "../Slider";
import { Container } from "./styles";

interface SquadProps {
    filmID: number
}

export function Squad({ filmID }: SquadProps) {

    return (
        <Container>
            <h1>Elenco original </h1>
            <Slider filmID={filmID}/>
        </Container>
    )
}