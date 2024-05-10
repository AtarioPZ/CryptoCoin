"use client";

import React, { useEffect, useState } from 'react';
import EmblaCarousel from 'embla-carousel-react';
import './carousel.css'; // CSS file for additional styling

interface Section {
    sentiment: string;
    content: string;
    description: string;
}

interface CarouselProps {
    sections: Section[];
}

const EmblaCarouselComponent = ({ sections }: CarouselProps) => {
    const [emblaRef, emblaApi] = EmblaCarousel({ align: 'start', slidesToScroll: 2 });

    const goToNextSlide = () => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    };

    const goToPrevSlide = () => {
        if (emblaApi) {
            emblaApi.scrollPrev();
        }
    };

    return (
        <section className="carousel-container">
            <button className="carousel-control prev" onClick={goToPrevSlide}>
                &#8592; {/* Left arrow */}
            </button>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {sections.map((section, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="carousel-header">
                                <h2>{section.sentiment}</h2>
                            </div>
                            <div className="carousel-details">
                                <p>{section.content}</p>
                                <p>{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="carousel-control next" onClick={goToNextSlide}>
                &#8594; {/* Right arrow */}
            </button>
        </section>
    );
};

export default EmblaCarouselComponent;
