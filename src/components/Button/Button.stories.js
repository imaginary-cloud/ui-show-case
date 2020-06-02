import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";

import Button from './index';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const Welcome = () => <h1>about this</h1>

export const Text = () => <Button onClick={action('clicked')}>{text("Text", "😀 😎 👍 💯")}</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      {text("Emoji", "😀 😎 👍 💯")}
    </span>
  </Button>
);
