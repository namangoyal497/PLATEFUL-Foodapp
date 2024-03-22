import React from 'react'
import "./Header.scss"
const Header = ({showLogin,setShowLogin}) => {

  const handleLogin = () => {
    // Implement login logic (e.g., form submission, authentication)
    // Assuming successful login, update state
    setShowLogin(true);
  };

  const handleLogout = () => {
    // Implement logout logic (e.g., clear tokens, session)
    // Update state to reflect logout
    setShowLogin(false);
  };

  return (
    <div className='header'>
        <nav>
                <a href="/donation"><span>Donate</span></a>
                <div className='right'>
                {showLogin? (
            <span onClick={handleLogout}>
              <span >Logout</span>
            </span>
          ) : (
            <a href="/login" onClick={handleLogin}>
              <span>Sign In</span>
            </a>
          )}
                {/* {!showLogin?<a href="/login"><span onClick={()=>setShowLogin(true)}>Sign in</span></a>:<button><span onClick={()=>setShowLogin(false)}>LogOut</span></button>} */}
         </div>
        </nav>
        <div className='headerContent'>
         <span className='FoodApp'>Plateful</span>
          <span className='tagline'>Don't waste a bite. Order, donate, delight.</span>
          <div className='foodsearch'>
            <select name="city" id="city">
              <option>Jaipur</option>
              <option>Kota</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Banglore</option>
            </select>
            <input type="text" placeholder="Search by cuisine, dish, or dietary preference"/>
          </div>
        </div>
    </div>
  )
}

export default Header