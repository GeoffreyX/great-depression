import React, { useState } from 'react';
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slide from '../Slide/Slide';
import FadeIn from 'react-fade-in';

import './Slideshow.css';

export default function Slideshow(props) {
    const [value, setValue] = useState(0);

    return (
        <FadeIn className='Slideshow' delay='100' transitionDuration='450'>
            <Dots
                value={value}
                onChange={setValue}
                thumbnails={props.dates}
            />
            <div className='Carousel'>
                <Carousel 
                    value={value}
                    onChange={setValue}
                >
                    {props.slides.map((slideProps) => (
                        <Slide {...slideProps} />
                    ))}
                </Carousel>
            </div>
        </FadeIn>
    );
};