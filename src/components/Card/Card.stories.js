import React from 'react'
import PropTypes from 'prop-types'

import Card from './index'

import BackgroundImage from '../BackgroundImage'
import Title from '../Title'
import Body from '../Body'
import Button from '../Button'

export default {
  title: 'Components/Card',
}

function Content({ children }) {
  return <div style={{ padding: '30px' }}>{children}</div>
}

Content.propTypes = {
  children: PropTypes.string,
}

export const DefaultCard = () => (
  <Card>
    <div style={{ width: '184px' }}>
      <BackgroundImage src={require('../../assets/green-cactus.png')} />
    </div>
    <Content>
      <Title>Headline</Title>
      <Body>
        Lorem ipsum dolor sit amet, consectetur elit. Praesent elementum massa
        ut tortor egestas.
      </Body>
    </Content>
  </Card>
)

export const Card1 = () => (
  <Card column>
    <div style={{ height: '376px' }}>
      <BackgroundImage
        src={require('../../assets/photo-of-person-holding-green-leaf.png')}
      />
    </div>
    <Content>
      <Title>Headline</Title>
      <Body>
        Lorem ipsum dolor sit amet, consectetur elit. Praesent elementum massa
        ut tortor egestas.
      </Body>

      <Button link>BUTTON</Button>
    </Content>
  </Card>
)
