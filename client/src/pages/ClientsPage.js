import React from "react";
import Navbar from "../components/Navbar";
import ClientsList from "../components/ClientsList";

export default function ClientsPage() {

    return (
        <div className="clients">
            < Navbar />
            < ClientsList />
        </div>
    )
}
