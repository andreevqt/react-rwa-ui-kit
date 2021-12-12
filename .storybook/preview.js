import {ThemeProvider} from 'styled-components';
import {addDecorator} from '@storybook/react';
import {withThemes} from '@react-theming/storybook-addon';

import {dark, light} from '../src/theme';

addDecorator(withThemes(ThemeProvider, [light, dark]));

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
