import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {Link} from "react-router-dom";

const StripeButton = ({price}) => {
    const publishableKey =
        'pk_test_51NLCNCLjhZOmvB1hwHbMVdUTD9dTFSP0SXTi9xqYrWpQxuEynaNiEcH9sap3AouBrwyq5DDtxYbyDMqrLQeR2SdK007IrByyVP';
    const stripePrice = price * 100;

    const onToken = (token) => {
        axios
            .post('http://localhost:8080/charge', {
                amount: stripePrice,
                token,
            })
            .then((response) => {
                alert('Payment successful');
                const clientId = sessionStorage.getItem('clientId')
                window.location.href = `http://localhost:3000/api/clients/${clientId}`
            })
            .catch((error) => {
                alert('Payment failed');
            });
    };

    const isTokenAvailable = sessionStorage.getItem('token') !== null;

    return (
        <>
            {isTokenAvailable ? (
                <StripeCheckout
                    amount={stripePrice}
                    label="Pay now"
                    name=""
                    description={`Your total is: $${price}`}
                    panelLabel="Pay now"
                    token={onToken}
                    stripeKey={publishableKey}
                    currency="USD"
                />
            ) : (
                <Link to="http://localhost:3000/api/clients/register">
                    <button> Login/Register to make a booking</button>
                </Link>
            )}
        </>
    );
};

export default StripeButton;
