import React, {useEffect, useState} from 'react';
import './PropertyList.css';
import { Link, useLocation } from "react-router-dom"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardFooter,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';



function PropertyList() {

    const [propertyData, setPropertyData] = useState([]);
    const searchParams = new URLSearchParams(useLocation().search);
    const category = searchParams.get("category");
    console.log(category)


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
        // <div className={"card-body"}>
        //     {propertyData.map((property) => {
        //         return (
        //             <Link to={`/properties/${property.id}`}>
        //                 <div className="card" key={property.id} id={property.id}>
        //                     <div className="card-body" key={property.id}>
        //                         <h6 className="card-title">{property.name}</h6>
        //                         <img className="card-img-top" src= {property.images[0].path} alt="Card image"/>
        //                         <p className="card-rating"> &#x22C6; {property.rating}</p>
        //                         <p className="card-rating"> &#8364; {property.pricePerNight}</p>
        //                         <br/>
        //                         <p className="card-text-location"><i
        //                             className='icon'></i>{property.location.city},{property.location.country}</p>
        //                     </div>
        //                 </div>
        //             </Link>
        //         );
        //     })}
        // </div>

        <MDBRow className='row-cols-4 row-cols-lg-3 g-2' id='properties-content'>
             {propertyData.map((property) => {
            return (
            <MDBCol className='col-sm-3 property-column'>
            <MDBCard className='h-100'>
                <MDBCardImage className = 'property-image'
                src={property.images[0].path}
                alt={property.name}
                position='top'
                />
                <MDBCardBody>
                <MDBCardTitle>{property.name}</MDBCardTitle>
                </MDBCardBody>
                <MDBCardFooter>
                <small>Last updated 3 mins ago</small>
                </MDBCardFooter>
            </MDBCard>
            </MDBCol>
                   );
              })}
        </MDBRow>
    );
}

export default PropertyList;