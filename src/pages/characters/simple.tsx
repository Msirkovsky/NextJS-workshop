/* Simple routing
Goal:
  1. Use routing to support the following url: localhost:3000/characters/simple/1

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
export const getServerSideProps: GetServerSideProps<IProp> = async () => {

  const id = 1 //TODO use param from the path 
  const result = await (await fetch('https://thronesapi.com/api/v2/Characters/' + id)).json()
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