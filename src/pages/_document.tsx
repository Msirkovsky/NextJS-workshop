import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className={"header"}>
          <Image
            src="/assets/header.webp"
            alt=""
            width={474}
            height={245}
          />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
