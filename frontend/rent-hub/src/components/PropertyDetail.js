import React from "react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


export default function PropertyDetail() {

    const {id} = useParams();
    console.log(id);

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

        <div className="property-detail">
            <section>
                <p>{propertyData.title}</p>
                <p>{propertyData.description}</p>
            </section>
        </div>
    );
}