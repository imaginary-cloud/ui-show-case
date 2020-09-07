import styled from 'styled-components'

export const Ul = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`

export const Li = styled.li`
  color: ${({ theme }) => theme.primary};
  border-bottom: 1.5px solid transparent;
  transition: 0.3s;
  position: relative;
  cursor: pointer;

  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }

  &:hover > ul {
    display: block;
  }
`

export const Container = styled.ul`
  position: absolute;
  min-width: 400px;
  z-index: 1;
  list-style: none;
  padding: 0;
  display: none;
  cursor: pointer;
`

export const Content = styled.li`
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.primary};
  padding: 6px 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
