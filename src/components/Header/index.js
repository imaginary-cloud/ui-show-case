import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Header({ children }) {
  return <Container>{children}</Container>
}

Header.propTypes = {
  children: PropTypes.object,
}

export default Header
