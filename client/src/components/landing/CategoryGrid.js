import React from 'react';
import {Link} from 'react-router-dom';

import Stack from '@mui/material/Stack';

import { useTheme } from 'styled-components';


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

const images = [{id: 'arctic', src: arctic, alt: 'Arctic', category: 'Arctic'}, {
    id: 'beach', src: beach, alt: 'Beach', category: 'Beach'
}, {id: 'cabins', src: cabins, alt: 'Cabins', category: 'Cabana'}, {
    id: 'castles', src: castles, alt: 'Castles', category: 'Castle'
}, {id: 'trending', src: trending, alt: 'Trending', category: 'Trading'}, {
    id: 'beachFront', src: beachFront, alt: 'Beach Front', category: 'Villa'}]

// }, {id: 'countrySide', src: countrySide, alt: 'Countryside'}, {id: 'domes', src: domes, alt: 'Domes'}, {
//     id: 'farms', src: farms, alt: 'Farms'
// }, {id: 'lakes', src: lakes, alt: 'Lakes'}, {
//     id: 'nationalParks', src: nationalParks, alt: 'National Parks'
// }, {id: 'surfing', src: surfing, alt: 'Surfing'}, {id: 'tropical', src: tropical, alt: 'Tropical'},];


export default function CategoryGrid() {

    const theme = useTheme();

    return (

        <div id="grid">
            {images.map((image) => (
                <Link to={`/properties?category=${image.category}`} key={image.id}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} id={image.id} >
                        <img
                            className={`w-50px inline-block p-2 cursor-pointer hover:scale-110 ease-in-out duration-300 ${
                                theme === 'dark' ? 'invert-image' : ''
                            }`}
                            src={image.src}
                            alt={image.alt}
                        />
                    </Stack>
                </Link>
            ))}
        </div>


        // <div id="grid">
        //     {images.map((image) => (
        //         <Link to={`/properties?category=${image.category}`} key={image.id}>
        //             <button className="span" id={image.id}>
        //                 <img
        //                     className={`w-50px inline-block p-2 cursor-pointer hover:scale-110 ease-in-out duration-300 ${
        //                         theme === 'dark' ? 'invert-image' : ''
        //                     }`}
        //                     src={image.src}
        //                     alt={image.alt}
        //                 />
        //             </button>
        //         </Link>
        //     ))}
        // </div>

    );


}

