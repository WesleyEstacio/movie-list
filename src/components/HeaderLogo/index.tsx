import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderLogoProps {
    onCloseFilmDetail: () => void
}

export function HeaderLogo({ onCloseFilmDetail }: HeaderLogoProps ) {
    return (
        <Container>
            <Content>
                <img 
                    src={logo} 
                    alt="TMDB Logo"
                    onClick={onCloseFilmDetail} 
                />
            </Content>
        </Container>  
    )
}