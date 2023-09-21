import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationForm.css';

function addDays(dateString, days) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

const ReservationForm = ({ propertyId }) => {
  const [checkIn, setStartDate] = useState('');
  const [checkOut, setEndDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [reservationPrice, setReservationPrice] = useState(null); // Added state for reservation price

  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (checkIn && checkOut) {
      axios.get(`http://localhost:8080/properties/${propertyId}/calculate`, {
        params: {
          propertyId,
          checkIn,
          checkOut,
        },
      })
          .then((response) => {
            setReservationPrice(response.data);
            console.log(response.data)
          })
          .catch((error) => {
            setErrorMessage('Error fetching reservation price');
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
          {reservationPrice !== null && (
              <button className='reservation-button'>
                Book now for ${reservationPrice}
              </button>
          )}

          <div className='error-reservation'>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </form>
      </div>
  );
};

export default ReservationForm;