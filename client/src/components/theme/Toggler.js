import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

import DarkModeIcon from '@mui/icons-material/DarkMode';

// const Button = styled.button`
//   //background: ${({ theme }) => theme.background};
//   //border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   //border-radius: 20px;
//   cursor: pointer;
//   font-size:1rem;
//   //padding: 0.6rem;
//   }
// `
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