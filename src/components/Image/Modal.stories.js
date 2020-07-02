import React from 'react'

import Image from './index'

export default {
  title: 'Components/Image',
}

export const ImageDefault = () => (
  <Image
    src={require('../../assets/venus.jpeg')}
    alt="A random image from Unsplash"
  />
)
