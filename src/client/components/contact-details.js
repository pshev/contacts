import React from 'react'
import Button from './button'
import Details from './details'
import List from './list'
import ListItem from './list-item'

const ContactDetails = ({contact}) =>
  <Details>
    <List>
      <ListItem>Name: {contact.name}</ListItem>
      <ListItem>Email: {contact.email}</ListItem>
      <ListItem>Phone: {contact.phone}</ListItem>
    </List>
    <Button>Edit</Button>
  </Details>

ContactDetails.propTypes = {
  contact: React.PropTypes.object
}

export default ContactDetails
