//src/components/GetClients.js

import React, {useEffect, useState} from 'react';
// import { useHistory } from "use-history";
import logoText from '../images/logos/logoText.png';
import './ClientsList.css';

export default function ClientsList() {

    const [clientsData, setClientsData] = useState([]);
    const [clientId, setClientId] = useState('');


    const handleButtonClick = async () => {
        const response = await fetch(
            `http://localhost:8080/api/clients/id`
        );
        const data = await response.json();
        setClientId(data);
    };

    async function handleButtonClick2(id) {
        console.log(`Client ID: ${id}`);
        // history.push(`/api/clients/${id}`);
        window.location.href = `/api/clients/${id}`;
    }


    useEffect(() => {
        const fetchClientsData = async () => {
            const response = await fetch(
                'http://localhost:8080/api/clients');
            const data = await response.json();
            setClientsData(data);
        };
        fetchClientsData().then(r => console.log(clientsData.toString()));
    }, []);


    return (
        <div>
            <div className={logoText}>
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
                {clientsData.map(client => (
                    <tr key={client.id}>
                        <td>
                            <button className="button_client_id"
                                    onClick={() => handleButtonClick2(client.id)}>{client.id}</button>
                        </td>
                        {/*<td>{client.id}</td>*/}
                        <td>{client.name}</td>
                        <td>{client.surname}</td>
                        <td>{client.emailAddress}</td>
                        <td>{client.phoneNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
