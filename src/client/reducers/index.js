import initialState from '../initial-state'
import contacts from './contacts'
import {routerReducer} from 'react-router-redux'

export default function rootReducer(state = initialState, action) {
  return {
    contacts: contacts(state.contacts, action),
    routing: routerReducer(state.routing, action)
  }
}
