import React, {useEffect, useState} from 'react';
import './PropertyList.css';
import {Link, useLocation} from "react-router-dom"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { FaLocationDot } from "react-icons/fa6";





function PropertyList() {

    const [propertyData, setPropertyData] = useState([]);
    const searchParams = new URLSearchParams(useLocation().search);
    const category = searchParams.get("category");
    // console.log(category)


    useEffect(() => {
        const fetchPropertyData = async () => {
            const url = `http://localhost:8080/properties${category ? `?category=${category}` : ''}`;
            console.log("fetching data from:", url);
            const response = await fetch(url);
            const data = await response.json();
            setPropertyData(data);
        };
        fetchPropertyData();
    }, [category]);


    return (
        <div className="card-wrapper theme-background" id="theme-background">
            {propertyData.map((property) => {
                return (
                    <Link className="link" key={property.id} to={`/properties/${property.id}`}>
                        <div className="card">
                            <div className="card__image">
                                <img src={property.images[0].path} alt={property.name}/>
                            </div>
                            <div className="card__details" id="cardDetails">
                                <p className="card__location" >
                                   <FaLocationDot/>
                                    &nbsp;
                                    {property.location.city}, {property.location.country}
                                </p>
                                <p className="card__subtitle"></p>

                                <div className='card__footer'>
                                    <div className="card__rating">
                                        <i className="fa fa-star"/>
                                        <span>{property.rating}</span>
                                    </div>
                                    <div className="card__price">${property.pricePerNight} per night</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default PropertyList;