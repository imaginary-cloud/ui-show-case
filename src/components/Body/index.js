import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Body({ children }) {
  return <Container>{children}</Container>
}

Body.propTypes = {
  children: PropTypes.string,
}

export default Body
