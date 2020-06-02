import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Loader({ children }) {
  return <Container>{children}</Container>
}

Loader.propTypes = {
  children: PropTypes.object,
}

export default Loader
