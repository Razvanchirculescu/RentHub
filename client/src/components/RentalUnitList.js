import React from 'react';
import RentalUnit from './RentalUnit';

const RentalUnitList = ({ propertyData }) => {
  const rentalUnitTypes = new Set();
  propertyData.rentalUnits.forEach(rentalUnit => {
    rentalUnitTypes.add(rentalUnit.rentalUnitType);
  });

  return (
    <div className="rental-unit-list">
      {Array.from(rentalUnitTypes).map((rentalUnitType, index) => {
        const rentalUnits = propertyData.rentalUnits.filter(rentalUnit => {
          return rentalUnit.rentalUnitType === rentalUnitType;
        });

        return (
          <RentalUnit key={index} rentalUnitType={rentalUnitType} count={rentalUnits.length} />
        );
      })}
    </div>
  );
};

export default RentalUnitList;
