import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import image1 from "../images/testImagesForcards/5ac2e5bc-6569-46b4-a2cf-f9f7350f73e6.png"
import image2 from "../images/testImagesForcards/c346cf0d-b9f9-4d18-835a-32177f326ca8.png"
import image3 from "../images/testImagesForcards/52cbd3a8-5384-4fa3-8373-e855ad7ad184.png"
import image4 from "../images/testImagesForcards/dfc94d55-d670-42db-bdb8-ffda4fb2996b.png"
import image5 from "../images/testImagesForcards/f6d4bd5b-3cab-418d-b705-d11b8fc6d57c.png"
import image6 from "../images/testImagesForcards/9b2acbdd_original.png"
import image7 from "../images/testImagesForcards/2d62f0fb_original.png"
import image8 from "../images/testImagesForcards/4fb0f6c7-6c0f-403c-9441-a569d33362db.png"

import 'flowbite'

import './PropertyDetail.css'

export default function PropertyDetail() {

    const {id} = useParams();
    console.log(id);

    const [propertyData, setPropertyData] = useState(null);

    useEffect(() => {
        const url = `http://localhost:8080/properties/${id}`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`HTTP error ${response.status}`);
                }
            })
            .then(data => {
                setPropertyData(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!propertyData) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (


        <div className={"property-detail-page"}>


            <div className="m-2_propertyDetailDescription">
                <h3 className="component text-2xl">{propertyData.name}</h3>
            </div>



            <div className="m-2_rating">

                <div className="component font-bold" >
                    <button id={"property_page_rating_button"}> &#9733; {propertyData.rating}</button>
                    &nbsp; &nbsp;
                    {propertyData.location.city},&nbsp;{propertyData.location.country}
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={image8} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image5} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image1} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


        </div>






    );
}