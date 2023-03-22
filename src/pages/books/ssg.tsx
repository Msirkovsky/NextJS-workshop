/*
Goal: 
1. Copy code from SSR.tsx
2. Change data fetching to static site generation

Tips:
Url of this page: http://localhost:3000/books/ssg
Documentation:  https://nextjs.org/docs/basic-features/data-fetching/get-static-props
*/
import { GetStaticProps } from "next"

export default function SSG({ books, date }: IProp) {

  return <div>
    <span>Date: {date}</span>
    <ul>
      {books.map(book => <li key={book.name}>{book.name}</li>)}
    </ul>
  </div>
}

type IProp = {
  books: { name: string }[]
  date: string
}
export const getStaticProps: GetStaticProps<IProp> = async () => {

  const boookPromise = await fetch('https://www.anapioficeandfire.com/api/books')
  const books = await boookPromise.json()

  return {
    props: {
      books: books.map((x: { name: string }) => ({ name: x.name })),
      date: new Date().toISOString()
    }
  }
}