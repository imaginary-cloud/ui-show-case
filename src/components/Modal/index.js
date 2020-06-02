import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Modal({ children }) {
  return <Container>{children}</Container>
}

Modal.propTypes = {
  children: PropTypes.object,
}

export default Modal
