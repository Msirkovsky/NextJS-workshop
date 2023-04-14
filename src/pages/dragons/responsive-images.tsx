/*
Url: http://localhost:3000/dragons/responsive-images
Goal:
  1. Add proper sizes attribute to the DragonImage component:
    max width 768px => 100vw
    max width 1024px  => 50vw
    larger => 33vw
Docs: https://nextjs.org/docs/api-reference/next/image#sizes

  2. The three first images should have higher priority than others. Docs: https://nextjs.org/docs/api-reference/next/image#priority

  3. The first image should have quality = 90% 
  4. The last image should have quality= 30%
  Docs: https://nextjs.org/docs/api-reference/next/image#quality
*/

import dragon from '../../../public/assets/jon-snow-dragon.webp'
import Image from 'next/image'

function DragonImage(props: any) {
  return <Image src={dragon} alt="Jon Snow rides a dragon"

  />
}

export default function Images() {

  return (
    <section className="intro">
      <div className='responsive-dragons'>
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage />
      </div>
    </section>
  )
}
