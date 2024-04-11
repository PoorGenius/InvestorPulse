import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Card from "./Card";
import { CARDS_DATA } from '../constants';

const CardsContainer = () => {
    return (
        <section className="w-full h-full relative">
            <ReactCardCarousel
                autoplay={true}
                autoplay_speed={2500}
                spread={"wide"}

            >
                {CARDS_DATA.map((cardData, index) => (
                    <div key={index}>
                        <Card title={cardData.title} calculationType={cardData.calculationType} data={cardData.data} />
                    </div>
                ))}
            </ReactCardCarousel>
        </section>
    );
}

export default CardsContainer;
