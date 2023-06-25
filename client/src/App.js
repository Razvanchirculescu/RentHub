import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import './App.css';

import PropertyPage from "./pages/PropertyPage";
import NoPageFound from "./pages/NoPageFound";
import LandingPage from "./pages/LandingPage";
import ClientsPage from "./pages/ClientsPage";
import ClientPage from "./pages/ClientPage";
import UserLoginRegistrationPage from "./pages/UserLoginRegistrationPage";
import LogoutClient from "./components/client/LogoutClient"
import InputForm from "./components/input/InputForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditClientInfo from"./components/client/EditClientInfo"


function App() {
    return (
        <div className="Container">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/properties" element={<LandingPage/>}/>
                    <Route path="/properties/:id" element={<PropertyPage/>}/>
                    <Route path="/properties/login" element={<UserLoginRegistrationPage/>}/>
                    <Route path="/api/clients/:id" element={<ClientPage/>}/>
                    <Route path="/api/clients" element={< ClientsPage/>}/>
                    <Route path="/api/clients/register" element={< InputForm/>}/>
                    <Route path="/api/clients/:id/edit-client-info" element={< EditClientInfo/>}/>
                    <Route path="/api/clients/logout" element={<LogoutClient/>}/>
                    <Route path="*" element={<NoPageFound/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
