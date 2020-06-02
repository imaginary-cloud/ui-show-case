import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Select({ children }) {
  return <Container>{children}</Container>
}

Select.propTypes = {
  children: PropTypes.object,
}

export default Select
