import React from 'react'
import { useState } from 'react'
import Header from '../components/header/Header'
import Card from '../components/Card/Card'
import Collection from '../components/Collection/Collection'
import Cities from '../components/City/City'
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/Login'
const Home=({ showLogin,setShowLogin })=>{
    
  return (
    <>
    {/* {showLogin  && <Login setShowLogin={setShowLogin}/>} */}
    <Header setShowLogin={setShowLogin} showLogin={showLogin}/>
    <Card/>
    <Collection/>
    <Cities/>   
    <Footer/>
    {/* <Navbar setShowLogin={setShowLogin} /> */}
    </>
  )
}

export default Home