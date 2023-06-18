import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import './PropertyDetail.css'
import Maps from "./Maps"
import {MDBBadge, MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import ReservationForm from "./ReservationForm";
import ReviewForm from "./ReviewForm";

    
//librarie de state management
export default function PropertyDetail() {

    const [location, setLocation] = useState({ lat: 44.439663, lng: 26.096306 });
    const [propertyData, setPropertyData] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(-1);

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
                setPropertyData(data);
                const { street, streetNr, city, country } = data.location;
                const apiKey = 'AIzaSyB3I0_AonpTHy5LAvcaBIRkJ6pz3eyabzo';
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
    
    const updatePropertyData = () => {
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
            setPropertyData(data);
          })
          .catch(error => {
            console.error(error);
          });
      }

    if (!propertyData) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div className={"property row"}>
    <div className="col-md-8">
      <div className="property__description">
        <h3 className="property__name">{propertyData.name}</h3>
      </div>
      <div className="property__rating">
        <div className="component font-bold">
          <button id={"property__rating-button"}> &#9733; {propertyData.rating} </button>
          &nbsp; &nbsp;
          {propertyData.reviews && propertyData.reviews.length > 0 && (
            <p>{propertyData.reviews.length} Reviews</p>
          )}
          {propertyData.location.city},&nbsp;{propertyData.location.country}
        </div>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ height: "fit-content" }}>
        <ol className="carousel-indicators">
          {propertyData.images.map((image, index) => (
            <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""} key={index}></li>
          ))}
        </ol>
        <div className="carousel-inner" style={{ height: "fit-content" }}>
          {propertyData.images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <img className="d-block w-100" src={image.path} alt={`Slide ${index}`} />
            </div>
          ))}
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
      <div className="property__about">
        <div className="property__about-title">
            <div className="col-md-6">
                <ol className="property_facilities">
                    <b>Facilities:</b>
                    <br></br>
                    {propertyData.facilities.map((facility, index) => (
                        <li key={facility.id}> &nbsp; &nbsp; {facility.name}</li>
                    ))}
                </ol>
            </div>
            <br/>
            <br/>
          <h4>About this property</h4>
        </div>
        <p>{propertyData.description}</p>
      </div>
    </div>
    <div className="col-md-4">

          <Maps location={location} />

      <br />


          <ReservationForm propertyId={id} />
      <br />
      <MDBListGroup style={{ maxWidth: "25rem" }} light>
        {propertyData.reviews.map((review, index) => {
          const isExpanded = index === expandedIndex;
          const description = isExpanded
            ? review.description
            : `${review.description.substring(0, 100)}...`;
          return (
            <MDBListGroupItem
              key={`review-${index}`}
              className='d-flex justify-content-between align-items-center'>
              <MDBBadge pill light>
                <span>{review.satisfaction} &#9733;</span>
              </MDBBadge>
              <p>
                {description}
                {description.length < review.description.length && (
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}
              </p>
            </MDBListGroupItem>
          );
        })}
      </MDBListGroup>
      <ReviewForm propertyId={id} onUpdate={updatePropertyData}/>
    </div>
  </div>
    );
}
