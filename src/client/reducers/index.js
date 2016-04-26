import contacts from './contacts'
import initialState from '../initial-state'

export default function rootReducer(state = initialState, action) {
  return {
    contacts: contacts(state.contacts, action)
  }
}
