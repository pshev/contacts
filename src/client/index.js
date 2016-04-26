import React from 'react'
import App from './components/app'
import initialState from './initial-state'
import rootReducer from './reducers'
import {createStore} from './store'
import ReactDOM from 'react-dom'

const store = createStore(rootReducer)

store.subscribe(renderUI)

renderUI()

function renderUI() {
  ReactDOM.render(
    <App state={store.getState()} store={store} />,
    document.getElementById('root')
  )
}
