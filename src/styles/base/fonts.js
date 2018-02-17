import { injectGlobal } from 'styled-components';

const fonts = {
  catamaran: {
    regular: {
      woff: require('files/fonts/Catamaran-Regular.woff'),
      ttf: require('files/fonts/Catamaran-Regular.ttf'),
      eot: require('files/fonts/Catamaran-Regular.eot'),
    },
  },
};

Object.keys(fonts).forEach((fontFamily) => {
  Object.keys(fonts[fontFamily]).forEach((fontStyle) => {
    const fontName = `${fontFamily}-${fontStyle}`.toLowerCase();

    injectGlobal`
      @font-face {
        font-family: ${fontName};
        src: url(${fonts[fontFamily][fontStyle].eot});
        src:
          url(${fonts[fontFamily][fontStyle].eot}?#iefix) format('embedded-opentype'),
          url(${fonts[fontFamily][fontStyle].woff}) format('woff'),
          url(${fonts[fontFamily][fontStyle].ttf}) format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `;
  });
});
