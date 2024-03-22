import React, { useState } from 'react';
import './OrderPage.scss'; // Import SCSS for styling
const basePrice = 70; // Set a base price per day (adjust as needed)
const pricePerDayIncrease = 50;
const OrderPage = ({ location }) => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedDays, setSelectedDays] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  const handleDaysChange = (e) => {
    setSelectedDays(e.target.value);
  };

  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleInstructionsChange = (e) => {
    setSpecialInstructions(e.target.value);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const orderDetails = {
      location,
      duration: selectedDuration,
      days: selectedDays,
      deliveryAddress,
      specialInstructions,
    };
    alert(`Order submitted for ${orderDetails.duration} days, starting at ${location}. Delivery to ${orderDetails.deliveryAddress}`);
  };

  return (
    <div className="order-page-container">
      <h2>Confirm your Tiffin Order ({location})</h2>
      <form onSubmit={handleSubmitOrder}>
        <div className="order-details">
          <label htmlFor="duration">Select Duration:</label>
          <select id="duration" value={selectedDuration} onChange={handleDurationChange}>
            <option value="">Select</option>
            <option value="1">1 Day (₹{basePrice})</option>
            <option value="7">7 Days (₹{(basePrice + pricePerDayIncrease * 6)})</option>
            <option value="10">10 Days (₹{(basePrice + pricePerDayIncrease * 9)})</option>
            <option value="15">15 Days (₹{(basePrice + pricePerDayIncrease * 14)})</option>
            <option value="30">30 Days (₹{(basePrice + pricePerDayIncrease * 29)})</option>
         </select>
          <label htmlFor="days">Select Specific Days (optional):</label>
          <input type="text" id="days" value={selectedDays} onChange={handleDaysChange} placeholder="E.g., Monday, Wednesday" />
          <label htmlFor="address">Delivery Address:</label>
          <textarea id="address" value={deliveryAddress} onChange={handleAddressChange} required />
          <label htmlFor="instructions">Special Instructions (optional):</label>
          <textarea id="instructions" value={specialInstructions} onChange={handleInstructionsChange} />
        </div>
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
};

export default OrderPage;
