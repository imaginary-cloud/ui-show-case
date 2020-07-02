import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Title({ children }) {
  return <Container>{children}</Container>
}

Title.propTypes = {
  children: PropTypes.node,
}

export default Title
