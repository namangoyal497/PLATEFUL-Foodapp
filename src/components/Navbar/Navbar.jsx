import React from 'react'

const Navbar = ({setShowLogin}) => {
  return (
    <div className='nav'>
    <span>Get the App</span>
            <div className='right'>
                <span>Investor Relations</span>
                <span>Donate</span>
        
                <span onClick={()=>setShowLogin(true)}>Sign in</span>
            </div>
    </div>
  )
}

export default Navbar