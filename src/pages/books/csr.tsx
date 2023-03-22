/*
Bonus goal: 
1. Copy code from SSG.tsx
2. But switch data fetching to client site rendering

Tips:
Url of this page: http://localhost:3000/books/csr
Documentation:  https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-useeffect
*/

import { useEffect, useState } from "react"

export default function CSR() {

  const [books, setBooks] = useState<{ name: string }[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://www.anapioficeandfire.com/api/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return <div>
    <ul>
      {books.map(book => <li key={book.name}>{book.name}</li>)}
    </ul>
  </div>
}

type IProp = {
  books: { name: string }[]
}
