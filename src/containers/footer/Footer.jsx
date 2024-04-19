import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className=' main-footer'>
      <div className='main-footer__section'>
        <h4>Company</h4>
        <p>About Us</p>
        <p>Our Services</p>
        <p>Privacy Policy</p>
        <p>Afilliate Program</p>
      </div>
      <div className='main-footer__section'>
        <h4>Get Help</h4>
        <p>FAQ</p>
        <p>Shipping</p>
        <p>Returns</p>
        <p>Order Status</p>
      </div>
      <div className='main-footer__section'>
        <h4>Online Shop</h4>
        <p>Payment Options</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Newsletter</p>
      </div>
      <div className='main-footer__section main-footer__section--photos'>
        <h4>Follow Us</h4>
        <div className='main-footer__photos'>
          <img src="src\assets\twitter-64.png" alt="twitter-icon" />
          <img src="src\assets\instagram-64.png" alt="insagram-icon" />
          <img src="src\assets\facebook-3-64.png" alt="facebook-icon" />
        </div>
      </div>
    </footer>
  )
}
