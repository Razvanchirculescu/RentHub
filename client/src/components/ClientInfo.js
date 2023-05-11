import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import './ClientInfo.css';

export default function ClientInfo() {

    const {id} = useParams();
    console.log(id);

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

    if (!clientData) {
        return <div>Loading...</div>;
    }

    return (

        <div className="container">
            <div className="main-body">


                <div className="row gutters-sm">
                    <div className="col-md-6 mb-3">
                        <div className="card w-100">
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
                    <div className="col-md-6 mb-3">
                        <div>
                            <div className="card-body w-100">

                                <div className="row">
                                    <div className="col-md-8">
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
                                <br/>


                                <div className="row">
                                    <div className="col-sm-12">
                                        <Link className="btn btn-info"
                                              to={`/api/clients/${clientData.id}/edit-client-info`}
                                        >Edit</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
