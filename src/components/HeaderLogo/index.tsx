import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderLogoProps {
    onCloseMovieDetail: () => void
}

export function HeaderLogo({ onCloseMovieDetail }: HeaderLogoProps ) {
    return (
        <Container>
            <Content>
                <img 
                    src={logo} 
                    alt="TMDB Logo"
                    onClick={onCloseMovieDetail} 
                />
            </Content>
        </Container>  
    )
}