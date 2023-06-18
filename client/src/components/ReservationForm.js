import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ReservationForm.css';


function addDays(dateString, days) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

const ReservationForm = ({ propertyId }) => {
  const { id } = useParams();

  const [checkIn, setStartDate] = useState('');
  const [checkOut, setEndDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const currentDate = new Date().toISOString().split('T')[0];


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/properties/${propertyId}/reservations`, {
        propertyId,
        clientId: sessionStorage.getItem('clientId'),
        checkIn,
        checkOut
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setErrorMessage('');

    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        setErrorMessage(error.response.data.message);
      } else {
        if (error.response) {
          // Server responded with an error status code
          if (error.response.status === 400) {
            // Handle specific error cases (e.g., validation errors)
            setErrorMessage('Bad request. Please check your input.');
          } else if (error.response.status === 404) {
            // Handle specific error cases (e.g., resource not found)
            setErrorMessage('The requested resource was not found.');
          } else {
            // Handle other error cases with status code
            setErrorMessage('An error occurred. Please try again.');
          }
        } else if (error.request) {
          // The request was made, but no response was received
          setErrorMessage('No response received from the server. Please try again.');
        } else {
          // Something else happened while setting up the request
          console.error('Error:', error.message);
          setErrorMessage('An error occurred. Please try again.');
        }
      }
    }
  };

  return (
    <div>
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
        <button className='reservation-button'>Book now</button>
        <div className='error-reservation'>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
};


export default ReservationForm;
