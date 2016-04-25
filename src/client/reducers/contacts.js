import types from '../actions/types/contacts'
import routerActionTypes from '../actions/types/router'

export default function contacts(state, action) {
  switch(action.type) {
  	case types.CONTACT_SELECT:
  		return {
        ...state,
        selected: {
          id: action.contactId,
          beingEdited: false
        }
      }
    case types.CONTACT_EDIT_VIEW_SELECT:
      return {
        ...state,
        selected: {
          ...state.selected,
          beingEdited: true
        }
      }
    case types.CONTACTS_REQUEST:
      return {
        ...state,
        beingFetched: true
      }
    case types.CONTACTS_RECEIVE:
      return {
        ...state,
        all: action.contacts,
        beingFetched: false
      }
    case routerActionTypes.LOCATION_CHANGE:
      return {
        ...state,
        selected: {
          id: -1,
          beingEdited: false
        }
      }
  	default:
  		return state
  }
}
