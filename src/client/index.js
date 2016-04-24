import React from 'react'
import App from './containers/app'
import rootReducer from './reducers'
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
