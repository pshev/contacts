const apiBase = '/api/'

export function getContacts() {
  return getJSON('contacts')
}

export function getJSON(uri) {
  return fetch(apiBase + uri)
    .then(response => response.json())
}
