import React, { useContext } from 'react';
import { StoreContext } from "../context/StoreContext";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import "./Cart.scss";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,addToCart } = useContext(StoreContext);

  const hasItemsInCart = Object.keys(cartItems).length;
  
  const subtotal = Object.values(cartItems)
    .reduce((acc, quantity) => acc + quantity * food_list.find((item) => item._id === Object.keys(cartItems)[Object.values(cartItems).indexOf(quantity)]).price, 0);

  // Calculate total
  const total = subtotal + 20; // Add delivery fee


  return (
    <div className='cart'>
      <h2>My CART</h2>
      {hasItemsInCart ? ( // Conditionally render content only if cart has items
        <>
          <div className='cart-items'>
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Qty.</p>
              <p>Total</p>
              <p>Add</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id}> {/* Add unique key for improved performance */}
                    <div className='cart-items-title cart-items-item'>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>Rs{item.price * cartItems[item._id]}</p>
                      <p onClick={() => addToCart(item._id)} className='cross'><IoAddCircleOutline /></p>
                      <p onClick={() => removeFromCart(item._id)} className='cross'><GrSubtractCircle /></p>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null; // Return null for empty cart items to avoid unnecessary elements
            })}
          </div>
          <div className='cart-bottom'>
            <div className='cart-total'>
              <h2>Cart Totals</h2>
              <div>
                <div className='cart-total-details'>
                  <p>Subtotal</p>
                  {/* Calculate subtotal based on cartItems */}
                  <p>Rs.{subtotal.toFixed(2)}</p>
                </div>
                <div className='cart-total-details'>
                  <p>Delivery Fee</p>
                  <p>Rs.{20}</p>
                </div>
                <div className='cart-total-details'>
                  <p>Total</p>
                  {/* Calculate total based on subtotal and delivery fee */}
                  <p>Rs.{total.toFixed(2)}</p>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className='cart-promocode'>
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className='cart-promocode-input'>
                  <input type="text" placeholder='promo-code' />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className='empty-cart-message'>Your cart is currently empty. Add some items to start shopping!</p>
      )}
    </div>
  );
};

export default Cart;
