import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Container, Close } from './style'

function Toast({ children, handleRemove }) {
  const removeRef = useRef()

  removeRef.current = handleRemove

  // useEffect(() => {
  //   const duration = 5000
  //   const id = setTimeout(() => removeRef.current(), duration)

  //   return () => clearTimeout(id)
  // }, [])

  return (
    <Container>
      {children}
      <Close onClick={handleRemove}>x</Close>
    </Container>
  )
}

Toast.propTypes = {
  children: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

export default Toast
