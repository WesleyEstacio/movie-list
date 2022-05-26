import { createContext, ReactNode, useEffect, useState } from "react";

interface Movies {
    id: number,
    title: string,
    release_date: string,
    poster_path: string,
    vote_average: number
}

interface MoviesProviderProps {
    children: ReactNode
}

export const MoviesContext = createContext<Movies[]>([]);

export function MoviesProvider({ children }: MoviesProviderProps) {
    const [movies,setMovies] = useState<Movies[]>([])

    useEffect( ()=> {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c908cc361daab221ef316ddff3c6e5dc&language=PT-BR')
        .then(response => response.json())
        .then(data => {
            setMovies(data.results)
        })
    }, [])

    return (
        <MoviesContext.Provider value={movies}>
            {children}
        </MoviesContext.Provider>
    )
}