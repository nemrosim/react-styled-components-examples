import { DefaultTheme } from 'styled-components';

const colors = {
    primary: {
        1000: '#ff7300',
        900: '#ff8119',
        800: '#ff8f32',
        700: '#fe9d4c',
        600: '#ffab65',
        500: '#ffb97f',
        400: '#ffc799',
        300: '#ffd4b2',
    },
    secondary: {
        1000: '#003b4a',
        900: '#005d75',
        800: '#0080a1',
        700: '#00a3cc',
        600: '#24d2ff',
        500: '#31d5ff',
        400: '#50dbff',
        300: '#7ce4ff',
    },
    neutral: {
        1000: '#000000',
        900: '#191919',
        800: '#333333',
        700: '#4c4c4c',
        600: '#666666',
        500: '#7f7f7f',
        400: '#999999',
        300: '#b2b2b2',
        200: '#cccccc',
        100: '#e5e5e5',
        0: '#ffffff',
    },
};

export const theme: DefaultTheme = {
    mode: 'light',
    styles: {
        colors,
    },
};
