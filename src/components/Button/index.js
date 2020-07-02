import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Button({ children, disabled, outline, link }) {
  return <Container {...{ disabled, outline, link }}>{children}</Container>
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  link: PropTypes.bool,
}

export default Button
