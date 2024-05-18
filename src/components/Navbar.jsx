import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="nav-logo">
            <Link to="/"><img src="./logo192.png" alt="" /></Link>
        </div>
        <div className="nav-button">
            <button>Login</button>
            <button>Signup</button>
        </div>
    </nav>
  )
}

export default Navbar