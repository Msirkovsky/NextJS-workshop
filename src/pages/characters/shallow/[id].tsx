/* Shallow Routing
Goal: 
  1. Add shallow routing, i.e. when you click on the next/previous button, the page should not reload.

Url: http://localhost:3000/characters/shallow/1
Docs: https://nextjs.org/docs/routing/shallow-routing
*/

import { useEffect, useState } from "react"

export default function Shallow() {

  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await (await fetch('https://thronesapi.com/api/v2/Characters/' + 1)).json()
      const character = {
        fullName: result.fullName,
        family: result.family,
        title: result.title,
        id: result.id
      }
      setCharacter(character)
    }
    fetchCharacter()
  }, [])

  if (!character)
    return <div>Loading...</div>

  return <div>
    <span>{character.fullName}</span>
    <span>{character.family}</span>
    <span>{character.title}</span>
    <div className="pagination">
      {/* Finish the implementation*/}
      {character.id > 1 && <button >Previous</button>}
      {character.id < 52 && <button >Next</button>}
    </div>
  </div>
}

type Character = {
  fullName: string
  title: string
  family: string
  id: number
}