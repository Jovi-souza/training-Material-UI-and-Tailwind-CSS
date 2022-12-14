import { createStitches } from '@stitches/react';

export const {
  styled,
  globalCss,
  createTheme,
  css,
} = createStitches({
  utils: {
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value: string | number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    br: (value: string | number) => ({
      borderRadius: value,
    }),
  },
  media: {
    small: '(max-width: 414px)',
    medium: '(max-width: 390px)',
    large: '(max-width: 414px)',
    notebookHeight: '(max-height: 768px)',
    zoomHeight: '(max-height: 650px)',
  },
  theme: {
    colors: {
      grayOne: '#F2F2F2',
      grayTwo: '#D9D9D9',
      grayThree: '#808080',
      grayFour: '#333333',
      grayFive: '#262626',
      graySix: '#1A1A1A',
      graySeven: '#0D0D0D',
      Purple: '#8284FA',
      PurpleDark: '#5E60CE',
      blue: '#4EA8DE',
      blueDark: '#1E6F9F',
      danger: '#E25858',
    },
    space: {
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
      5: '5rem',
    },
    fontSizes: {
      1: '1.6rem',
      2: '2rem',
      3: '2.4rem',
      4: '3.2rem',
      5: '3.6rem',
      6: '4rem',
    },
    fonts: {
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    shadows: {
      button: '2px 2px 5px rgba(0, 0, 0, 0.25)',
    },
    zIndices: {},
    transitions: {},
  },
});