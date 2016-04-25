import App from './containers/app'
import Contacts from './containers/contacts-page'
import Home from './containers/home'
import React from 'react'
import {Route, IndexRoute} from 'react-router'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Contacts} />
    <Route path='/home' component={Home}/>
  </Route>
)
