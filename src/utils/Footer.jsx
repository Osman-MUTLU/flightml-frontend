import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        {new Date().getFullYear()} © All rights reserved by <Link to='/'>FlightML</Link>
    </div>
  )
}

export default Footer