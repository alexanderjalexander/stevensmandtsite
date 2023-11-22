import '@mantine/core/styles.css'
import './globals.css'
import { theme } from '../../theme';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Navbar } from "@/components/Navbar/navbar";
import { Footer } from "@/components/Footer/footer";
import React from "react";

import { Figtree } from 'next/font/google'
const figtree = Figtree({ subsets: ['latin'] })

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
        <body className={figtree.className}>
          <MantineProvider defaultColorScheme="dark" theme={theme}>
              <Navbar />
              {children}
              <Footer />
          </MantineProvider>
        </body>
      </html>
  )
}
