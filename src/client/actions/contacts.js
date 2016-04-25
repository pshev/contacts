import types from './types/contacts'
import {getContacts} from '../api'

export const contactSelect = contactId => ({
  type: types.CONTACT_SELECT,
  contactId
})

export const contactSave = () => ({
  type: types.CONTACT_SAVE
})

export const contactChanged = (contactId, fieldName, value) => ({
  type: types.CONTACT_CHANGE,
  contactId,
  fieldName,
  value
})

export const filterChange = value => ({
  type: types.CONTACTS_FILTER_CHANGE,
  value
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