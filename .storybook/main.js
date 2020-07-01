module.exports = {
  // stories: ['../src/components/**/*.stories.(js|mdx)', '../docs/**/*.stories.(js|mdx)'],
  // stories: ['./**/*.stories.(js|mdx)'],
  stories: [
    '../src/**/*.(stories|story).(js|ts|tsx|mdx)',
    // '../docs/**/*.(stories|story).(js|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y'
  ],
};
