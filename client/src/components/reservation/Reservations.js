import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ReservationOverview from "./ReservationOverview"

export default function Reservations() {

    const [props, setProps] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const url = `http://localhost:8080/api/clients/${id}/reservations`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`HTTP error ${response.status}`);
                }
            })
            .then(data => {
                setProps(data);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!props || props.length <= 0) {
        return (
            <section></section>
        );
    }

    return (
        <div className="reservation">
            <p><strong>My reservations</strong></p>
            {props.map((reservation) => {
                return (
                    <ReservationOverview key={reservation.id} reservation={reservation}/>
                )
            })}
        </div>
    )
}
