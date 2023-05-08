import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import DatePicker from "react-multi-date-picker";
import './PropertyDetail.css'
import {MDBBadge, MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";


export default function PropertyDetail() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const {id} = useParams();
    // console.log(id);

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
                console.log("reviews: " + data.reviews)
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
        <div className={"property"}>
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
            <div className="row">
                <div className="col-md-8">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{height: "fit-content"}}>
                        <ol className="carousel-indicators">
                            {propertyData.images.map((image, index) => (
                                <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""} key={index}></li>
                            ))}
                        </ol>
                        <div className="carousel-inner" style={{height: "fit-content"}}>
                            {propertyData.images.map((image, index) => (
                                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <img className="d-block w-100" src={image.path} alt={`Slide ${index}`} />
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="col-md-4" id={"datePickerDiv"}>
                <p> Check availability</p>

                    &#128197;  &nbsp;

                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        minDate={new Date()}
                        startDate={startDate}
                        endDate={endDate}
                        placeholder={"Start date"}
                    />

                    &nbsp;
                    To
                    &nbsp;

                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholder={"End date"}
                    />
                </div>

                    <div className="propertyPageReviewSection">

                    <MDBListGroup style={{ maxWidth: '25rem' }} light>
                            {propertyData.reviews.map((review, index) => {
                                return (
                                    <MDBListGroupItem key={`review-${index}`}
                                                      className='d-flex justify-content-between align-items-center' style={{bottom:"1vh"}}>
                                        <p>{review.description}</p>
                                        <MDBBadge pill light>
                                            <span>{review.satisfaction} &#9733;</span>
                                        </MDBBadge>
                                    </MDBListGroupItem>
                                );
                            })}
                    </MDBListGroup>
                </div>
            </div>
        </div>
    );
}