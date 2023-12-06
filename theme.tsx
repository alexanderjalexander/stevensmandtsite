'use client';

import {AppShell, createTheme, MantineColorsTuple} from '@mantine/core';

// Base for Reference: #2d283e

// Generated from the Mantine Color Generator
const myColor: MantineColorsTuple = [
    '#f4f3f7',
    '#e4e3e7',
    '#c7c4d1',
    '#a8a2ba',
    '#8e86a7',
    '#7e749c',
    '#766b98',
    '#645a84',
    '#595076',
    '#4d4469'
];
export const theme = createTheme({
    /* Put your theme override here */
    colors: {
        myColor
    },
    primaryShade: 6,
    primaryColor: 'myColor'
});