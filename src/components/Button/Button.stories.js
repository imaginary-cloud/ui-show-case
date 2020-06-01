import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';

export default {
  title: 'Button',
};

export const Welcome = () => <h1>about this</h1>

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
