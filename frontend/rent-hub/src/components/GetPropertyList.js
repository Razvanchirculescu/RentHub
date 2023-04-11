import image1 from "../images/testImagesForcards/5ac2e5bc-6569-46b4-a2cf-f9f7350f73e6.png"
import image2 from "../images/testImagesForcards/c346cf0d-b9f9-4d18-835a-32177f326ca8.png"
import image3 from "../images/testImagesForcards/daafea8b-2a9b-4760-9da3-ed8d3659ab45.png"
import image4 from "../images/testImagesForcards/dfc94d55-d670-42db-bdb8-ffda4fb2996b.png"
import image5 from "../images/testImagesForcards/f6d4bd5b-3cab-418d-b705-d11b8fc6d57c.png"
import logo from "../images/logos/logoImage.png"

import React, {useEffect, useState} from 'react';
import './GetPropertyList.css';

function GetPropertyList() {

    const images = [
        {image: image1},
        {image: image2},
        {image: image3},
        {image: image4},
        {image: image5}
    ];

    const [propertyData, setPropertyData] = useState([]);

    useEffect(() => {
        const fetchPropertyData = async () => {
            const response = await fetch(
                'http://localhost:8080/properties');
            const data = await response.json();
            // console.log("data: ", data);
            setPropertyData(data);
        };
        fetchPropertyData().then(r => console.log(propertyData.toString()));
    },);


    // const getRandomImages = () => {
    //     const randomImageIndices = Array.from(
    //         { length: propertyData.length },
    //         () => Math.floor(Math.random() * images.length)
    //     );
    //     return randomImageIndices.map((index) => images[index].image);
    // };
    //
    // const randomImages = getRandomImages();
    // console.log(propertyData.toString())

    return (
        <div>
            {propertyData.map((property, index) => {
                return (
                    <div className="card" key={property.id}>
                        <div className="card-body">
                            <h6 className="card-title">{property.name}</h6>
                            <img className="card-img-top" src={image1} alt="Card image" />
                            <p className="card-rating"> &#x22C6; {property.rating}</p>
                            <p className="card-rating"> &#8364; {property.pricePerNight}</p>
                            <br />
                            <p className="card-text-location"><i className='icon'></i>{property.location.city},{property.location.country}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default GetPropertyList;