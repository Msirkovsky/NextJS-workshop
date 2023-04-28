/*
Tasks:
  1. Use fonts: Yesteryear and Arima for H1 and H2 from Google Fonts
  1. For h3, use the local font Game of Thrones.woff2, path: ../../../public/assets/Game of Thrones.woff2

Url: http://localhost:3000/quotes/fonts
Docs: https://nextjs.org/docs/basic-features/font-optimization
*/

export default function Page() {
  return (<div className='font-quotes'>
    <h1 >
      You know nothing Jon Snow.
    </h1>
    <h2 >
      Everything before the word 'but' is horseshit
    </h2>
    <h3 >
      Chaos isn't a pit. Chaos is a ladder
    </h3>
  </div>
  )
}
