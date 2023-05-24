import React, {useEffect, useState} from 'react';
import logoText from '../images/logos/logoText.png';
import {useParams} from 'react-router-dom';
import './ClientInfo.css';

export default function ClientInfo() {

    const {id} = useParams();
    console.log(id);

    const [clientData, setClientData] = useState(null);

    async function handleButtonClick() {
        window.location.href = `/api/clients`;
    }


    function getClient() {
        const url = `http://localhost:8080/api/clients/${id}`;
        // const url = `http://localhost:8080/api/clients/1`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`HTTP error ${response.status}`);
                }
            })
            .then(data => {
                setClientData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {

        getClient();
    }, [id]);

    // const fetchClientData = async () => {
    //     console.log(id);
    //     const response = await fetch(
    //         `http://localhost:8080/api/clients/${id}`);
    //         // `http://localhost:8080/api/clients/2`);
    //     const data = await response.json();
    //     console.log(data)
    //     setClientData(data);
    // };
    // fetchClientData();
    // }, [id]);


    if (!clientData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={logoText}>
                <button className="go_to_clients"
                        onClick={() => handleButtonClick()}>Back to clients
                </button>
            </div>
            <table className="center">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                <tr key={clientData.id}>
                    <td>{clientData.id}</td>
                    <td>{clientData.name}</td>
                    <td>{clientData.surname}</td>
                    <td>{clientData.emailAddress}</td>
                    <td>{clientData.phoneNumber}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
