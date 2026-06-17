export const theme = {
  colors: {
    primary: {
      main: '#D73035',
      dark: '#8A1114',
      light: '#FFABAD',
    },
    gray: {
      900: '#333333',
      700: '#666666',
      500: '#999999',
      300: '#CCCCCC',
      100: '#F2F2F2',
      0: '#FFFFFF',
    },
  },
} as const

export type Theme = typeof theme
