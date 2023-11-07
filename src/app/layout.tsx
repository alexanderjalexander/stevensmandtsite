import '@mantine/core/styles.css'
import './globals.css'
import { theme } from '../../theme';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import {MantineProvider, ColorSchemeScript, createTheme} from '@mantine/core';
import {Header} from "@/components/Header/header";
import {Footer} from "@/components/Footer/footer";

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
          <MantineProvider defaultColorScheme="dark" theme={theme}>
              <Header />
              {children}
              <Footer />
          </MantineProvider>
        </body>
      </html>
  )
}
