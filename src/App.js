import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router'
import { createBrowserHistory } from 'history'
import Home from './components/Home'

const history = createBrowserHistory({ basename: '' })
const location = history.location
const paths = ['/buttons']

class App extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' history={history} location={location} component={Home} />
          {paths.map((path, i) => {
            return <Route key={i} exact path={path} history={history} location={location} component={Home} />
          })}
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}

export default App
