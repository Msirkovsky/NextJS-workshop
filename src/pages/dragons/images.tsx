/*
Docs: https://nextjs.org/docs/basic-features/image-optimization

Goal:
1. Put two images on the page using Image component from next/image
Local image:
  ../../../public/assets/jon-snow-dragon.webp
Remote image:
  https://d.newsweek.com/en/full/648050/drogon-spoils-war.jpg
*/

import Image from 'next/image'
import dragon from '../../../public/assets/jon-snow-dragon.webp'

export default function Images() {

  return (
    <section className="intro">
      <div className='images-dragons'>
        <h2>Jon Snow and his dragon</h2>
        <Image src={dragon} alt="dragon" />
        <h2>Daenerys and her dragon</h2>
        <Image src={'https://d.newsweek.com/en/full/648050/drogon-spoils-war.jpg'} width={2500} height={1875} alt="dragon" />
      </div>
    </section>
  )
}
