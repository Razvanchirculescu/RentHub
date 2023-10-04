import React, {useEffect, useState, useContext} from 'react';

import logoText from '../../images/logos/logoText.png';
import './ClientsList.scss';

export default function ClientsList() {

    const [clientsData, setClientsData] = useState([]);
    const [clientId, setClientId] = useState('');

    async function handleButtonClick2(id) {
        console.log(`Client ID: ${id}`);
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
