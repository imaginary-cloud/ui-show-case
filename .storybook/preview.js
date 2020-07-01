import React from 'react'
import { ThemeProvider } from 'styled-components'
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
