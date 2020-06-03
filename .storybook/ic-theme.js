import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  colorPrimary: '#047AFE',
  colorSecondary: '#05121D',

  // UI
  appBg: '#05121D',
  appContentBg: '#fff',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#047AFE',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#047AFE',
  barBg: '#05121D',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'UI SHOW CASE',
  brandUrl: 'https://www.imaginarycloud.com/',
  brandImage: 'https://www.imaginarycloud.com/assets/logo-dee8746a7ca016a78980fbd06dddd194a5d66676d40cb41de4e1bdc0ca7bd3ae.svg',
})
