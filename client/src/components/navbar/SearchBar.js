import React, {useState} from "react";

import {FaSearch} from "react-icons/fa"

import './SearchBar.css'

export const SearchBar = ({ setSearchResults }) => {
    const [input, setInput] = useState("");

    const fetchSearchData = (value) => {
        fetch(`http://localhost:8080/properties`)
            .then((response) => response.json())
            .then((json) => {
                const searchResults = json.filter((property) => {
                    return (
                        (value && property && property.location.city && property.location.city.toLowerCase().includes(value)) ||
                        (value && property && property.location.country && property.location.country.toLowerCase().includes(value)) ||
                        (value && property && property.name && property.name.toLowerCase().includes(value))
                    );

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
