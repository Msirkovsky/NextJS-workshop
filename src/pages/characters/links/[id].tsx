/* The link component: 
Goal:  
  1. Use Link component to navigate to the next and previous character
 
Url: http://localhost:3000/characters/links/1
Docs: https://nextjs.org/docs/routing/introduction#linking-between-pages
*/

import { GetServerSideProps } from "next"

export default function Links({ character }: IProp) {

  return <div>
    <span>{character.fullName}</span>
    <span>{character.family}</span>
    <span>{character.title}</span>
    <div className="pagination">
      {/* Finish the implementation*/}
      {character.id > 1 && <span>Previous</span>}
      {character.id < 52 && <span>Next</span>}
    </div >
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