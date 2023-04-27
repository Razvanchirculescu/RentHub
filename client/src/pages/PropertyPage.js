import Navbar from "../components/Navbar";
import PropertyDetail from "../components/PropertyDetail";
import React from "react";
import Footer from "../components/Footer";


export default function PropertyPage() {

    return (

        <div className="Landing">
            < Navbar />
            < PropertyDetail />
            <Footer/>
        </div>
    );
}
