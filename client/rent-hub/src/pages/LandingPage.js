import React from "react";
import Navbar from "../components/Navbar";
import CategoryGrid from "../components/CategoryGrid";
import PropertyList from "../components/PropertyList";

export default function LandingPage() {

    return (
        <div className="Landing">
            <Navbar/>
            <CategoryGrid/>
            <PropertyList/>
        </div>
    )
}