/*
Tasks:
  1. Open ../env.development and follow the instruction

Url: http://localhost:3000/quotes/env_variables
Docs: https://nextjs.org/docs/basic-features/environment-variables

*/

import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'

export default function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const varName = 'NEXT_PUBLIC_QUOTE_FEAR'

  return (
    <section className="intro">
      <h1>1. {process.env.NEXT_PUBLIC_QUOTE_FEAR}</h1>
      <h2>2. {data.winterIsComingQuote}</h2>
      <h3>3. {data.playAGameQuote}</h3>

      <h3>4. {process.env['NEXT_PUBLIC_QUOTE_FEAR']}</h3>
      <h3>5. {process.env[varName]}</h3>
    </section>
  )
}

type Data = {
  winterIsComingQuote: string
  playAGameQuote: string
}

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {

  const winterIsComingQuote = process.env.QUOTE_ENV || ''

  const { PLAY_GAME_QUOTE } = process.env
  const playAGameQuote = PLAY_GAME_QUOTE || ''
  return {
    props: {
      data: {
        winterIsComingQuote: winterIsComingQuote,
        playAGameQuote: playAGameQuote
      }
    }
  }
}