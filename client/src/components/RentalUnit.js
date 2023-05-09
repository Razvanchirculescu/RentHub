import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

const RentalUnit = ({ rentalUnitType, count }) => {
  const icon = rentalUnitType === 'SINGLE' ? 'bed' : 'bed-double';
  return (
    <div className="rental-unit">
      <FontAwesomeIcon icon={faBed} />
      <span className="ml-2">{rentalUnitType}</span>
      {count > 1 && <span className="ml-2">x{count}</span>}
    </div>
  );
};

export default RentalUnit;
