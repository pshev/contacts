import React from 'react'
import Loader from 'react-loader'
import {connect} from 'react-redux'

export default function resolve(action, beingFetched) {
  return Component => {
    class Resolver extends React.Component {
      static propTypes = {
        dispatch:     React.PropTypes.func,
        beingFetched: React.PropTypes.bool
      }

      componentDidMount() {
        this.props.dispatch(action)
      }

      render() {
        const childProps = {...this.props}
        delete childProps.beingFetched

        return this.props.beingFetched
          ? <Loader />
          : <Component {...childProps} />
      }
    }

    return connect(
      state => ({beingFetched: beingFetched(state)})
    )(Resolver)
  }
}
