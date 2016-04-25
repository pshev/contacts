import ContactList from '../components/contact-list'
import {contactSelect} from '../actions/contacts'
import resolve from '../shared/resolve'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {fetchContacts} from '../actions/contacts'

export default compose(
  resolve(fetchContacts(), state => state.contacts.beingFetched),
  connect(
    state => ({contacts: state.contacts}),
    dispatch => ({
      onContactSelect: contactId => dispatch(contactSelect(contactId))
    })
  )
)(ContactList)
