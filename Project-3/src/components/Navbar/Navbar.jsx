import React from 'react'
import '../App.css'

function Navbar() {
  return (
 <nav className='container'>
    <div className='logo'>
        <img src='https://github.com/anshuopinion/React-10-Projects/blob/project-2/project-2/public/images/logo.png?raw=true' alt='logo' />
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
 </nav>
  )
}

export default Navbar;