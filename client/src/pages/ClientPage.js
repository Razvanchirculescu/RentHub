import React from "react";
import Navbar from "../components/Navbar";
import ClientInfo from "../components/ClientInfo";
import Footer from "../components/Footer";

export default function ClientPage() {

    return (
        <div className="client">
            < Navbar />
            < ClientInfo />
            <Footer/>
        </div>
    )
}
