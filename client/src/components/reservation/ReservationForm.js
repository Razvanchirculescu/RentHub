import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ReservationForm.css';
import StripeButton from "../checkout/StripeCheckout";

function addDays(dateString, days) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
};

const ReservationForm = ({propertyId}) => {
    const [checkIn, setStartDate] = useState('');
    const [checkOut, setEndDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [reservationPrice, setReservationPrice] = useState(null); // Added state for reservation price
    const [isDatesValid, setIsDatesValid] = useState(null); // Added state for dates validity
    const currentDate = new Date().toISOString().split('T')[0];


    const handleValidation = () => {
        return axios
            .get('http://localhost:8080/reservations/validate', {
                params: {
                    propertyId,
                    checkIn,
                    checkOut,
                },
            })
            .then((response) => {
                console.log(response.data);
                setIsDatesValid(response.data);
                setErrorMessage('');
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    };

    useEffect(() => {
        if (checkIn && checkOut) {
            handleValidation()
                .then((data) => {
                    if (!data) {
                        setErrorMessage(`Dates unavailable ${checkIn} ${checkOut}`);
                        setStartDate('');
                        setEndDate('');
                        setReservationPrice(null)
                    } else {
                        axios.get(`http://localhost:8080/properties/${propertyId}/calculate`, {
                            params: {
                                propertyId,
                                checkIn,
                                checkOut,
                            },
                        })
                            .then((response) => {
                                setReservationPrice(response.data);
                                console.log(response.data);
                            })
                            .catch((error) => {
                                setErrorMessage('Error fetching reservation price');
                                console.error(error);
                            });
                    }
                })
                .catch((error) => {
                    setErrorMessage('Error validating dates');
                    console.error(error);
                });
        }
    }, [checkIn, checkOut, propertyId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/properties/${propertyId}/reservations`, {
                    clientId: sessionStorage.getItem('clientId'),
                    reservation: {
                        checkIn,
                        checkOut,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            setErrorMessage('');
        } catch (error) {
            setReservationPrice(null);
            if (error.response) {
                console.error(error.response.data);
                setErrorMessage(error.response.data.message);
            }
        }
    };

    return (
        <div className='reservation-form'>
            <form onSubmit={handleSubmit}>
                <div className='reservation-dates'>
                    <label>
                        Check in:
                        <input
                            type='date'
                            value={checkIn}
                            onChange={(e) => setStartDate(e.target.value)}
                            min={currentDate}
                            disabled={checkOut !== '' && checkOut < checkIn}
                        />
                    </label>
                    <label>
                        Check out:
                        <input
                            type='date'
                            value={checkOut}
                            onChange={(e) => setEndDate(e.target.value)}
                            min={checkIn ? addDays(checkIn, 1) : ''}
                            placeholder='Select a check-out date'
                        />
                    </label>
                </div>
                <div className='error-reservation'>
                    {errorMessage && <p>{errorMessage}</p>}
                </div>
                <div>
                    {reservationPrice !== null && (
                        <p>Total : ${reservationPrice}</p>
                    )}
                </div>
                <div className={"checkout"}>
                    {reservationPrice !== null && (
                        <StripeButton price={reservationPrice} onPaymentSuccess={handleSubmit}/>
                    )}
                </div>
            </form>

        </div>
    );
};

export default ReservationForm;
