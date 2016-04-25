import ContactList from '../components/contact-list'
import {contactSelect, filterChange} from '../actions/contacts'
import resolve from '../shared/resolve'
import {createSelector} from 'reselect'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {fetchContacts} from '../actions/contacts'

const getFilteredContacts = createSelector(
  [state => state.contacts.all, state => state.contacts.filter],
  (contacts, filter) =>
    contacts.filter(c => c.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
)

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
  filter: state.contacts.filter,
  selectedContactId: state.contacts.selected.id
})

const mapDispatchToProps = dispatch => ({
  onContactSelect: contactId => dispatch(contactSelect(contactId)),
  onFilterChange: value => dispatch(filterChange(value))
})

export default compose(
  resolve(fetchContacts(), state => state.contacts.beingFetched),
  connect(mapStateToProps, mapDispatchToProps)
)(ContactList)