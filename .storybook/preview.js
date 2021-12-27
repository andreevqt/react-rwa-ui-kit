import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import '../src/fonts/fonts.css';
import '../src/index.css';

import theme from '../src/theme';

addDecorator((story) => <ThemeProvider theme={theme.dark} >{story()}</ThemeProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
