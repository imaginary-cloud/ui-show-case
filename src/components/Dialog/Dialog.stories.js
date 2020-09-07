import React from 'react'

import Modal from './index'
import Button from '../Button'

import useModal from './useModal'

export default {
  title: 'Components/Dialog',
}

export const Information = () => {
  const [isShowing, toggle] = useModal()
  return (
    <div>
      <Button onClick={toggle}>Show Dialog</Button>

      <Modal isShowing={isShowing} hide={toggle}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={require('../../assets/error.png')}
            alt="red circle with an white close in it"
            style={{ width: '50px', height: '50px', margin: '20px 0' }}
          />

          <div style={{ margin: '20px 0' }}>
            <p
              style={{
                fontSize: '18px',
                lineHeight: '32px',
                color: '#161616',
              }}
            >
              Alert message example is to be written here.
            </p>
          </div>
          <Button onClick={toggle}>try again</Button>
        </div>
      </Modal>
    </div>
  )
}

export const Confirmation = () => {
  const [isShowing, toggle] = useModal()
  return (
    <div>
      <Button onClick={toggle}>Show Dialog</Button>

      <Modal isShowing={isShowing} hide={toggle}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ margin: '20px 0' }}>
            <p
              style={{
                fontSize: '18px',
                lineHeight: '32px',
                color: '#161616',
              }}
            >
              Confirmation message that works as an example is to be written
              here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum cursus commodo justo a interdum. Etiam lobortis nisi
              sed.
            </p>
          </div>
          <footer
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <div style={{ marginRight: '30px' }}>
              <Button onClick={toggle} link>
                try again
              </Button>
            </div>

            <Button onClick={toggle}>try again</Button>
          </footer>
        </div>
      </Modal>
    </div>
  )
}
