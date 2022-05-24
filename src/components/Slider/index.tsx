import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import logo from '../../assets/teste.png'

interface SliderProps {
    credits: {
        original_name: string,
        character: string,
        profile_path: string,
    }
}

export function Slider({credits}: SliderProps) {

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 6 },
    };
    
    const items = [
        <div className="item carousel" data-value="1"><img src={`https://image.tmdb.org/t/p/w500/${credits.profile_path}`} /> 
            <p>{credits.original_name}</p> 
            <p>{credits.character}</p>
        </div>,
    ];

    return (
        <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="default,alternate"
                autoPlay={true}
                infinite={true}
                autoPlayInterval={2000}
            />
    )
}