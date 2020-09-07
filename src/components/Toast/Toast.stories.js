import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Card from '../Card'
import Title from '../Title'

import withToastProvider from './withToastProvider'

import { useToast } from './index'

export default {
  title: 'Components/Toast',
}

const ToastInside = ({ counter }) => (
  <Card>
    <Title>{counter}</Title>
  </Card>
)

ToastInside.propTypes = {
  counter: PropTypes.number,
}

function ToastButton() {
  const toast = useToast()

  const counterRef = useRef(0)

  const showToast = () => {
    counterRef.current += 1
    toast.add(<ToastInside counter={counterRef.current} />)
  }

  return <Button onClick={showToast}>Show me a toast</Button>
}

function App() {
  return <ToastButton />
}

const AppWithToastProvider = withToastProvider(App)

export const Toast = () => <AppWithToastProvider />
