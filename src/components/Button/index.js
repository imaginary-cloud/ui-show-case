import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Button({ children }) {
  return <Container>{children}</Container>
}

Button.propTypes = {
  children: PropTypes.object,
}

export default Button
