import types from './types/contacts'
import {getContacts} from '../api'

export const contactSelect = contactId => ({
  type: types.CONTACT_SELECT,
  contactId
})

export const contactEditViewSelect = () => ({
  type: types.CONTACT_EDIT_VIEW_SELECT
})

export const contactsRequest = () => ({
  type: types.CONTACTS_REQUEST
})

export const contactsReceive = contacts => ({
  type: types.CONTACTS_RECEIVE,
        contacts
})

export function fetchContacts() {
  return function(dispatch, getState) {
    const state = getState()

    if (state.contacts.all.length)
      return Promise.resolve(state.contacts.all)

    dispatch(contactsRequest())

    return getContacts()
      .then(data => dispatch(contactsReceive(data.contacts)))
  }
}