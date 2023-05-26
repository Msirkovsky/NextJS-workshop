/*
Goal:
1. Add proper sizes attribute to the DragonImage component:
   max width 768px => 100vw
   max width 1024px  => 50vw
   larger => 33vw
Docs: https://nextjs.org/docs/api-reference/next/image#sizes

2. The first three images should have higher priority than others. Docs: https://nextjs.org/docs/api-reference/next/image#priority
3. The first image should have quality = 90% 
4. The last image should have quality= 30%
Docs: https://nextjs.org/docs/api-reference/next/image#quality
*/

import Image from 'next/image'
import dragon from '../../../public/assets/jon-snow-dragon.webp'

function DragonImage(props: any) {
  return <Image src={dragon}
    priority={props.priority}
    alt="dragon"
    quality={props.quality}
    sizes="(max-width: 768px) 100vw,
  (max-width: 1024px) 50vw,
  33vw"
  />
}

export default function Images() {

  return (
    <section className="intro">
      <div className='responsive-dragons'>
        <DragonImage priority={true} quality={90} />
        <DragonImage priority={true} />
        <DragonImage priority={true} />
        <DragonImage />
        <DragonImage />
        <DragonImage />
        <DragonImage quality={30} />
      </div>
    </section>
  )
}
