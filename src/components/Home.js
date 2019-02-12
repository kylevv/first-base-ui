import React, { Component } from 'react'
import logo from '../logo.svg'
import './Home.scss'

class Home extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (ev) {
    ev.preventDefault()
    this.props.history.push('/basic')
  }

  render () {
    return (
      <div className='Home'>
        <header className='Home-header'>
          <img src={logo} className='Home-logo' alt='logo' />
          <p>
            Base UI Example Project
          </p>
          <a
            className='Home-link'
            href='/basic'
            target='_blank'
            rel='noopener noreferrer'
            onClick={this.handleClick}
          >
            Get Started - Click Here
          </a>
        </header>
      </div>
    )
  }
}

export default Home
