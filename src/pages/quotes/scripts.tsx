/*
Tasks:
  1. Move JS files in src/scripts-assets to proper folder, see: https://nextjs.org/docs/basic-features/static-file-serving.
  2. Use different ways(strategy) to load scripts to fix the bad position of quotes in the page. 
    The quote should say "A Lanister always pays his debts"
    YOU CAN'T MOVE the script tags: https://nextjs.org/docs/basic-features/script#strategy

Url: http://localhost:3000/quotes/scripts
Docs: https://nextjs.org/docs/basic-features/script
*/

import Script from 'next/script'

export default function Scripts() {

  return (
    <>
      <section className="intro">
        <h1>Scripts</h1>
        <p id="script-placeholder"></p>
      </section>

      <Script src="http://localhost:3000/scripts-assets/3.js" strategy='lazyOnload' />
      <Script src="http://localhost:3000/scripts-assets/2.js" strategy='afterInteractive' />
      <Script src="http://localhost:3000/scripts-assets/1.js" strategy='beforeInteractive' />

      <Script id="finalScript">
        {`
        setTimeout(() => document.getElementById('script-placeholder').innerHTML = window.lannisterQuote, 1000)
        `}
      </Script>

    </>
  )
}
