import React, {useState} from "react";

import {FaSearch} from "react-icons/fa"

import './SearchBar.css'

export const SearchBar = ({ setSearchResults }) => {
    const [input, setInput] = useState("");


    const fetchSearchData = (value) => {
        fetch(`http://localhost:8080/properties`)
            .then((response) => response.json())
            .then((json) => {
                const searchResults = json.filter((properties) => {
                    return (
                        value &&
                        properties &&
                        properties.location.country &&
                        properties.location.country.toLowerCase().includes(value))
                });
                console.log(searchResults);
                setSearchResults(searchResults);
            });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchSearchData(value)
    }
    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
                <input placeholder="Type to search..."
                       value={input}
                       onChange={(e) => handleChange(e.target.value)}/>
        </div>
    );
};
