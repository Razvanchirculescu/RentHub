import React from "react";
import useDarkMode from "use-dark-mode";
import { useTheme } from "./useTheme";

import "../../styles/index.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeButton = () => {
    const darkMode = useDarkMode(true);
    const theme = useTheme();

    return (
        <div onClick={darkMode.toggle}>
            <DarkModeIcon />
            {theme === "dark-mode" ? "light-mode" : "dark-mode"}
        </div>
    );
};

export default ThemeButton;