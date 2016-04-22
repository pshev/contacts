import React from 'react'
import ContactList from './contact-list'
import ContactDetails from './contact-details'
import EditContactDetails from './edit-contact-details'
import Layout from './layout'
import './../style.css'

const App = ({contacts}) => {
  const selectedContact = contacts.all
    .find(contact => contact.id === contacts.selected.id)

  return (
    <Layout>
      <ContactList contacts={contacts} />
      {
        selectedContact && (
          contacts.selected.beingEdited
            ? <EditContactDetails contact={selectedContact} />
            : <ContactDetails contact={selectedContact} />
        )
      }
    </Layout>
  )
}

App.propTypes = {
  contacts: React.PropTypes.object
}

export default App
