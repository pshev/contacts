import React from 'react'
import {Link} from 'react-router'

const Navbar = () =>
  <nav className='navbar navbar-default'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <ul className='nav navbar-nav navbar-left'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/'>Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

export default Navbar
