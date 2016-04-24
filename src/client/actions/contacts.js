import types from './types/contacts'

export const contactSelect = contactId => ({
  type: types.CONTACT_SELECT,
  contactId
})

export const contactEditViewSelect = () => ({
  type: types.CONTACT_EDIT_VIEW_SELECT
})
