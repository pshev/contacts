import React from 'react'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import DevTools from './containers/dev-tools'
import ReactDOM from 'react-dom'
import routes from './routes'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(routerMiddleware(browserHistory), thunkMiddleware),
    DevTools.instrument()
  )
)

if (module.hot)
// Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(nextRootReducer)
  })

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <Router routes={routes} history={history} />
    </div>
  </Provider>,
  document.getElementById('root')
)
