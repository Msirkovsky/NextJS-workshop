/*
Goal: fetch data from the server and render it as a list of LI elements
1. Fetch https://www.anapioficeandfire.com/api/books
2. Return the data as props and render as the LI list

Tips:
Url of this page: http://localhost:3000/books/ssr
Documentation: 
https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
https://nextjs.org/docs/basic-features/pages#scenario-1-your-page-content-depends-on-external-data

*/
import { GetServerSideProps } from "next"

export default function SSR() {

  return <div>
    <ul>
      <li>
      </li>
    </ul>
  </div>
}

type IProp = {
  books: { name: string }[]
}
export const getServerSideProps: GetServerSideProps<IProp> = async () => {

  const books = []

  return {
    props: { books: [] },
  }
}