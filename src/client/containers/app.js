import React from 'react'
import ContactList from './contact-list'
import ContactDetails from './../components/contact-details'
import EditContactDetails from './../components/edit-contact-details'
import Layout from './../components/layout'
import {connect} from 'react-redux'
import {contactEditViewSelect} from '../actions/contacts'
import './../style.css'

const App = ({selectedContact, beingEdited, onEditClick}) =>
  <Layout>
    <ContactList />
    {
      selectedContact && (
        beingEdited
          ? <EditContactDetails contact={selectedContact} />
          : <ContactDetails contact={selectedContact} onEditClick={onEditClick} />
      )
    }
  </Layout>

App.propTypes = {
  contacts: React.PropTypes.object
}

export default connect(
  state => ({
    selectedContact: state.contacts.all
      .find(contact => contact.id === state.contacts.selected.id),
    beingEdited: state.contacts.selected.beingEdited
  }),
  dispatch => ({
    onEditClick: () => dispatch(contactEditViewSelect())
  })
)(App)
