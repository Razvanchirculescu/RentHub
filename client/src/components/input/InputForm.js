import React from 'react';
import Button from '@mui/material/Button';

import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBInput
}
    from 'mdb-react-ui-kit';


import {useState} from "react";



export default function InputForm () {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [justifyActive, setJustifyActive] = useState('tab1');


    const [data, setData] = useState([]);

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);

    };

    const handleSubmit = async (event) => {


        event.preventDefault();

        if (justifyActive ==='tab1') {
            try {
                if (password === '' || emailAddress ==='') {
                    console.error('Login failed , missing data');
                    throw new Error("Login failed , missing data")
                }

                const response = await fetch('http://localhost:8080/api/accounts/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        emailAddress: emailAddress,
                        password: password
                    }),
                    // credentials: "include"
                })
                const data  = await response.json();
                if (data.length > 0) {
                    sessionStorage.setItem('token', data[0])
                    sessionStorage.setItem('clientId', data[1]);
                    window.location.href = `/api/clients/${data[1]}`;

                } else {
                    console.error('Login failed');
                    throw new Error("Login failed")
                }
                
            } catch (error) {
                setErrorMessage(error.message);
            }

        } else if (justifyActive==='tab2'){
            try {
                if (password !== confirmPassword) {
                    console.error('Passwords do not match');
                    throw new Error("Passwords do not match")
                } else if (name === "" || surname === "" || emailAddress === "" || password === "") {
                    throw new Error("Registration failed , missing data")
                }

                const response = await fetch('http://localhost:8080/api/accounts/register', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: name,
                        surname: surname,
                        phoneNumber: phoneNumber,
                        emailAddress: emailAddress,
                        password: password
                    }),
                }).catch(error => setErrorMessage(error.message))

                if (response.ok) {
                    window.location.href = `/api/clients/register`;

                } else {
                    console.error('Registration failed');
                    throw new Error('Registration failed')
                }
            } catch (error) {
                setErrorMessage(error.message);
            }
        }
    };


    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>

                    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'
                              value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'
                              value={password} onChange={(e) => setPassword(e.target.value)}/>

                    {/*<div className="d-flex justify-content-between mx-4 mb-4">*/}
                    {/*    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />*/}
                    {/*    <a href="!#">Forgot password?</a>*/}
                    {/*</div>*/}

                    <Button variant="contained" size="medium" className="mb-4 w-100"  onClick={(e) => handleSubmit(e)}>Sign in</Button>


                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>


                    <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'
                          value={name} onChange={(e) => setName(e.target.value)}/>

                    <MDBInput wrapperClass='mb-4' label='Surname' id='form1' type='text'
                          value={surname} onChange={(e) => setSurname(e.target.value)}/>

                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
                          value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>

                    <MDBInput wrapperClass='mb-4' label='Phone Number' id='form1' type='text'
                              value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>

                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='text'
                        id="outlined-password-input"
                        label="User Password"
                        type="password"
                        autoComplete="current-password"
                        value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <MDBInput wrapperClass='mb-4' label='Confirm password' id='form1' type='text'
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                    {errorMessage && <p style={{color: 'red', fontWeight: 'bold'}}>{"**********"+errorMessage+"**********"}</p>}
                    <br/>
                    <Button variant="contained" size="medium" className="mb-4 w-100" size="small"  onClick={(e) => handleSubmit(e)}>Sign up</Button>

                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer>
    );
}
