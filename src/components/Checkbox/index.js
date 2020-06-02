import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Checkbox({ children }) {
  return <Container>{children}</Container>
}

Checkbox.propTypes = {
  children: PropTypes.object,
}

export default Checkbox
