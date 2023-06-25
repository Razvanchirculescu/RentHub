import React from "react";
import CategoryGrid from "../components/landing/CategoryGrid";
import PropertyList from "../components//landing/PropertyList";

export default function LandingPage() {

    return (
        <div className="Landing">
            <CategoryGrid/>
            <PropertyList/>
        </div>
    )
}