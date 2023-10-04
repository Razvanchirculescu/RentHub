import React, { Component } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';

import "./dark-mode.scss";
import "./light-mode.scss";

class DarkModeToggle extends Component {

    updateTheme(darkMode) {
        const themeLink = document.getElementById("theme-link");
        if (darkMode) {
            themeLink.setAttribute("href", "../src/components/theme/dark-mode.scss");
        } else {
            themeLink.setAttribute("href", "../src/components/theme/light-mode.scss");
        }
    }
    constructor(props) {
        super(props);
        const darkMode = JSON.parse(localStorage.getItem("DARK_MODE")) === true;
        this.state = {
            darkMode: darkMode,
        };
        this.updateTheme(darkMode);
        this.handleModeChange = this.handleModeChange.bind(this);

        if (JSON.parse(localStorage.getItem("DARK_MODE")) === true) {
            document.body.classList.add("dark-mode");
        }
    }

    handleModeChange() {
        if (!this.state.darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

        this.setState({
            darkMode: !this.state.darkMode,
        });
        localStorage.setItem("DARK_MODE", !this.state.darkMode);
        const newDarkMode = !this.state.darkMode;

        // Update the theme
        this.updateTheme(newDarkMode);

        // Update the state and localStorage
        this.setState({
            darkMode: newDarkMode,
        });
        localStorage.setItem("DARK_MODE", newDarkMode);

    }

    render() {
        return <DarkModeIcon onClick={this.handleModeChange}>Change Mode</DarkModeIcon>;
    }
}

export default DarkModeToggle;