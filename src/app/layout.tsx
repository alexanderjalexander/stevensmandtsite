import '@mantine/core/styles.css'
import { theme } from '../../theme';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import {MantineProvider, ColorSchemeScript, createTheme} from '@mantine/core';

export const metadata = {
  title: 'Stevens M&T',
  description: 'The hub for everything Stevens Music & Tech',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider defaultColorScheme="dark" theme={theme}>{children}</MantineProvider>
        </body>
      </html>
  )
}
