/*
Tasks:
  1. Use fonts: Yesteryear and Arima for H1 and H2 from Google Fonts
  1. For h3, use the local font Game of Thrones.woff2, path: ../../../public/assets/Game of Thrones.woff2

Url: http://localhost:3000/quotes/fonts
Docs: https://nextjs.org/docs/basic-features/font-optimization
*/

import { Yesteryear } from '@next/font/google'
import { Arima } from '@next/font/google'
import localFont from '@next/font/local'


const yesteryear = Yesteryear({
  weight: '400',
  subsets: ['latin'],
})

const arima = Arima({
  weight: '600',
  subsets: ['latin'],
})

const local = localFont({ src: '../../../public/assets/Game of Thrones.woff2' })


export default function Page() {
  return (<div className='font-quotes'>
    <h1 className={yesteryear.className}>
      You know nothing Jon Snow.
    </h1>
    <h2 className={arima.className}>
      Everything before the word 'but' is horseshit
    </h2>
    <h3 className={local.className}>
      Chaos isn't a pit. Chaos is a ladder
    </h3>
  </div>
  )
}
