import React from "react";
import Navbar from "../components/Navbar";
// import ClientInfo from "../components/ClientInfo";
import RegistrationForm from "../components/RegistrationForm"
import InputForm from "../components/InputForm";

export default function ClientRegisterPage() {

    return (
        <div className="client-register-page">
            < Navbar />
            < RegistrationForm />
            {/*<InputForm />*/}
        </div>
    )
}