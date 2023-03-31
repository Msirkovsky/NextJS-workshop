import Link from "next/link"

export default function Index() {

  return (
    <section className="intro">

      <h1>All pages</h1>
      <p>
        The second worshop is about routing in Next.js:
      </p>
      <ol>
        <li><Link href='/characters/simple'>Simple Routing</Link></li>
        <li><Link href='/characters/dynamic'>Dynamic Routing</Link></li>
        <li><Link href='/characters/links/1'>Link component</Link></li>
        <li><Link href='/characters/shallow/1'>Shallow Routing</Link></li>
      </ol>
    </section>
  )
}
