import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import logo from '../../assets/teste.png'

interface Credits {
    original_name: string,
    character: string,
    profile_path: string,
}

interface SliderProps {
    filmID: number
}

export function Slider({ filmID }: SliderProps) {

    const [credits, setCredits] = useState<Credits[]>([])

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${filmID}/credits?api_key=c908cc361daab221ef316ddff3c6e5dc`)
        .then(response => response.json())
        .then(data => {
            setCredits(data.cast)
        })
    }, [filmID])

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 6 },
    };
    
    const items = credits.map(actors => 
        <div className="item carousel" data-value="1"><img src={`https://image.tmdb.org/t/p/w500/${actors.profile_path}`} /> 
            <p>{actors.original_name}</p> 
            <p>{actors.character}</p>
        </div>,
    );

    return (
        <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="default"
                autoPlay={true}
                infinite={true}
                autoPlayInterval={2000}
            />
    )
}