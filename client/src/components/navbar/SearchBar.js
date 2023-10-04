import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.scss';

export const SearchBar = ({ setSearchResults }) => {
    const [input, setInput] = useState("");

    const fetchSearchData = (searchTerm) => {
        fetch(`http://localhost:8080/properties?search=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => setSearchResults(data));
    };

    const handleChange = (value) => {
        setInput(value);
        fetchSearchData(value);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};