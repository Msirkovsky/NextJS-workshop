// Link component: 
/* Goal:

1. Copy the code from src\pages\characters\simple\[id].tsx
2. Use Link component to navigate to the next and previous character
 
Url: http://localhost:3000/characters/links/1
Docs: https://nextjs.org/docs/routing/introduction#linking-between-pages
*/
// https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2
// 1.Use Link to navigate to another page - forward and back.
// Final URL: localhost:3000/characters/links/1
import { GetServerSideProps } from "next"
import Link from "next/link"

export default function Links({ character }: IProp) {

  return <div>
    <span>{character.fullName}</span>
    <span>{character.family}</span>
    <span>{character.title}</span>
    <div className="pagination">
      {/* Finish the implementation*/}
      {character.id > 1 && <Link href={`/characters/links/${character.id - 1}`}>Previous</Link>}
      {character.id < 52 && <Link href={{ pathname: '/characters/links/[id]', query: { id: character.id + 1 } }}>Next</Link>}
    </div>
  </div>
}

type IProp = {
  character: {
    fullName: string
    title: string
    family: string
    id: number
  }
}

export const getServerSideProps: GetServerSideProps<IProp> = async ({ query }) => {

  const result = await (await fetch('https://thronesapi.com/api/v2/Characters/' + query.id)).json()
  const character = {
    fullName: result.fullName,
    family: result.family,
    title: result.title,
    id: result.id
  }
  return {
    props: {
      character
    },
  }
}