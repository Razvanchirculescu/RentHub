import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = ({ propertyId }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numGuests, setNumGuests] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reservations', {
        propertyId,
        startDate,
        endDate,
        numGuests
      });
      console.log(response.data);
      // Display confirmation message to the user
    } catch (error) {
      console.error(error);
      // Display error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <label>
        Number of guests:
        <input
          type="number"
          value={numGuests}
          onChange={(e) => setNumGuests(e.target.value)}
        />
      </label>
      <button type="submit">Make reservation</button>
    </form>
  );
};

export default ReservationForm;
