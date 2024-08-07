import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <img src={assets.logo} alt="" width="100" />
                    <div className="footer-social-links mt-3">
                        <a href=""><img src={assets.facebook_icon} alt="" /></a>
                        <a href=""><img src={assets.twitter_icon} alt="" /></a>
                        <a href=""><img src={assets.linkedin_icon} alt="" /></a>
                    </div>
                </div>
                <div className="col-md">
                    <h3>Quick Links</h3>
                    <ul className='mb-0'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="col-md">
                    <h3>Get in Touch</h3>
                    <ul className='mb-0'>
                        <li>+91 9876543210</li>
                        <li><a href="mailto:testmail.com">testmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer