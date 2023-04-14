/*
Url : http://localhost:3000/dragons/images
Docs: https://nextjs.org/docs/basic-features/image-optimization

Goal:
  1. Put two images on the page using Image component from next/image
  Local image: ../../../public/assets/jon-snow-dragon.webp
  Remote image: https://d.newsweek.com/en/full/648050/drogon-spoils-war.jpg
*/

export default function Images() {

  return (
    <section className="intro">
      <div className='images-dragons'>
        <h2>Jon Snow and his dragon</h2>
        {/* add local image here */}
        <h2>Daenerys and her dragon</h2>
        {/* add remote image here */}
      </div>
    </section>
  )
}
