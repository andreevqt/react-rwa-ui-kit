import { createGlobalStyle } from 'styled-components';
import { TTheme } from '../theme/theme';
import GilroyExtraBoldWoff2 from '../fonts/Gilroy-ExtraBold.woff2';
import GilroyExtraBoldWoff from '../fonts/Gilroy-ExtraBold.woff';
import GilroyLightWoff from '../fonts/Gilroy-Light.woff';
import GilroyLightWoff2 from '../fonts/Gilroy-Light.woff2';

const GlobalStyle = createGlobalStyle<{
  theme: TTheme
}>`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('${GilroyLightWoff2}') format('woff2'),
        url('${GilroyLightWoff}') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('${GilroyExtraBoldWoff2}') format('woff2'),
        url('${GilroyExtraBoldWoff}') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${({ theme }) => theme.bodyColor.normal};
    font-size: ${({ theme }) => theme.base.fontSize};
    line-height: 1.5;
    font-family: 'Gilroy';
  }

  input,
  button,
  textarea {
    font-family: ${({ theme }) => theme.base.fontFamily};
    line-height: 1.5;
    font-size: 16px;
  }
`;

export default GlobalStyle;
