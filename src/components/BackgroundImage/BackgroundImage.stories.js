import React from 'react'

import Card from '../Card'
import BackgroundImage from './index'

export default {
  title: 'Components/BackgroundImage',
}

export const BackgroundImageDefault = () => (
  <Card>
    <div style={{ width: '200px', height: '200px' }}>
      <BackgroundImage src={require('../../assets/green-cactus.png')} />
    </div>
  </Card>
)
