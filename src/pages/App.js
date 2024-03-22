import { useState } from "react";
import "./app.scss"
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from "../components/Login/Login.jsx";
import Tiffin from "./Tiffin.jsx"
import Menu from "./Menu.jsx"
import Home from "./Home1.jsx";
import Cart from "./Cart.jsx"
import Donation from "./Donation.jsx"
const  App=()=> {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home showLogin={showLogin} setShowLogin={setShowLogin}/>}/>
    <Route path="/login" element={<Login setShowLogin={setShowLogin}/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/tiffin" element={<Tiffin/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/donation" element={<Donation/>}/>

    </Routes>
    </BrowserRouter>
    {/* <Header/> */}
     {/* <Home/> */}
    </div>
  );
}

export default App;
