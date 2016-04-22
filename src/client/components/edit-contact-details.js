import React from 'react'
import Button from './button'
import Details from './details'
import List from './list'
import ListItem from './list-item'
import TextInput from './text-input'

const EditContactDetails = ({contact}) =>
  <Details>
    <List>
      <ListItem>
        <TextInput
          label='Name'
          value={contact.name} />
      </ListItem>
      <ListItem>
        <TextInput
          label='Phone'
          value={contact.phone} />
      </ListItem>
      <ListItem>
        <TextInput
          label='Email'
          value={contact.email} />
      </ListItem>
    </List>
    <Button type='success'>Save</Button>
  </Details>

EditContactDetails.propTypes = {
  contact: React.PropTypes.object
}

export default EditContactDetails
