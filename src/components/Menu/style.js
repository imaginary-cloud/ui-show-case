import styled from 'styled-components'

export const Ul = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
`

export const Li = styled.li`
  color: ${({ theme }) => theme.primary};
  border-bottom: 1.5px solid transparent;
  transition: 0.3s;
  position: relative;

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
`

export const Content = styled.li`
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.primary};
  padding: 6px 0;
  transition: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
