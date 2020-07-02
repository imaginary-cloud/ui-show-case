import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Button({ children, disabled, outline, link, onClick }) {
  return (
    <Container {...{ disabled, outline, link, onClick }}>{children}</Container>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  link: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
