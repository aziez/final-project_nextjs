// src/app/layout.tsx

import React from 'react'

import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { fontAladin, fontJakarta } from '@/styles/font'
import { ReactQueryProvider } from '@/providers/reactQueryProvider'
import { AppProps } from 'next/app'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background h-screen min-h-screen w-screen font-sans antialiased',
          fontSans.variable,
          fontJakarta.variable,
          fontAladin.variable,
        )}
      >
        <ReactQueryProvider>
          <Component {...pageProps} />
        </ReactQueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
