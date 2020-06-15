import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Loader({ children, isLoading }) {
  return <>{isLoading && <Container>{children}</Container>}</>
}

Loader.propTypes = {
  children: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default Loader
