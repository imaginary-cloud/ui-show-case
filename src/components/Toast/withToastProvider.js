import React, { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'

import ToastContext from './context'
import Toast from './Toast'

import { Wrapper } from './style'

// Create a random ID
function randomId() {
  return Math.random()
    .toString(36)
    .slice(-9)
}

function withToastProvider(Component) {
  function WithToastProvider(props) {
    const [toasts, setToasts] = useState([])

    const add = content => {
      const id = randomId()

      setToasts([...toasts, { id, content }])
    }

    const remove = id => setToasts(toasts.filter(t => t.id !== id))

    const providerValue = useMemo(() => ({ add, remove }), [toasts])

    return (
      <ToastContext.Provider value={providerValue}>
        <Component {...props} />

        {createPortal(
          <Wrapper>
            {toasts.map(t => (
              <Toast key={t.id} handleRemove={() => remove(t.id)}>
                {t.content}
              </Toast>
            ))}
          </Wrapper>,
          document.body,
        )}
      </ToastContext.Provider>
    )
  }

  return WithToastProvider
}

export default withToastProvider
