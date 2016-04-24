import ContactList from '../components/contact-list'
import {contactSelect} from '../actions/contacts'
import {connect} from 'react-redux'

export default connect(
  state => ({contacts: state.contacts}),
  dispatch => ({
    onContactSelect: contactId => dispatch(contactSelect(contactId))
  })
)(ContactList)
