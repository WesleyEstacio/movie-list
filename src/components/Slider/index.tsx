import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

interface Credits {
    original_name: string,
    character: string,
    profile_path: string,
}

interface SliderProps {
    movieID: number
}

export function Slider({ movieID }: SliderProps) {

    const [credits, setCredits] = useState<Credits[]>([])

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=c908cc361daab221ef316ddff3c6e5dc`)
        .then(response => response.json())
        .then(data => {
            setCredits(data.cast)
        })
    }, [movieID])

    

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 6 },
    };
    
    const items = credits.map(actors => 
        <div className="item carousel" data-value="1">
            <img src={`https://image.tmdb.org/t/p/w500/${actors.profile_path}`} alt="Foto do Ator/Atriz" /> 
            <p>{actors.original_name}</p> 
            <p>{actors.character}</p>
        </div>,
    );

    return (
        <AliceCarousel
                items={items}
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlayInterval={2000}
            />
    )
}