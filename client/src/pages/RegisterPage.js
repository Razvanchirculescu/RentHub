import React from "react";
import Navbar from "../components/Navbar";
// import ClientInfo from "../components/ClientInfo";
import RegistrationForm from "../components/RegistrationForm"

export default function ClientRegisterPage() {

    return (
        <div className="client-register-page">
            < Navbar />
            < RegistrationForm />
        </div>
    )
}