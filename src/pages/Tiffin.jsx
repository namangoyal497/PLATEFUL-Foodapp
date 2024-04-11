import React, { useState } from 'react';
// import './styles.scss'; // Import your SCSS file
import Location from '../components/Location/Location';
import MealPlan from '../components/MealPlan/MealPlan';
import OrderPage from '../components/OrderPage/OrderPage';
import HeaderMenu from '../components/header/Headermenu';
// import Reservation from '../components/Reservation/Reservation';

const Tiffin=()=> {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showOrderPage, setShowOrderPage] = useState(false);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowOrderPage(true);
  };

  return (
    <div className="App">
      <HeaderMenu />
      <Location onLocationSelect={handleLocationSelect} />
      {selectedLocation && (
        <MealPlan location={selectedLocation} showOrder={setShowOrderPage} />
      )}
      {showOrderPage && <OrderPage location={selectedLocation} />}
    </div>
  );
}

export default Tiffin;