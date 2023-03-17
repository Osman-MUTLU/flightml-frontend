import { Icon } from '@mui/material'
import React from 'react'
import '../styles/Navbar.css' 

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar__logo">
            <div className="navbar__logo__icon">
                <i className='fas fa-plane-departure'></i>
            </div>
            <div className="navbar__logo__text">
                FlightML
            </div>
        </div>
    </div>
  )
}

export default Navbar