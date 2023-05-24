import React from "react";
import CategoryGrid from "../components/CategoryGrid";
import PropertyList from "../components/PropertyList";

export default function LandingPage() {

    return (
        <div className="Landing">
            <CategoryGrid/>
            <PropertyList/>
        </div>
    )
}