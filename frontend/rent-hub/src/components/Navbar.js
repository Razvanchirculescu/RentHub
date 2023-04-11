import React from "react";
import logoText from "../images/logos/logoText.png"
import logoImage from "../images/logos/logoImage.png"
import TextField from "@mui/material/TextField";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="nav flex flex-wrap items-center justify-between px-4">
            <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">


                <img height={40} width={100} src={logoImage} alt={"logo"} />
                <img height={50} width={150} src={logoText} alt={"logo"} />

            </div>

            <div className="navbarSearch">
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
            </div>

            <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
                       htmlFor="menu-btn">
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <li className="border-t md:border-none">
                        <a href="/frontend/rent-hub/public"
                           className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Advertise your property</a>
                    </li>

                    <li className="border-t md:border-none">
                        <a href="/frontend/rent-hub/public"
                           className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
                            <i className="material-icons">language</i></a>
                    </li>

                    <li className="border-t md:border-none">
                        <a href="/home/razvan/Codecool/ADVANCED/WP2/el-proyecte-grande-sprint-2-java-AngelicaPopescu/frontend/rent-hub/src/components/Navbar"
                           className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"><i className="material-icons">login</i></a>

                    </li>

                </ul>
        </nav>

    );
}
