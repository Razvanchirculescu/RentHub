import React from 'react';
import "./ReservationOverview.scss"
import ReviewForm from "./ReviewForm";


function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function formatPrice(price) {
    const formattedPrice = price.toFixed(2);
    return `${formattedPrice} USD`;
}


function ReservationOverview({ reservation }) {

    const statusClassName = reservation.status === 'Completed' ? 'status-completed' : 'status-pending';
    const imageUrl = `http://localhost:3000/properties/${reservation.property.id}`;


    return (
        <div className='reservation-card' key={reservation.id}>
            <a href={imageUrl}>
                <div className='reservation__img'>
                    <img src={reservation.property.images[0].path} alt={reservation.property.name} />
                </div>
            </a>
            <div className='reservation__details'>
                <p><strong>{reservation.property.name}</strong></p>
                <p>Check-in: { formatDate(reservation.checkIn) }</p>
                <p>Check-out: { formatDate(reservation.checkOut) }</p>
                <p>Price: { formatPrice(reservation.price) } </p>
                <p className={ statusClassName }>{ reservation.status }</p>

                {reservation.status === 'Completed' && (
                    < ReviewForm propertyId={ reservation.property.id }  />
                )}
            </div>
        </div>
    )
}


export default ReservationOverview;
