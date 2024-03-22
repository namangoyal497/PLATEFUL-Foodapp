import React from 'react';
import './MealPlan.scss'; // Import SCSS for styling

const MealPlan = ({ location, showOrder }) => {
  const mealPlan = [
    {
      day: 'Monday',
      breakfast: 'Poha (flattened rice)',
      lunch: 'Dal Makhani (black lentil curry) & Roti (flatbread)',
      dinner: 'Chicken Curry & Rice',
      dessert: 'Gulab Jamun (sweet dumplings)',
    },
    {
      day: 'Tuesday',
      breakfast: 'Upma (semolina porridge)',
      lunch: 'Kadai Paneer (cottage cheese in gravy) & Roti',
      dinner: 'Fish Curry & Rice',
      dessert: 'Moong Dal Halwa (sweet lentil pudding)',
    },
    {
      day: 'Wednesday',
      breakfast: 'Paratha (stuffed flatbread)',
      lunch: 'Chole (chickpea curry) & Bhatura (fried flatbread)',
      dinner: 'Mutton Rogan Josh (lamb curry)',
      dessert: 'Kheer (rice pudding)',
    },
    {
      day: 'Thursday',
      breakfast: 'Idli & Sambar (rice cakes & lentil stew)',
      lunch: 'Rajma Masala (kidney bean curry) & Rice',
      dinner: 'Vegetable Biryani (mixed vegetable rice dish)',
      dessert: 'Gajar ka Halwa (carrot pudding)',
    },
    {
      day: 'Friday',
      breakfast: 'Cheela (gram flour pancake)',
      lunch: 'Aloo Gobi (potato & cauliflower curry) & Roti',
      dinner: 'Prawn Curry & Rice',
      dessert: 'Rasmalai (sweet cheese dumplings)',
    },
    {
      day: 'Saturday',
      breakfast: 'Puri & Sabzi (fried flatbread & vegetable curry)',
      lunch: 'Butter Chicken & Naan (creamy chicken curry & leavened bread)',
      dinner: 'Hyderabadi Biryani (fragrant rice dish)',
      dessert: 'Jalebi (sweet fried funnel)',
    },
    {
      day: 'Sunday',
      breakfast: 'Dosa & Chutney (fermented crepe & coconut sauce)',
      lunch: 'Kadhi Pakora (gram flour curry with fritters) & Rice',
      dinner: 'Paneer Tikka Masala (cottage cheese in gravy) & Roti',
      dessert: 'Kulfi (frozen Indian ice cream)',
    },
  ];

  const handleOrderClick = () => {
    showOrder(true);
  };

  return (
    <div className="meal-plan-container">
      <h2 className="meal-plan-title">{location}'s Weekly Meal Plan</h2>
      <div className="card-container">
        {mealPlan.map((day, index) => (
          <div key={index} className="meal-card">
            <h3 className="day">{day.day}</h3>
            <div className="meal-details">
              <p><strong>Breakfast:</strong> {day.breakfast}</p>
              <p><strong>Lunch:</strong> {day.lunch}</p>
              <p><strong>Dinner:</strong> {day.dinner}</p>
              <p><strong>Dessert:</strong> {day.dessert}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="order-button" onClick={handleOrderClick}>Order Now</button> */}
    </div>
  );
};

export default MealPlan;
