import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardNav() {
  return (
    <div className='p-4'>
        <h2>Navigating Programmatically</h2>
        <p className='f-4'>Dashboard / <Link to="/">Home</Link></p>
    </div>
  )
}
