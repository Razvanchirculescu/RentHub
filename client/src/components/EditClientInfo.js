import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditClientInfo.css';

export default function EditClientInfo() {
    const { id } = useParams();
    const [clientData, setClientData] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

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
                setFirstName(data.name);
                setLastName(data.surname);
                setEmail(data.emailAddress);
                setPhone(data.phoneNumber);
                setMobile('(320) 380-4539');
                setAddress('Bay Area, San Francisco, CA');
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        getClient();
    }, [id]);

    function handleSaveChanges() {
        //  POST request to update the client data on the server.
        console.log('Saving changes');
    }

    if (!clientData) {
        return <div>Loading...</div>;
    }


    return (

        <div className="container">
            <div className="main-body">
                <div className="row">

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
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">First Name</h6>
                                    </div>
                                    <div className="col-lg-9 text-secondary">
                                        <input type="text" className="form-control" value={clientData.name}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Last Name</h6>
                                    </div>
                                    <div className="col-lg-9 text-secondary">
                                        <input type="text" className="form-control" value={clientData.surname}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value={clientData.emailAddress}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value={clientData.phoneNumber}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Mobile</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value="(320) 380-4539"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" className="form-control" value="Bay Area, San Francisco, CA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="button" className="btn btn-primary px-4" value="Save Changes"/>
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
