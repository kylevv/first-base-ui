import React, { Component } from 'react'
import Nav from './Nav'
// import Footer from './Footer'
// import Gallery from './Gallery'

class Main extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.match.path !== nextProps.match.path
  }

  // handleClick () {
  //   this.props.history.push('/')
  // }

  render () {
    const { history, location, match } = this.props
    return (
      <div>
        <Nav history={history} location={location} match={match} />
      </div>
    )
  }
}

export default Main
