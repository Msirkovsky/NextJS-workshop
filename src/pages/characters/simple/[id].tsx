// Simple routing
/* Goal:
 1. Use routing to fetch one character from https://thronesapi.com/api/v2/Characters/1

 Final url: http://localhost:3000/characters/simple/1
 Docs: https://nextjs.org/docs/basic-features/pages#scenario-2-your-page-paths-depend-on-external-data

*/
import { GetServerSideProps } from "next"

export default function Simple({ character }: IProp) {

  return <div>
    <span>{character.fullName}</span>
    <span>{character.family}</span>
    <span>{character.title}</span>
  </div>
}

type IProp = {
  character: {
    fullName: string
    title: string
    family: string
  }
}
export const getServerSideProps: GetServerSideProps<IProp> = async ({ query }) => {

  const result = await (await fetch('https://thronesapi.com/api/v2/Characters/' + query.id)).json()
  const character = {
    fullName: result.fullName,
    family: result.family,
    title: result.title
  }

  return {
    props: {
      character
    },
  }
}