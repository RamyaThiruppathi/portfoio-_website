import React from 'react'
import './Footer.css'

const Footer = () => {
    const year = new Date();
  return (
    <div className='footer' >
        <hr />
        <div className='footer-content'>
        <p>&copy; {year.getFullYear()} Ramya. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer