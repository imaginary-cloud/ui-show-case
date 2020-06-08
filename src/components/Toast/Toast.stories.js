import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import withToastProvider from './withToastProvider'

import { useToast } from './index'

export default {
  title: 'Toast',
}

const ToastInside = ({ counter }) => (
  <div>
    <h1>{counter}</h1>
  </div>
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

  return (
    <button type="button" onClick={showToast}>
      Show me a toast
    </button>
  )
}

function App() {
  return (
    <div>
      <p>
        The <strong>Toast Provider</strong> should be registred on the main
        entry of the App.
      </p>
      <ToastButton />
    </div>
  )
}

const AppWithToastProvider = withToastProvider(App)

export const Toast = () => <AppWithToastProvider />
