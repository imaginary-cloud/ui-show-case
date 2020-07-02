import styled from 'styled-components'

export const Container = styled.div.attrs(({ backgroundColor, column }) => ({
  backgroundColor,
  column,
}))`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};

  min-width: auto;
  min-height: auto;
  margin: 10px;

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.blue};
`
