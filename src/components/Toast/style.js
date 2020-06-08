import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid transparent;
  background-color: #fafafa;
  border-radius: 4px;
  max-width: 480px;
  min-width: 200px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  cursor: pointer;

  z-index: 99999;
  transition: all 4ms ease-in-out;
`

export const Close = styled.button``

export const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`
