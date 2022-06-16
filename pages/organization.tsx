/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Blocks/Hero/Index'
import Impact from '@components/Home/Impact/Index'
import Thematic from '@components/Home/Thematic/Index'
import Partners from '@components/Home/Partners'
import Gallery from '@components/Home/Gallery/Index'
import NewsLetter from '@components/Blocks/NewsLetter/Index'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero
        cover="./images/daniel-rauber-wOWEyyoFEyU.jpg"
        title="Great Africa Youth Organization"
        subtext="We are a youth-led, gender-balanced advocacy group which focuses
              largely on environmental sustainability and community development"
      />
    </Layout>
  )
}

export default Home
