import React from 'react'
import { assets } from '../assets/assets'

export const AppDownload = () => {
  return (
    <div className="app-download">
        <div className="container">
            <h2>For Better Experience Download App</h2>
            <ul className='mb-0'>
                <li><a href="#"><img src={assets.play_store} alt="" /></a></li>
                <li><a href="#"><img src={assets.app_store} alt="" /></a></li>
            </ul>
        </div>
    </div>
  )
}
export default AppDownload