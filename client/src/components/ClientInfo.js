import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {useParams} from 'react-router-dom';
import './ClientInfo.css';

export default function ClientInfo() {

    const {id} = useParams();
    console.log("fisrt:"+ id);

    const token =  sessionStorage.getItem('token');
    const clientId =  sessionStorage.getItem('clientId');

    const [clientData, setClientData] = useState(null);

    async function handleButtonClick() {
        window.location.href = `/api/clients`;
    }

    async function handleButtonClickEdit(id) {
        console.log(`Client ID: ${id}`);
        window.location.href = `/api/clients/${id}/edit-client-info`;
    }


    function getClient() {
        const url = `http://localhost:8080/api/clients/${id}`;

        fetch(url
            // , {
            // method:'GET',
            // headers: {
            //     'Authorization': 'Bearer ' + token,
            //     'Content-Type': 'application/json'
            // },
            // withCredentials: true // Enable sending cookies
        // }
        )
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

    if (!clientData) {
        return
            <div>
                <p style={{color: 'red', fontWeight: 'bold'}}>Login first</p>
            </div>;
    }


    if(token!=null && clientId==id){
    return (
        <div className="container">
            <div className="main-body">


                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                         className="rounded-circle" width="200"/>
                                    <div className="mt-3">
                                        <h4>{clientData.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-sm-8">
                                        <h6 className="mb-0">First Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {clientData.name}
                                    </div>

                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h6 className="mb-0">Last Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {clientData.surname}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {clientData.emailAddress}
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {clientData.phoneNumber}
                                    </div>
                                </div>
                                <hr/>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                                    </div>
                                </div>
                                <hr/>



                                <div className="row">
                                    <div className="col-sm-12">
                                        <Link className="btn btn-info" to="/api/clients/${}/edit-client-info"
                                              onClick={() => handleButtonClickEdit(clientData.id)}>Edit</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
    } else {
        return (
            <div>
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
                </table>
            </div>
        );
    }
}
