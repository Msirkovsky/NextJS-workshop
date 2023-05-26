import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={" main"}>
      <Component {...pageProps} />
    </main >
  )
}