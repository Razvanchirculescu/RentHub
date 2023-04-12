
import React, { useEffect, useState } from 'react';
// import './GetClient.css';
import logo_main from '../images/logo_main.png';
import { useParams } from 'react-router-dom';

function GetClient() {
    console.log("getClient!!!1")

    const { id } = useParams();
    console.log(id);

    const [clientData, setClientData] = useState(null);


    useEffect(() => {

        const url = `http://localhost:8080/api/clients/${id}`;
        // const url = `/api/clients/${id}`;
        // const url = `/api/clients/2`;
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
    }, [id]);

    //     const fetchClientData = async () => {
    //         console.log(id);
    //         const response = await fetch(
    //             `http://localhost:8080/api/clients/${id}`);
    //             // `http://localhost:8080/api/clients/2`);
    //         const data = await response.json();
    //         console.log(data)
    //         setClientData(data);
    //     };
    //     fetchClientData();
    // }, [id]);

    if (!clientData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={logo_main}>
                <img src={logo_main} alt="Main Logo"/>
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
                {/*{clientData.map(client => (*/}
                    <tr key={clientData.id}>
                        <td>{clientData.id}</td>
                        <td>{clientData.name}</td>
                        <td>{clientData.surname}</td>
                        <td>{clientData.emailAddress}</td>
                        <td>{clientData.phoneNumber}</td>
                    </tr>
                {/*))}*/}
                </tbody>
            </table>
        </div>
    );
}
export default GetClient;
