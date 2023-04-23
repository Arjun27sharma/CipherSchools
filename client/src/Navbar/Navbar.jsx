import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav_left">
            <div className="nav_logo">
                logo
            </div>
            <div className="nav_brand_name">
                Cipher schools
            </div>
        </div>

        <div className="nav_right">
            <Link className="profile_icon" to="/login">
                profileicon
            </Link>
        </div>

    </div>
  )
}

export default Navbar