export default function contacts(state, action) {
  switch(action.type) {
  	case 'CONTACT_SELECT':
  		return {
        ...state,
        selected: {
          ...state.selected,
          id: action.contactId
        }
      }
  	default:
  		return state
  }
}
