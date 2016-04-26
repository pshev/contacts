import React from 'react'
import ContactBrief from './contact-brief'
import List from './list'
import ListItem from './list-item'
import {contactSelect} from '../actions/contacts'

const ContactList = ({contacts, store}) =>
  <div className='contact-list col-md-4'>
    <List>
      {
        contacts.all.map(contact =>
          <ListItem key={contact.id} selected={contact.id === contacts.selected.id}>
            <ContactBrief
              contact={contact}
              onClick={() => store.dispatch(contactSelect(contact.id))} />
          </ListItem>
        )
      }
    </List>
  </div>

ContactList.propTypes = {
  contacts: React.PropTypes.object
}

export default ContactList
