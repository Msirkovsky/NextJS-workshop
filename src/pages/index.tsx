import Link from "next/link"

export default function Index() {

  return (
    <section className="books-intro">
      <h1>All pages</h1>
      <p>
        The first worshop is about type of rendering in Next.js. You need to implement/ajdust the following pages:
      </p>
      <ol>
        <li><Link href='/books/ssr'>Server side rendering - /books/ssr.tsx</Link></li>
        <li><Link href='/books/ssg'>Static site generation - /books/ssg.tsx</Link></li>
        <li><Link href='/books/isr'>Incremental static regeneration - /books/isr.tsx</Link></li>
        <li><Link href='/books/csr'>Client side rendering - /books/csr.tsx</Link></li>
      </ol>
    </section>
  )
}
