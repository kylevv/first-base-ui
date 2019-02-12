import { styled, withStyle } from 'styletron-react'

const Container = styled('div', (props) => ({
  margin: props.margin || '0px',
  padding: props.padding || '0px',
  border: props.border || 'none'
}))

export const MarginBelow = withStyle(Container, (props) => ({
  margin: props.margin || '0px 0px 24px 0px'
}))

export default Container
