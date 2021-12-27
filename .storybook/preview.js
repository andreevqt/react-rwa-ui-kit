import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';

import theme from '../src/theme/default';
import GlobalStyle from '../src/components/global-style';

addDecorator((story) => (
  <ThemeProvider theme={theme} >
    <GlobalStyle/>
    {story()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
