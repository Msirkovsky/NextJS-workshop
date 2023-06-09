export const metadata = {
  title: 'Next.js'
}
import '@/styles/globals.css'
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={"header"}>
          <Image
            src="/assets/header.webp"
            width={474}
            alt=""
            height={245}
          />
        </div>
        <main className={" main"}>
          {children}
        </main>

      </body>
    </html>
  )
}
