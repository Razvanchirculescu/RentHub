import React from 'react';
import { Link } from 'react-router-dom';

import arctic from '../../images/categoryGrid/arctic.png';
import beachFront from '../../images/categoryGrid/beachFront.png';
import beach from '../../images/categoryGrid/beach.png';
import cabins from '../../images/categoryGrid/cabins.png';
import castles from '../../images/categoryGrid/castles.png';
import countrySide from '../../images/categoryGrid/countryside.png';
import domes from '../../images/categoryGrid/domes.png';
import farms from '../../images/categoryGrid/farms.png';
import lakes from '../../images/categoryGrid/lakes.png';
import nationalParks from '../../images/categoryGrid/nationalParks.png';
import surfing from '../../images/categoryGrid/surfing.png';
import trending from '../../images/categoryGrid/trending.png';
import tropical from '../../images/categoryGrid/tropical.png';

import './CategoryGrid.css';

const images = [
    { id: 'arctic', src: arctic, alt: 'Arctic', category: 'Arctic' },
    { id: 'beach', src: beach, alt: 'Beach', category: 'Beach' },
    { id: 'cabins', src: cabins, alt: 'Cabins', category: 'Cabana' },
    { id: 'castles', src: castles, alt: 'Castles', category: 'Castle' },
    { id: 'trending', src: trending, alt: 'Trending', category: 'Trading' },
    { id: 'beachFront', src: beachFront, alt: 'Beach Front', category: 'Villa' },
    { id: 'countrySide', src: countrySide, alt: 'Countryside' },
    { id: 'domes', src: domes, alt: 'Domes' },
    { id: 'farms', src: farms, alt: 'Farms' },
    { id: 'lakes', src: lakes, alt: 'Lakes' },
    { id: 'nationalParks', src: nationalParks, alt: 'National Parks' },
    { id: 'surfing', src: surfing, alt: 'Surfing' },
    { id: 'tropical', src: tropical, alt: 'Tropical' },
];

function handleClick(event) {
    console.log(`Button with id "${event.target.id}" was clicked!`);
}

export default function CategoryGrid() {
    return (
        <div id="grid">
            {images.map((image) => (
                <Link to={`/properties?category=${image.category}`} key={image.id}>
                    <button className="span" id={image.id} onClick={handleClick}>
                        <img src={image.src} alt={image.alt} />
                    </button>
                </Link>
            ))}
        </div>
    );
}

