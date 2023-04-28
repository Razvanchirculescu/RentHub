import React from "react";
import Navbar from "../components/Navbar";
import ClientsList from "../components/ClientsList";
import Footer from "../components/Footer";

export default function ClientsPage() {

    return (
        <div className="clients">
            < Navbar />
            < ClientsList />
            <Footer/>
        </div>
    )
}
