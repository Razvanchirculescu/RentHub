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

import './CategoryGrid.css';

export default function CategoryGrid() {
    return (
        <div id="grid">
            <div className="span"><a href="#">
                <img src={arctic}/></a>
            </div>
            <div className="span"><a href="#"><img
                src={beach}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={beachFront}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={cabins}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={castles}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={countrySide}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={domes}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={farms}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={lakes}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={nationalParks}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={surfing}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={trending}/></a>
            </div>
            <div className="span"><a href="#">
                <img src={tropical}/></a>
            </div>
        </div>
    );
}
