import React, { useState, useEffect } from 'react';

const Test = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/clients');
                    // , {method: "GET", mode: "no-cors"});
                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    {item.name} ({item.email})
                </li>
            ))}
        </ul>
    );
};

export default Test;