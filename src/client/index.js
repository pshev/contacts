import React from 'react'
import App from './containers/app'
import rootReducer from './reducers'
import DevTools from './containers/dev-tools'
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

const store = createStore(rootReducer, DevTools.instrument())

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
