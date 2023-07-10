import React from "react";

import { Link } from "react-router-dom"

import "./SearchResultsList.css"

export const SearchResultsList = ( {searchResults, setSearchResults} ) => {

    const resetSearch = () => {
        setSearchResults("");
    }


    return (
        <div className="results-list">
            {
                searchResults.map((result, id) => {
                    return (
                        <Link
	                        key={id}
	                        to={`/properties/${result.id}`}
                            onClick={resetSearch}>
	                        <ul>{result.name},{result.location.city} {result.location.country}</ul>
						</Link>
                    )
                })
            }

        </div>
    );
};
