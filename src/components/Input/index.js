import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Input({ children }) {
  return <Container>{children}</Container>
}

Input.propTypes = {
  children: PropTypes.object,
}

export default Input
