import React from 'react'

const Button = ({type = 'default', children, onClick}) =>
  <button className={`btn btn-${type}`} onClick={onClick}>
    {children}
  </button>

Button.propTypes = {
  type:    React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default Button
