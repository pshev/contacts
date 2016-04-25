import React from 'react'
import Button from './../components/button'
import Details from './../components/details'
import List from './../components/list'
import ListItem from './../components/list-item'
import TextInput from './../components/text-input'
import {contactChanged, contactSave} from '../actions/contacts'
import {connect} from 'react-redux'

const EditContactDetails = ({contact, dispatch}) => {
  return (
    <Details>
      <List>
        <ListItem>
          <TextInput
            label='Name'
            value={contact.name}
            onChange={value => onValueChange('name', value)} />
        </ListItem>
        <ListItem>
          <TextInput
            label='Phone'
            value={contact.phone}
            onChange={value => onValueChange('phone', value)} />
        </ListItem>
        <ListItem>
          <TextInput
            label='Email'
            value={contact.email}
            onChange={value => onValueChange('email', value)} />
        </ListItem>
      </List>
      <Button type='success' onClick={() => dispatch(contactSave())}>
        Save
      </Button>
    </Details>
  )

  function onValueChange(fieldName, value) {
    dispatch(contactChanged(contact.id, fieldName, value))
  }
}

EditContactDetails.propTypes = {
  contact: React.PropTypes.object
}

export default connect()(EditContactDetails)