import React from 'react'
import PropTypes from 'prop-types'

function Container({ children, style }) {
  return (
    <div
      style={{
        height: '100px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
}

export default Container
