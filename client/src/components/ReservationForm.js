import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

const ReservationForm = ({ propertyId }) => {
  const [checkIn, setStartDate] = useState('');
  const [checkOut, setEndDate] = useState('');

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/properties/${propertyId}/reservations`, {
        propertyId,
        checkIn,
        checkOut
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='reservation-dates'>
        <label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Make reservation</button>
    </form>
  );
};

export default ReservationForm;
