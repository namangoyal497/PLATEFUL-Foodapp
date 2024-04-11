import React from 'react'
import { useState } from 'react'
import Exploremenu from '../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay'
import HeaderMenu from '../components/header/Headermenu'

const Menu = () => {
    const [category,setCategory]=useState("All")
    return (
      
      <>
      <HeaderMenu/>
      <Exploremenu category={category} setCategory={setCategory}/>
    
      <FoodDisplay category={category}/>
      </>
    )
}

export default Menu