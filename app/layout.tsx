'use client'

import '../styles/globals.css'
import styles from '../styles/home/Layout.module.css'
import localFont from '@next/font/local'
import { useEffect } from 'react'
import AppNav from '../components/app-nav'

const HKGrotesk = localFont({
  src: [
    {
      path: '../assets/fonts/HankenGrotesk-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HankenGrotesk-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const toggleDarkTheme = (shouldAdd: boolean) => {
      document.body.classList.toggle('dark-theme', shouldAdd)
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    toggleDarkTheme(prefersDark.matches)

    prefersDark.addEventListener('change', (mediaQuery) =>
      toggleDarkTheme(mediaQuery.matches)
    )
  })

  return (
    <html lang="en">
      <style jsx global>{`
        :root {
          --font-family: ${HKGrotesk.style.fontFamily};
        }

        body {
          font-family: var(--font-family) !important;
        }
      `}</style>
      <body>
        <AppNav />
        <main className={styles['content-wrapper']}>{children}</main>
      </body>
    </html>
  )
}
