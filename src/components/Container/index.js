import React from 'react'
import PropTypes from 'prop-types'

function Container({ children }) {
  return (
    <div
      style={{
        height: '100px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
      }}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Container
