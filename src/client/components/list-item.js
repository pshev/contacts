import React from 'react'

const ListItem = ({className = '', selected, children}) => {
  const classes = className + ' list-group-item ' + (selected ? 'selected' : '')

  return (
    <li className={classes}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  className: React.PropTypes.string,
  selected:  React.PropTypes.bool
}

export default ListItem
