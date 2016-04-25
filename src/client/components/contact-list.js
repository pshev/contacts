import React from 'react'
import ContactBrief from './contact-brief'
import List from './list'
import ListItem from './list-item'

const ContactList = ({contacts, filter, selectedContactId, onFilterChange, onContactSelect}) =>
  <div className='contact-list col-md-4'>
    <List>
      <ListItem>
        <input
          type='text'
          value={filter}
          onChange={event => onFilterChange(event.target.value)}
          placeholder='filter...' />
      </ListItem>
      {
        contacts.map(contact =>
          <ListItem key={contact.id} selected={contact.id === selectedContactId}>
            <ContactBrief contact={contact} onClick={() => onContactSelect(contact.id)} />
          </ListItem>
        )
      }
    </List>
  </div>

ContactList.propTypes = {
  contacts: React.PropTypes.array
}

export default ContactList
