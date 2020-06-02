import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Tooltip({ children }) {
  return <Container>{children}</Container>
}

Tooltip.propTypes = {
  children: PropTypes.object,
}

export default Tooltip
