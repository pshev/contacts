import React from 'react'
import ContactList from './contact-list'
import ContactDetails from './../components/contact-details'
import EditContactDetails from './edit-contact-details'
import Layout from './../components/layout'
import Loader from 'react-loader'
import {connect} from 'react-redux'
import {contactEditViewSelect} from '../actions/contacts'

const App = ({selectedContact, beingEdited, onEditClick}) =>
  <div>
    <ContactList />
    {
      selectedContact && (
        beingEdited
          ? <EditContactDetails contact={selectedContact} />
          : <ContactDetails contact={selectedContact} onEditClick={onEditClick} />
      )
    }
  </div>

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
