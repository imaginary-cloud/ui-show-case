import React from 'react'

import Modal from './index'

import useModal from './useModal'

export default {
  title: 'Modal',
}

export const Main = () => {
  const [isShowing, toggle] = useModal()
  return (
    <div>
      <button type="button" onClick={toggle}>
        Show Modal
      </button>

      <Modal isShowing={isShowing} hide={toggle}>
        <h1>Hi</h1>
        <div>
          <p>you can build your things here</p>
        </div>
      </Modal>
    </div>
  )
}
