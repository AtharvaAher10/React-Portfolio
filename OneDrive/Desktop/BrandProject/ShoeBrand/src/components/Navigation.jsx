import React from 'react'

const Navigation = () => {
  return (
    
      <nav className='container'>
        <div className="logo">
            <img src="/images/logo.png" />
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#location">Location</li>
            <li href="#about">About</li>
            <li href="#contact">Contact</li>
        </ul>

        <button>
            Login
        </button>

      </nav>
    
  )
}

export default Navigation
