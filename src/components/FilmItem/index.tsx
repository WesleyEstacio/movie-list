import FilmImg from '../../assets/img.png'

interface FilmItemProps {
    films: {
        title: string,
        release_date: string,
    }
}

export function FilmItem({ films }:FilmItemProps) {
    return (
        <article>
                <a><img src={FilmImg} alt="Capa do filme" /></a>
                <p>{films.title}</p>
                <span>{films.release_date}</span>
        </article>
    )
}