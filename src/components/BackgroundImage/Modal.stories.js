import React from 'react'

import BackgroundImage from './index'

export default {
  title: 'Components/BackgroundImage',
}

export const BackgroundImageDefault = () => (
  <BackgroundImage
    src={require('../../assets/venus.jpeg')}
    alt="A random image from Unsplash"
  />
)
