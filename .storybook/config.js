import React from 'react'
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { GlobalStyle } from '../src/style'
import { theme } from '../src/App'

addDecorator(withKnobs)
addDecorator(s => <><GlobalStyle />{s()}</>);
addDecorator(s => (
    <ThemeProvider theme={theme}>{s()}</ThemeProvider>
))
