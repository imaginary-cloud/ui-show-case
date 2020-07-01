import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { GlobalStyle } from '../src/style'
import { theme } from '../src/App'
import { sortStories } from './util/story-helpers'

addDecorator(withKnobs)
addDecorator(s => <><GlobalStyle />{s()}</>);
addDecorator(s => (
    <ThemeProvider theme={theme}>{s()}</ThemeProvider>
))

const SORT_ORDER = {
    Introduction: [
      'Welcome',
    ],
    Components: [],
  };

addParameters({
    options: {
        storySort: sortStories(SORT_ORDER),
        showRoots: true
    },
});

const Story = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #F6F4F5;

  .sbdocs & {
    min-height: auto;
  }
`;

const withStoryStyles = storyFn => {
  return <Story>{storyFn()}</Story>;
};

addDecorator(withStoryStyles);
