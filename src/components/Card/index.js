import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Card({ children, backgroundColor, column }) {
  console.log('column', column)
  return <Container {...{ backgroundColor, column }}>{children}</Container>
}

Card.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  column: PropTypes.bool,
}

export default Card
