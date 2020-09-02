import styled from 'styled-components'

export const Wrapper = styled.div``

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const Content = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`

export const Close = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #333;
  opacity: 0.3;
  cursor: pointer;
  border: none;
`
