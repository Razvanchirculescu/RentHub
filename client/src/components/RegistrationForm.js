import React, {useState} from 'react';
// import {useHistory} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password !== confirmPassword) {
                console.error('Passwords do not match');
                return;
            } else if (name === "" || surname === "" || emailAddress === "" || password === "") {
                throw new Error("Registration failed , missing data")
            }

            const response = await fetch('http://localhost:8080/api/clients/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    surname: surname,
                    emailAddress: emailAddress,
                    phoneNumber: phoneNumber,
                    password: password
                }),
            }).catch(error => setErrorMessage(error.message))

            if (response.ok) {
                // history.push('/properties');
                window.location.href = `/properties`;

            } else {
                console.error('Registration failed');
                document.writeln('Registration failed');
                alert('Registration failed');

            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className={"input_box"} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {errorMessage && <p style={{color: 'red', fontWeight: 'bold'}}>{errorMessage}</p>}
            <br/>
            <form className={"input_form"} onSubmit={handleSubmit}>
                <p>
                    <TextField id="outlined" label="Name"
                               type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </p>
                <p>
                    <TextField id="outlined" label="Surname"
                               type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                </p>
                <p>
                    <TextField id="outlined" label="Email"
                               type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
                </p>
                <p>
                    <TextField id="outlined" label="Phone Number"
                               type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </p>
                <TextField
                    id="outlined-password-input"
                    label="User Password"
                    type="password"
                    autoComplete="current-password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <p>
                    <TextField
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </p>
                <br/>
                <Button type="submit" variant="contained">Register</Button>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Button type="submit" variant="contained" href="http://localhost:3000/api/clients/">Clients</Button>
            </form>
        </div>
    );
}
