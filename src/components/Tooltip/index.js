import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Container, Content, Arrow } from './style'

const propTypes = {
  position: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  tooltipContent: PropTypes.node.isRequired,
}

const Tooltip = ({ tooltipContent, position, style, children }) => {
  const [isVisible, setIsVisible] = useState(false)

  function handleMouseLeave() {
    setTimeout(() => {
      setIsVisible(false)
    }, 4000)
  }

  return (
    <Container
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex="0"
    >
      <div>{children}</div>
      {isVisible && (
        <Content className={position} {...{ style }}>
          <Arrow className={position} />
          {tooltipContent}
        </Content>
      )}
    </Container>
  )
}

Tooltip.defaultProps = {
  position: 'right',
}

Tooltip.propTypes = propTypes

export default Tooltip
