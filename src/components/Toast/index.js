import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Toast({ children }) {
  return <Container>{children}</Container>
}

Toast.propTypes = {
  children: PropTypes.object,
}

export default Toast
