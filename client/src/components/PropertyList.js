import React, {useEffect, useState} from 'react';
import './PropertyList.css';
import { Link } from "react-router-dom"

function GetPropertyList() {

    const [propertyData, setPropertyData] = useState([]);

    useEffect(() => {
        const fetchPropertyData = async () => {
            const response = await fetch(
                'http://localhost:8080/properties');
            const data = await response.json();
            setPropertyData(data);
        };
        fetchPropertyData().then(r => console.log(propertyData.toString()));
    },);

    return (
        <div className={"card-body"}>
            {propertyData.map((property, index) => {
                return (
                    <Link to={`/properties/${property.id}`}>
                        <div className="card" key={property.id} id={property.id}>
                            <div className="card-body">
                                <h6 className="card-title">{property.name}</h6>
                                <img className="card-img-top" src= {property.images[0].path} alt="Card image"/>
                                <p className="card-rating"> &#x22C6; {property.rating}</p>
                                <p className="card-rating"> &#8364; {property.pricePerNight}</p>
                                <br/>
                                <p className="card-text-location"><i
                                    className='icon'></i>{property.location.city},{property.location.country}</p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default GetPropertyList;