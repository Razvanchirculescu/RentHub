import React, { useState, useEffect } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';

import "./dark-mode.scss";
import "./light-mode.scss";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("DARK_MODE")) === true);

    useEffect(() => {
        const themeLink = document.getElementById("theme-link");
        themeLink.setAttribute("href", darkMode ? "../src/components/theme/dark-mode.scss" : "../src/components/theme/light-mode.scss");
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("DARK_MODE", darkMode);
    }, [darkMode]);

    const handleModeChange = () => {
        setDarkMode(prevDarkMode => {
            const newDarkMode = !prevDarkMode;
            return newDarkMode;
        });
    };

    return (
        <DarkModeIcon onClick={handleModeChange}/>
    );
};

export default DarkModeToggle;
