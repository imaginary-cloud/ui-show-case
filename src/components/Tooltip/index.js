import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container, Content, Arrow } from './style'

const propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const Tooltip = ({ title, position, backgroundColor, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Container
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      role="button"
      tabIndex="0"
    >
      <div>{children}</div>
      {isVisible && (
        <Content className={position} backgroundColor={backgroundColor}>
          <Arrow />
          {title}
        </Content>
      )}
    </Container>
  )
}

Tooltip.defaultProps = {
  position: 'right',
  backgroundColor: '#212529',
}

Tooltip.propTypes = propTypes

export default Tooltip
