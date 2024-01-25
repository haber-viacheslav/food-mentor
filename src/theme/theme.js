export const theme = Object.freeze({
  fonts: {
    main: `'Inter', sans-serif`,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    clearWhite: '#FFFFFF',
    buttonBg: '#f4f4f4',
    light: '#E1E1E1',
    greyGreen: '#374234',
    green: '#5FCB39',
    lightGreen: ' #60cb3930',
    black: '#2D3436',
    clearBlack: '#000000',
    grey: '#616161',
    transparent: 'transparent',
    currentColor: 'currentColor',
  },
  media: {
    sm: '(min-width: 380px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1280px)',
    smToMd: '(min-width: 380px) and (max-width: 767.99px)',
    mdToLg: '(min-width: 768px) and (max-width: 1279.99px)',
    toMd: '(max-width: 767.99px)',
    smToLg: '(min-width: 380px) and (max-width: 1279.99px)',
  },
});
