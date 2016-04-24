import React from 'react'
import ContactList from './contact-list'
import ContactDetails from './../components/contact-details'
import EditContactDetails from './../components/edit-contact-details'
import Layout from './../components/layout'
import Loader from 'react-loader'
import {connect} from 'react-redux'
import {contactEditViewSelect, fetchContacts} from '../actions/contacts'
import './../style.css'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const {selectedContact, beingEdited, onEditClick, beingFetched} = this.props

    if (beingFetched)
      return <Loader />

    return (
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
    )
  }
}

App.propTypes = {
  contacts: React.PropTypes.object
}

export default connect(
  state => ({
    selectedContact: state.contacts.all
      .find(contact => contact.id === state.contacts.selected.id),
    beingEdited: state.contacts.selected.beingEdited,
    beingFetched: state.contacts.beingFetched
  }),
  dispatch => ({
    fetchData: () => dispatch(fetchContacts()),
    onEditClick: () => dispatch(contactEditViewSelect())
  })
)(App)
