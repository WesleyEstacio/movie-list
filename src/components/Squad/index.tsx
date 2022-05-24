import { Slider } from "../Slider";
import { Container } from "./styles";

interface SquadProps {
    credits: {
        original_name: string,
        character: string,
        profile_path: string,
    }
}

export function Squad({credits}: SquadProps) {

    return (
        <Container>
            <h1>Elenco original </h1>
            <Slider credits={credits}/>
        </Container>
    )
}