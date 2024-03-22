import { createContext,useEffect, useState } from "react";
import {food_list} from "../assets/assets1/assets.js"
export const StoreContext=createContext(null)

 const StoreContextProvider = (props) => {
    // const initialCartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {};

    const [cartItems,setCartItems]= useState(() => {
        // Retrieve cart items from localStorage if it exists
        try {
          const cartItemsString = localStorage.getItem("cartItems");
          if (cartItemsString) {
            return JSON.parse(cartItemsString);
          }
        } catch (error) {
          console.error("Error parsing cart items from localStorage:", error);
        }
    
        // Default to an empty object if localStorage retrieval fails
        return {};
      });

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart=(itemId)=>{
             
      setCartItems((prev) => {
        const newCartItems = { ...prev };
        if (newCartItems[itemId] > 1) {
          // Decrement only if quantity is positive
          newCartItems[itemId] -= 1;
        } else {
          // Remove the item completely if quantity is 0 or less
          delete newCartItems[itemId];
        }
        return newCartItems;
      });
    }

    useEffect(()=>{
     
        try {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
          } catch (error) {
            console.error("Error saving cart items to localStorage:", error);
          }
        }, [cartItems]);

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
   }
   
   return (
       <StoreContext.Provider value={contextValue}>
           {props.children}
       </StoreContext.Provider>
   )
}

export default StoreContextProvider