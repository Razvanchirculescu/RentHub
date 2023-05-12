import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import './EditClientInfo.css';

export default function EditClientInfo() {
    const {id} = useParams();
    const {clientId} = useParams();
    const [clientData, setClientData] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

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
                // setMobile('(320) 380-4539');
                // setAddress('Bay Area, San Francisco, CA');
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



    async function updateCustomerInfo(e) {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8080/api/clients/${id}`, {
                id,
                name: firstNameRef.current.value,
                surname: lastNameRef.current.value,
                emailAddress: emailRef.current.value,
                phoneNumber: phoneRef.current.value,
            });
            console.log(firstName);
            console.log(response.data);
            window.location.href = `http://localhost:3000/api/clients/${id}`;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="main-body">
                <div className="row">

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
                    <form className="col-md-6" onSubmit={updateCustomerInfo}>
                        <div className="card w-100">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">First Name</h6>
                                    </div>
                                    <div className="col-lg-9 text-secondary">
                                        <input type="text" ref={firstNameRef} className="form-control"
                                               defaultValue={clientData.name}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Last Name</h6>
                                    </div>
                                    <div className="col-lg-9 text-secondary">
                                        <input type="text" ref={lastNameRef} className="form-control"
                                               defaultValue={clientData.surname}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" ref={emailRef} className="form-control"
                                               defaultValue={clientData.emailAddress}/>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <input type="text" ref={phoneRef} className="form-control"
                                               defaultValue={clientData.phoneNumber}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-9 text-secondary">
                                        <button type="submit"  className="btn btn-default waves-effect m-b-5">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
