import React, { Component } from 'react'
import { Button, KIND } from 'baseui/button'
import { StyledRadio, RadioGroup } from 'baseui/radio'
import { MarginBelow } from '../helpers/PositionHelpers'

class Basic extends Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = { value: KIND.primary }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (ev: any) {
    const value = ev.target.value
    this.setState(() => {
      return { value }
    })
  }

  render () {
    return (
      <div className='Basic'>
        <MarginBelow>
          <RadioGroup align='horizontal' onChange={this.handleChange} value={this.state.value}>
            <StyledRadio value={KIND.primary}>Primary</StyledRadio>
            <StyledRadio value={KIND.secondary}>Second</StyledRadio>
            <StyledRadio value={KIND.tertiary}>Tertiary</StyledRadio>
            <StyledRadio value={KIND.minimal}>Minimal</StyledRadio>
          </RadioGroup>
        </MarginBelow>
        <Button kind={this.state.value}>Button</Button>
      </div>
    )
  }
}

export default Basic
