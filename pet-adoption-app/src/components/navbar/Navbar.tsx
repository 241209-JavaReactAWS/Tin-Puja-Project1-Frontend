import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="navClass">
        <Link className="navLink" to="/about"> About Us</Link>
        <Link className="navLink" to="/login"> Login</Link>
        <Link className="navLink" to="/signup"> Sign Up</Link>
        <Link className="navLink" to="/pets"> Pets</Link>
    </nav>
    
    </>
  )
}

export default Navbar