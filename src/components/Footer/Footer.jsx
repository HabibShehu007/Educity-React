import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p className='footer-copy'>&copy; 2025 Edusity. All Rights Reserved.</p>
        <ul className='footer-links'>
          <li><a href='#'>Terms of Service</a></li>
          <li><a href='#'>Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
