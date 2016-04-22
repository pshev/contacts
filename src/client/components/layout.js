import React from 'react'

const Layout = ({children}) =>
  <div className='container-fluid'>
    <div className='row'>
      {children}
    </div>
  </div>

export default Layout
