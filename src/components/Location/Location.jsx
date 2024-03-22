import React from 'react';
import "./Location.scss"
const Location = ({ onLocationSelect }) => {
  const handleLocationClick = (location) => {
    onLocationSelect(location);
  };

  return (
    <div className="location-container">
      <h2>Select your location</h2>
      <ul>
        <li onClick={() => handleLocationClick('Jaipur')}>Jaipur</li>
        <li onClick={() => handleLocationClick('Delhi')}>Delhi</li>
        <li onClick={() => handleLocationClick('Bangalore')}>Bangalore</li>
        {/* Add more locations as needed */}
      </ul>
    </div>
  );
};

export default Location;