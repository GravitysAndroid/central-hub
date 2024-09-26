'use client';

import { createTheme as createMuiTheme, Theme } from '@mui/material/styles';

// Define your custom theme
export const createTheme = (): Theme => {
  return createMuiTheme(
    {
      palette: {
        primary: {
          light: '#3B3941',
          main: '#3B3941', // Replace with your primary color
          dark: '#3B3941',
          contrastText: '#ffffff',
        },
        secondary: {
          light: '#DEDEDE',
          main: '#DEDEDE', // Replace with your secondary color
          dark: '#DEDEDE',
          contrastText: '#000000',
        },
      },
    },
    {
      typography: {
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        subtitle1: {},
        subtitle2: {},
        body1: {},
        body2: {},
        overline: {},
        caption: {},
        button: {},
        fontFamily: 'Roboto, Arial, sans-serif', // Replace with your desired font family
      },
    },
    {
      components: {},
    },
    { responsiveFontSizes: true },
  );
};
