export function createStore(rootReducer) {
  let state
  let reducer = rootReducer
  let listeners = []

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  function subscribe(callback) {
    listeners.push(callback)
  }

  dispatch(({type: '__INIT__'}))

  return {
    getState,
    subscribe,
    dispatch
  }
}
