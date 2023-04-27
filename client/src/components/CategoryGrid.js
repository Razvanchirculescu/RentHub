import arctic from "../images/categoryGrid/arctic.png"
import beachFront from "../images/categoryGrid/beachFront.png"
import beach from "../images/categoryGrid/beach.png"
import cabins from "../images/categoryGrid/cabins.png"
import castles from "../images/categoryGrid/castles.png"
import countrySide from "../images/categoryGrid/countryside.png"
import domes from "../images/categoryGrid/domes.png"
import farms from "../images/categoryGrid/farms.png"
import lakes from "../images/categoryGrid/lakes.png"
import nationalParks from "../images/categoryGrid/nationalParks.png"
import surfing from "../images/categoryGrid/surfing.png"
import trending from "../images/categoryGrid/trending.png"
import tropical from "../images/categoryGrid/tropical.png"
import { Link } from "react-router-dom"

import './CategoryGrid.css';

import React from 'react';

function handleClick(event) {
    console.log(`Button with id "${event.target.id}" was clicked!`);
}

const buttons = document.querySelectorAll("#grid button");
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});


export default function CategoryGrid() {



    return (
        <div id="grid">
            <Link to={"/properties?category=Arctic"}>
                <button className="span" id={"arctic"} >
                    <img src={arctic}/>
                </button>
            </Link>
            <Link to={"/properties?category=Beach"}>
                <button className="span" id={"beach"}>
                    <img src={beach}/>
                </button>
            </Link>
            <Link to={"/properties?category=Cabana"}>
                <button className="span" id={"cabins"}>
                    <img src={cabins}/>
                </button>
            </Link>
            <Link to={"/properties?category=Castle"}>
                <button className="span" id={"castles"}>
                    <img src={castles}/>
                </button>
            </Link>
            <Link to={"/properties?category=Trading"}>
                <button className="span" id={"trending"}>
                    <img src={trending}/>
                </button>
            </Link>
            <Link to={"/properties?category=Villa"}>
                <button className="span" id={"beachFront"}> 
                    <img src={beachFront}/>
                </button>
            </Link>
            <button className="span" id={"countrySide"}>
                <img src={countrySide}/>
            </button>
            <button className="span" id={"domes"}>
                <img src={domes}/>
            </button>
            <button className="span" id={"farms"}>
                <img src={farms}/>
            </button>
            <button className="span" id={"lakes"}>
                <img src={lakes}/>
            </button>
            <button className="span" id={"nationalParks"}>
                <img src={nationalParks}/>
            </button>
            <button className="span" id={"surfing"}>
                <img src={surfing}/>
            </button>
          
            <button className="span" id={"tropical"}>
                <img src={tropical}/>
            </button>
        </div>
    );
}
