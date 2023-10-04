import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import './PropertyDetail.scss'
import Maps from "./Maps"
import ReservationForm from "../reservation/ReservationForm";
import Carousel from "./PropertyImagesCarousel";
import Facilities from "./Facilities"
import PropertyDescription from "./PropertyDescription"
import PropertyTopDetails from "./PropertyTopDetails";
import PropertyReviews from "./PropertyReviews";


export default function PropertyDetail() {

    const [location, setLocation] = useState({lat: 44.439663, lng: 26.096306});
    const [props, setprops] = useState(null);

    const {id} = useParams();

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
                setprops(data);
                const {street, streetNr, city, country} = data.location;
                const apiKey = process.env.REACT_APP_MAPS_API_KEY;
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${street}+${streetNr}+${city}+${country}&key=${apiKey}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        const location = data.results[0].geometry.location;
                        setLocation(location);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);


    if (!props) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div className={"property row"}>

            <div className="col-md-8">
                <PropertyTopDetails props={props}/>
                <Carousel images={props.images}/>
                <Facilities facilities={props.facilities}/>
                <PropertyDescription description={props.description}/>
            </div>

            <div className="col-md-4 right-part-page">
                <Maps location={location}/>
                <ReservationForm propertyId={id}/>
                <PropertyReviews reviews={props.reviews}/>
            </div>
        </div>
    );
}
