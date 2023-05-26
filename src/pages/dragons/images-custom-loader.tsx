/*
Url: http://localhost:3000/dragons/images-custom-loader
Docs: https://nextjs.org/docs/api-reference/next/image#loader

Goal:
  1. Use the custom loader to load the remote image.
  /image-assets/648050/drogon-spoils-war.jpg => https://d.newsweek.com/en/full/648050/drogon-spoils-war.jpg
*/


import Image from 'next/image'

const myLoader = ({ src, quality }: any) => {
  return src.replace('/image-assets', 'https://d.newsweek.com/en/full')
}

export default function Images() {

  return (
    <section className="intro">
      <div className='images-dragons'>
        <h2>Daenerys and her dragon</h2>
        <Image
          loader={myLoader}
          src={'/image-assets/648050/drogon-spoils-war.jpg'} width={2500} height={1875} alt="dragon" />
      </div>
    </section>
  )
}