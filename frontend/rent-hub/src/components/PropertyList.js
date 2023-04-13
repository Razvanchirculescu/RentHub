import image1 from "../images/testImagesForcards/5ac2e5bc-6569-46b4-a2cf-f9f7350f73e6.png"
import image2 from "../images/testImagesForcards/c346cf0d-b9f9-4d18-835a-32177f326ca8.png"
import image3 from "../images/testImagesForcards/52cbd3a8-5384-4fa3-8373-e855ad7ad184.png"
import image4 from "../images/testImagesForcards/dfc94d55-d670-42db-bdb8-ffda4fb2996b.png"
import image5 from "../images/testImagesForcards/f6d4bd5b-3cab-418d-b705-d11b8fc6d57c.png"
import image6 from "../images/testImagesForcards/9b2acbdd_original.png"
import image7 from "../images/testImagesForcards/2d62f0fb_original.png"
import image8 from "../images/testImagesForcards/4fb0f6c7-6c0f-403c-9441-a569d33362db.png"

import React, {useEffect, useState} from 'react';
import './PropertyList.css';

function GetPropertyList() {

    const images = [image1, image2, image3, image4, image5, image6, image7, image8]

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
                    <div className="card" key={property.id} id={property.id}>
                        <div className="card-body">
                            <h6 className="card-title">{property.name}</h6>
                            <img className="card-img-top" src={images[index]} alt="Card image"/>
                            <p className="card-rating"> &#x22C6; {property.rating}</p>
                            <p className="card-rating"> &#8364; {property.pricePerNight}</p>
                            <br/>
                            <p className="card-text-location"><i
                                className='icon'></i>{property.location.city},{property.location.country}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default GetPropertyList;