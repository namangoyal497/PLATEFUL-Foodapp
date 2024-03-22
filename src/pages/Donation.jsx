import React, { useState } from 'react';
import "./Donation.scss"
const DonateFood = () => {
  const [selectedThali, setSelectedThali] = useState(null);
  const [mealQuantity, setMealQuantity] = useState(1);

  const thaliDescriptions = {
    basic: 'A simple yet satisfying meal with roti, dal, sabji (seasonal vegetables), and chach (buttermilk).',
    standard: 'A balanced and filling meal with roti, dal, two sabjis (seasonal vegetables), rice, and chach (buttermilk).',
    deluxe: 'A hearty and delicious meal with roti, dal makhani (creamy lentils), two sabjis (seasonal vegetables), rice, raita (yogurt dip), and a sweet dish.',
  };

  const handleThaliChange = (e) => {
    setSelectedThali(e.target.value);
  };

  const handleMealQuantityChange = (e) => {
    setMealQuantity(parseInt(e.target.value));
  };

  const handleSubmitDonation = (event) => {
    event.preventDefault();

    if (!selectedThali) {
      alert('Please select a thali option to donate.');
      return;
    }

    const thaliDetails = {
      name: selectedThali,
      price: getThaliPrice(selectedThali),
      quantity: mealQuantity,
      description: thaliDescriptions[selectedThali],
    };

    const totalPrice = thaliDetails.price * thaliDetails.quantity;

    alert(`Thank you for donating ₹${totalPrice} for ${thaliDetails.quantity} ${thaliDetails.name} thalis!

Description: ${thaliDetails.description}`);

    // Clear selection and quantity after successful submission
    setSelectedThali(null);
    setMealQuantity(1);
  };

  const getThaliPrice = (thali) => {
    switch (thali) {
      case 'basic':
        return 50;
      case 'standard':
        return 75;
      case 'deluxe':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="donate-food-container">
      <h2>Donate Food</h2>
      <p>Help provide meals to those in need.</p>
      <form onSubmit={handleSubmitDonation}>
        <div className="thali-selection">
          <h3>Select Thali Option:</h3>
          <div className="radio-group">
            <input
              type="radio"
              id="basic-thali"
              name="thali"
              value="basic"
              checked={selectedThali === 'basic'}
              onChange={handleThaliChange}
            />
            <label htmlFor="basic-thali">
              Basic Thali (₹50)
            </label>
            <p className="thali-description">{thaliDescriptions.basic}</p>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              id="standard-thali"
              name="thali"
              value="standard"
              checked={selectedThali === 'standard'}
              onChange={handleThaliChange}
            />
            <label htmlFor="standard-thali">
              Standard Thali (₹75)
            </label>
            <p className="thali-description">{thaliDescriptions.standard}</p>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              id="deluxe-thali"
              name="thali"
              value="deluxe"
              checked={selectedThali === 'deluxe'}
              onChange={handleThaliChange}
            />
            <label htmlFor="deluxe-thali">
              Deluxe Thali (₹100)
            </label>
            <p className="thali-description">{thaliDescriptions.deluxe}</p>
          </div>
        </div>
        <div className="meal-quantity">
          <label htmlFor="meal-quantity">Number of Meals:</label>
          <input
            type="number"
            id="meal-quantity"
            value={mealQuantity}
            onChange={handleMealQuantityChange}
            min={1}
          />
        </div>
        <button type="submit">Donate Now</button>
      </form>
</div>)
}
export  default DonateFood;