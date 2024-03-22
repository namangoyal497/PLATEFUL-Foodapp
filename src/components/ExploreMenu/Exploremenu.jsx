import React from 'react'
import "./Exploremenu.scss"
import {menu_list} from '../../assets/assets1/assets'
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <div className='explore-heading'>
        <h1>Explore our menu</h1>
        <p>Choose from a diverse menu featuring a delectable array</p>
        </div>
        <div className='menu-list'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
                     <img className={category===item.menu_name?"active":""} id="menu-item"src={item.menu_image} alt=""/>
                     <p>{item.menu_name}</p>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Exploremenu