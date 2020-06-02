import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Badge({ children }) {
  return <Container>{children}</Container>
}

Badge.propTypes = {
  children: PropTypes.object,
}

export default Badge
