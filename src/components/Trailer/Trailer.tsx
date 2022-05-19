import { Container } from "./styles";
import logo from '../../assets/trailer.png'

export function Trailer() {
    return (
        <Container>
            <h1>Trailer</h1>

            <img src={logo} />
        </Container>
    )
}