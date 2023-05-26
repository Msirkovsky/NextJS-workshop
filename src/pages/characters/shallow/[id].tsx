// Shallow Routing: 
/* Goal:

1. Copy the code from src\pages\characters\links\[id].tsx
2. Rewrite the following code to get rid of "getServerSideProps" and use client side fetching with shallow routing
 
Url: http://localhost:3000/characters/shallow/1
Docs: https://nextjs.org/docs/routing/shallow-routing
*/
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

export default function Links() {

  const router = useRouter()


  const [character, setCharacter] = useState<Character | null>(null)
  const next = useCallback(() => {
    router.push((character!.id + 1).toString(), undefined, { shallow: true })
  }, [character])

  const previous = useCallback(() => {
    router.push((character!.id - 1).toString(), undefined, { shallow: true })
  }, [character])

  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await (await fetch('https://thronesapi.com/api/v2/Characters/' + router.query.id)).json()
      const character = {
        fullName: result.fullName,
        family: result.family,
        title: result.title,
        id: result.id
      }
      setCharacter(character)
    }
    // Check if the router is ready before fetching the character
    if (router.isReady)
      fetchCharacter()
  }, [router.query])

  if (!character)
    return <div>Loading...</div>

  return <div>
    <span>{character.fullName}</span>
    <span>{character.family}</span>
    <span>{character.title}</span>
    <div className="pagination">
      {/* Finish the implementation*/}
      {character.id > 1 && <button onClick={previous} >Previous</button>}
      {character.id < 52 && <button onClick={next} >Next</button>}
    </div>
  </div>
}

type Character = {
  fullName: string
  title: string
  family: string
  id: number
}