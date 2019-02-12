import React, { Component } from 'react'
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList
} from 'baseui/header-navigation'
import { StyledLink as Link } from 'baseui/link'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (ev) {
    ev.preventDefault()
    const origin = window.location.origin
    const href = ev.target.href
    const next = href.replace(origin, '')
    this.props.history.push(next)
  }

  render () {
    return (
      <HeaderNavigation>
        <NavigationList align={ALIGN.left}>
          <NavigationItem>First Base UI</NavigationItem>
        </NavigationList>
        <NavigationList align={ALIGN.center} />
        <NavigationList align={ALIGN.right}>
          <NavigationItem>
            <Link href='/basic' onClick={this.handleClick}>Basic</Link>
          </NavigationItem>
          <NavigationItem>
            <Link href='/content' onClick={this.handleClick}>Content</Link>
          </NavigationItem>
          <NavigationItem>
            <Link href='/surfaces' onClick={this.handleClick}>Surfaces</Link>
          </NavigationItem>
        </NavigationList>
      </HeaderNavigation>
    )
  }
}

export default Nav
