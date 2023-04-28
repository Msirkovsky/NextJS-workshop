/*
Tasks:
  1. Open ../.env.development and follow the instruction

Url: http://localhost:3000/quotes/env_variables
Docs: https://nextjs.org/docs/basic-features/environment-variables

*/

import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'

export default function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <section className="intro">
      <h1>1. {process.env.QUOTE_FEAR}</h1>
      <h2>2. {data.winterIsComingQuote}</h2>
      <h3>3. {data.playAGameQuote}</h3>
    </section>
  )
}

type Data = {
  winterIsComingQuote: string
  playAGameQuote: string
}

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
  const winterIsComingQuote = process.env.QUOTE_ENV || ''

  const env = process.env
  const playAGameQuote = env.PLAY_GAME_QUOTE || ''
  return {
    props: {
      data: {
        winterIsComingQuote: winterIsComingQuote,
        playAGameQuote: playAGameQuote
      }
    }
  }
}