import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Card({ children }) {
  return <Container>{children}</Container>
}

Card.propTypes = {
  children: PropTypes.object,
}

export default Card
