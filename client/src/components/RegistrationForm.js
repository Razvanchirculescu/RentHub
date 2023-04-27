import React, { useEffect, useState } from 'react';
// import {useHistory} from "react-router-dom";

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }
        // const response = await fetch('/api/clients/register', {
        const response = await fetch('http://localhost:8080/api/clients/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, surname: surname, emailAddress: emailAddress, phoneNumber: phoneNumber, password: password }),
        });
        if (response.ok) {
            // history.push('/properties');
            // window.location.href = `/properties`;

        } else {
            console.error('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                UserName:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                UserSurname:
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            </label>
            <label>
                UserEmail:
                <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
            </label>
            <label>
                UserPhoneNumber:
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label>
                UserPassword:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <button type="submit">Register</button>
            {/*<button onClick={() => {*/}
            {/*    console.log(name, surname, emailAddress, phoneNumber, password)*/}
            {/*}*/}
            {/*}>Show Data</button>*/}
        </form>
    );
}