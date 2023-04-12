import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryGrid from "../components/CategoryGrid";
import GetPropertyList from "../components/GetPropertyList";

function PropertyPage() {
    console.log("am ajuns in functie")
    const {id} = useParams();
    console.log(id);

    const [propertyData, setPropertyData] = useState(null);

    useEffect(() => {
        const url = `http://localhost:8080/properties/1`;
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

        <div className="Landing">
            <Navbar/>
            <CategoryGrid/>
            <section>
                <GetPropertyList/>
            </section>
        </div>
    );
}

export default PropertyPage;
