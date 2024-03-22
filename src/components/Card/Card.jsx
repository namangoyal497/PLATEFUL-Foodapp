import React from 'react'
import "./Card.scss"
import Online from "../../assets/Online-Food.png"
import Donate from "../../assets/donate.jpg"
import Tiffin from "../../assets/tiffin.webp"
const Card = () => {
  return (
    <div className='card'>
       <div className='cardImg'>
        <a href="/menu"><img src={Online} alt="online_img"/></a>
        <h1>Order Online</h1>
        <span>Stay home and order to your Doorstep</span>
       </div>
       <div className='cardImg'>
       <a href="/donation"><img src={Donate} alt="Donate_img"/></a>
        <h1>Donate Food</h1>
        <span>Share a Meal, Share Kindness. </span>
       </div>
       <div className='cardImg'>
       <a href="/menu"><img src={Tiffin} alt="Dine_img"/></a>
        <h1>Tiffin Treasures</h1>
        <span>Where Taste Meets Tradition</span>
       </div>
    </div>
  )
}

export default Card;