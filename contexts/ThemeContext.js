import {createContext} from 'react';

export const light = {
  colors: {
    foreground: 'rgba(0,0,0,1)',
    unselected: 'rgba(110,110,110,1)',
    background: 'rgba(255,255,255,1)',
    delimiter: '#000000',
  },
  bar: {
    style: 'dark-content',
  },
};

export const dark = {
  colors: {
    foreground: 'rgba(255,255,255,1)',
    unselected: 'rgba(110,110,110,1)',
    background: 'rgba(25,25,25,1)',
    delimiter: '#777777',
  },
  bar: {
    style: 'light-content',
  },
};

var theme = dark;

const setTheme = x => {
  if (typeof x === 'function') {
    theme = x(theme);
  } else if (typeof x === 'object') {
    theme = x;
  }
};

export default createContext({theme, setTheme});
