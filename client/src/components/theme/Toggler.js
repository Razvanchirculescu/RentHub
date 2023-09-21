import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

import DarkModeIcon from '@mui/icons-material/DarkMode';

const Toggle = ({theme,  toggleTheme }) => {
    return (
        <DarkModeIcon onClick={toggleTheme}/>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;