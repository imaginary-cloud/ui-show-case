import styled from 'styled-components'

export const Container = styled.div.attrs(({ src }) => ({ src }))`
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`
