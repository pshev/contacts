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
  	default:
  		return state
  }
}
