import React, {useState} from "react";

import logoTextTransparent from "../../images/logos/logoTextTransparent.png"
import logoImageTransparent from "../../images/logos/logoImageTransparent.png"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';

import './Navbar.scss';
import {SearchBar} from "./SearchBar"
import {SearchResultsList} from "./SearchResultsList"
import ThemeButton from "../theme/ThemeButton";


export default function Navbar({isLoggedIn}) {



    const [searchResults, setSearchResults] = useState([]);

    const loggedIn = checkLoggedIn();
    const user_id = sessionStorage.getItem("clientId");


    const handleLogout = () => {
        window.location.href = "/api/clients/logout";
    };

    const handleClients = () => {
        if (user_id) {
            window.location.href = `http://localhost:3000/api/clients/${user_id}`;
        }
    };

    const handleLoginRegister = () => {
        window.location.href = "http://localhost:3000/api/clients/register";
    };

    function checkLoggedIn() {
        return sessionStorage.length > 0;
    }

    const handleLinkClick = () => {
        setSearchResults("");
    };

    return (

            <nav className="nav flex flex-wrap items-center justify-between px-20" id="navbar">
                <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

                    <a href={"/properties"}>
                        <img height={40} width={100} src={logoImageTransparent} alt={"logo"}/>
                    </a>
                    <a href={"/properties"}>
                        <img height={50} width={150} src={logoTextTransparent} alt={"logo"}/>
                    </a>
                    <ThemeButton/>
                </div>
                {/*<SearchBar setSearchResults={setSearchResults} theme={theme}/>*/}
                <SearchBar setSearchResults={setSearchResults}/>


                <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
                       htmlFor="menu-btn">
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul className="menu border-b md:border-none flex justify-between items-right list-reset m-0 w-full md:w-auto">
                    <li className="border-t md:border-none">
                        <a href="#"
                           className="block md:inline-block px-4 py-3 no-underline text-grey-darkest
                                hover:text-grey-darker font-bold">
                            Advertise your property
                        </a>
                    </li>
                    <li className="border-t md:border-none">
                        <button id="logout_link"
                                hidden={!loggedIn}
                                onClick={handleLogout}
                                className="button-right">
                        <span
                            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                            <i className="material-icons">logout</i>
                        </span>
                        </button>
                    </li>

                    <li className="border-t md:border-none">
                        <button id="clients_link"
                                hidden={!loggedIn}
                                onClick={handleClients}
                                className="button-right">
                        <span
                            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                            <i className="material-icons"><PeopleIcon/></i>
                        </span>
                        </button>
                    </li>

                    <li className="border-t md:border-none">
                        <button id="login_register_link"
                                hidden={loggedIn}
                                onClick={handleLoginRegister}
                                className="button-right">
                        <span
                            className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                            <i className="material-icons"><AccountCircleIcon/></i>
                        </span>
                        </button>
                    </li>

                </ul>
                <SearchResultsList searchResults={searchResults} onLinkClick={handleLinkClick} />
            </nav>
    );
}
