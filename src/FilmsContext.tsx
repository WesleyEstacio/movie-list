import { createContext, ReactNode, useEffect, useState } from "react";

interface Films {
    id: number,
    title: string,
    release_date: string,
    poster_path: string,
    vote_average: number
}

interface FilmsProviderProps {
    children: ReactNode
}

export const FilmsContext = createContext<Films[]>([]);

export function FilmsProvider({ children }: FilmsProviderProps) {
    const [films,setFilms] = useState<Films[]>([])

    useEffect( ()=> {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c908cc361daab221ef316ddff3c6e5dc&language=PT-BR')
        .then(response => response.json())
        .then(data => {
            setFilms(data.results)
        })
    }, [])

    return (
        <FilmsContext.Provider value={films}>
            {children}
        </FilmsContext.Provider>
    )
}