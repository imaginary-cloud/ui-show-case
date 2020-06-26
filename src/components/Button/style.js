import styled from 'styled-components'

export const Container = styled.button.attrs(({ outline, link }) => ({
  outline,
  link,
}))`
  width: 175px;
  height: 50px;
  outline: none;
  transition: all 0.3s;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1px;
  text-transform: uppercase;

  border: 1px solid
    ${({ theme, outline, link }) =>
      !outline || link ? 'transparent' : theme.primary};

  color: ${({ theme, outline, link }) =>
    outline || link ? theme.primary : theme.lightBackground};

  background-color: ${({ theme, outline, link }) =>
    outline || link ? 'transparent' : theme.primary};

  &:disabled {
    opacity: 0.7;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme, outline, link }) =>
      outline || link ? 'transparent' : theme.accentColor};

    border: 2px solid
      ${({ theme, outline }) => (outline ? theme.accentColor : 'transparent')};

    color: ${({ theme, outline, link }) =>
      // eslint-disable-next-line no-nested-ternary
      link
        ? theme.primary
        : outline
        ? theme.accentColor
        : theme.lightBackground};
  }
`
