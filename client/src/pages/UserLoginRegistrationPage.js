import React from "react";
import Navbar from "../components/Navbar";
import UserLoginRegisterForm from "../components/UserLoginRegisterForm";
import Footer from "../components/Footer";

export default function UserLoginRegistrationPage() {

    return (
        <div className="client">
            < Navbar />
            < UserLoginRegisterForm />
            <Footer/>
        </div>
    )
}