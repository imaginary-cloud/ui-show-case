import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function Image({ src, alt }) {
  return <Container {...{ src, alt }} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image
