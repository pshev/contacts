import React from 'react'
import Button from './../components/button'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'

const Home = ({dispatch}) =>
  <div>
    <h1>Nothing here. Move on to Contacts.</h1>
    <Button onClick={() => dispatch(push('/'))}>
      Take me there!
    </Button>
  </div>

export default connect()(Home)
