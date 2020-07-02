import styled from 'styled-components'

export const Container = styled.h1`
  font-weight: 600;
  font-size: 70px;
  line-height: 85px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.primary};
`
