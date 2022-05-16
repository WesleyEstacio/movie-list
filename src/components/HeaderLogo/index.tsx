import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function HeaderLogo() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="TMDB Logo" />
            </Content>
        </Container>  
    )
}