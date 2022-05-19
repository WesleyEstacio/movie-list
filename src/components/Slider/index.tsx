import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import logo from '../../assets/teste.png'

export function Slider() {

    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 6 },
    };
    
    const items = [
        <div className="item carousel" data-value="1"><img src={logo} /> <p>Ryan Reynolds</p> <p>Wade Wilson / Deadpool</p></div>,
        <div className="item carousel" data-value="1"><img src={logo} /> <p>Ryan Reynolds</p> <p>Wade Wilson / Deadpool</p></div>,
        <div className="item carousel" data-value="1"><img src={logo} /> <p>Ryan Reynolds</p> <p>Wade Wilson / Deadpool</p></div>,
        <div className="item carousel" data-value="1"><img src={logo} /> <p>Ryan Reynolds</p> <p>Wade Wilson / Deadpool</p></div>,
        <div className="item carousel" data-value="1"><img src={logo} /> <p>Ryan Reynolds</p> <p>Wade Wilson / Deadpool</p></div>,
        <div className="item carousel" data-value="1"><img src={logo} /> <p>Ryan Reynolds</p> <p>Wade Wilson / Deadpool</p></div>,
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