export default function contacts(state, action) {
  switch(action.type) {
  	case 'CONTACT_SELECT':
  		return {
        ...state,
        selected: {
          id: action.contactId,
          beingEdited: false
        }
      }
    case 'CONTACT_EDIT_VIEW_SELECT':
      return {
        ...state,
        selected: {
          ...state.selected,
          beingEdited: true
        }
      }
  	default:
  		return state
  }
}
