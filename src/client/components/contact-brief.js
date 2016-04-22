import React from 'react'

const ContactBrief = ({contact, onClick}) =>
  <div className='contact-box' onClick={onClick}>
    <h1 className='label label-default'>
      {contact.name}
    </h1>
    <img src={contact.avatar} />
  </div>

ContactBrief.propTypes = {
  contact: React.PropTypes.object,
  onClick: React.PropTypes.func
}

export default ContactBrief
