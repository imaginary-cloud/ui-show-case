import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

function BackgroundImage({ src }) {
  return <Container {...{ src }} />
}

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
}

export default BackgroundImage
