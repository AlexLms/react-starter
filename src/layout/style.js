import { createGlobalStyle } from 'styled-components';

// fonts
import StemBold from '../static/fonts/Stem-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  @font-face {
    font-family: 'stem-bold';
    src: url(${StemBold});
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  * {
    box-sizing: inherit;
    -webkit-appearance: none;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html, body, body > div[id='app'], body > div[id='root'] {
    height: 100%;
    width: 100%;
  }

  html {
    font-family: sans-serif;
    box-sizing: border-box;
    text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;

    &::before, &::after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input, button, textarea, select {
    &:focus, &:active {
      outline: none;
    }
  }

  input[disabled] {
    -webkit-text-fill-color: inherit;
    color: inherit;
  }

  textarea {
    overflow: hidden;
    resize: none;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;

    &:hover, &:active, &:visited {
      outline-width: 0;
      text-decoration: none;
    }
  }

  ${'' /* Hide the overflow in IE.  */}
  svg:not(:root) {
    overflow: hidden;
  }

  ${'' /* Remove the border on images inside links. */}
  img {
    border-style: none;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
`;
