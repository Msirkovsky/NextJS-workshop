/*
Url: http://localhost:3000/dragons/unpotimized-images
Goal:
  1. Disable image optimization for the image. Docs: https://nextjs.org/docs/api-reference/next/image#unoptimized
  2. Disable lazy loading for the image. Docs: https://nextjs.org/docs/api-reference/next/image#loading
  3. Set minimum Cache TTL. Docs: https://nextjs.org/docs/api-reference/next/image#minimum-cache-ttl
*/

import Image from 'next/image'

export default function Images() {

  return (
    <section className="intro">
      <div className='images-dragons'>
        <h2>Daenerys and her dragon</h2>
        <Image src={'https://d.newsweek.com/en/full/648050/drogon-spoils-war.jpg'} width={2500} height={1875} alt="Daenerys and her dragon go to war" />
      </div>
    </section>
  )
}
