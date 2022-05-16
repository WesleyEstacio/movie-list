import FilmImg from '../../assets/img.png'

export function FilmItem() {
    return (
        <article>
                <a><img src={FilmImg} alt="Capa do filme" /></a>
                <p>Espíritos Obscuros</p>
                <span>24 NOV 2021</span>
        </article>
    )
}