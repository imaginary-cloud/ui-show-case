import styled from 'styled-components'

export const Container = styled.div`
  max-width: 480px;
  min-width: 200px;

  position: relative;
  cursor: pointer;
`

export const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 0;
  border: none;
  background: transparent;
  padding: 10px;
  outline: none;
`

export const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`
