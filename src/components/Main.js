import React, { Component } from 'react'
import Nav from './Nav'
import BasicPage from './BasicPage'
import SurfacesPage from './SurfacesPage'
import './Main.scss'

const componentForPath = {
  '/basic': BasicPage,
  '/content': BasicPage,
  '/surfaces': SurfacesPage
}

class Main extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.match.path !== nextProps.match.path
  }

  render () {
    const { history, location, match } = this.props
    const PageContent = componentForPath[match.path]
    return (
      <div className='Main'>
        <Nav history={history} location={location} match={match} />
        <div className='Main-content'>
          <PageContent />
        </div>
      </div>
    )
  }
}

export default Main
