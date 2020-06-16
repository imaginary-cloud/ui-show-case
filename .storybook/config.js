import React from 'react'

import { GlobalStyle } from '../src/style'

import { addDecorator } from '@storybook/react';

addDecorator(s => <><GlobalStyle />{s()}</>);