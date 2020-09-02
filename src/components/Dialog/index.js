import React from 'react'
import PropTypes from 'prop-types'

import ReactDOM from 'react-dom'

import {
  Wrapper,
  ModalOverlay,
  Container,
  Content,
  Header,
  Close,
} from './style'

function Modal({ isShowing, hide, children }) {
  return (
    <>
      {isShowing &&
        ReactDOM.createPortal(
          <Wrapper>
            <ModalOverlay />
            <Container aria-modal aria-hidden tabIndex={-1} role="dialog">
              <Content>
                <Header>
                  <Close
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Close>
                </Header>
                {children}
              </Content>
            </Container>
          </Wrapper>,
          document.body,
        )}
    </>
  )
}

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  children: PropTypes.any,
}

export default Modal
