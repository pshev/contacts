import React from 'react'
import App from './containers/app'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import DevTools from './containers/dev-tools'
import {createStore, compose, applyMiddleware} from 'redux'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument()
  )
)

if (module.hot)
// Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
