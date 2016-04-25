import React from 'react'
import Navbar from './navbar'

const Layout = ({children}) =>
  <div className='container-fluid'>
    <Navbar />
    <div className='row'>
      {children}
    </div>
  </div>

export default Layout
