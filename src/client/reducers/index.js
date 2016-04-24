import initialState from '../initial-state'
import contacts from './contacts'

export default function rootReducer(state = initialState, action) {
  return {
    contacts: contacts(state.contacts, action)
  }
}
