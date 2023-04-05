/* Advanced routing
Goal:
  1. Use routing to fetch one character but all of these patterns have to be supported:
    http://localhost:3000/characters/dynamic/11
    http://localhost:3000/characters/dynamic/11/GoT
    http://localhost:3000/characters/dynamic/characters/11
    http://localhost:3000/characters/dynamic/GoT/characters/11
    

Docs: https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
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

  const slugs = query.slug as string[]
  const dynamicSlugs = ['GoT', 'characters']
  const id = slugs.filter(x => dynamicSlugs.includes(x) == false)[0]
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