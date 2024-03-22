import React from 'react'
import "./Collection.scss"
import OnlineOrder1Img from "../../assets/pizza.jpg" // Replace with image
import OnlineOrder2Img from "../../assets/streetfood.webp" // Replace with image
import DonateFoodImg from "../../assets/donate-food.jpeg" // Replace with appropriate image
import TiffinService1Img from "../../assets/tiffin-veg.jpg" // Replace with image
import TiffinService2Img from "../../assets/tiffin-jain.webp" // Replace with image
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Collection = () => {
  return (
    <div className='collection'>
      <h1>Explore Jaipur's Food Scene</h1>
      <div className='collectionText'>
        <p>Explore curated lists of top resturants, cafes , pubs and bars in the jaipur based on trendy</p>
        <span>All collection in Jaipur<KeyboardArrowRightIcon/></span>
      </div>
      <div className='collectionCard'>
        {/* Online Order Collections */}
        {/* <h2>Order In</h2>  Subheading for Online Order collections */}
        <div className='collectionImg'>
          <img src={OnlineOrder1Img} alt="Online Order Pizza" />
          <h3>Pizza Cravings?</h3>
          <span>Explore Now<KeyboardArrowRightIcon/></span>
        </div>
        <div className='collectionImg'>
          <img src={OnlineOrder2Img} alt="Online Order Street Food" />
          <h3>Explore Jaipur's Street Food</h3>
          <span>Discover Now<KeyboardArrowRightIcon/></span>
        </div>

        {/* Donate Food Collection */}
        {/* <h2>Make a Difference</h2>  Subheading for Donate Food collection */}
        <div className='collectionImg'>
          <img src={DonateFoodImg} alt="Donate Food" />
          <h3>Donate Food & Help Your Community</h3>
          <span>Learn More<KeyboardArrowRightIcon/></span>
        </div>

        {/* Tiffin Service Collections */}
        {/* <h2>Tiffin Time</h2>  Subheading for Tiffin Service collections */}
        <div className='collectionImg'>
          <img src={TiffinService1Img} alt="Tiffin Service - Vegetarian" />
          <h3>Delicious Vegetarian Tiffin</h3>
          <span>Order Now<KeyboardArrowRightIcon/></span>
        </div>
        <div className='collectionImg'>
          <img src={TiffinService2Img} alt="Tiffin Service - Jain" />
          <h3>Jain Tiffin Service</h3>
          <span>Explore Options<KeyboardArrowRightIcon/></span>
        </div>
      </div>
    </div>
  )
}

export default Collection
