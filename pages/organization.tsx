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
        cover="./images/ORG_HOME.png"
        title="About Us"
        subtext="Our goal is to create a balanced relationship between humans and the various natural systems on which they depend in such a way that all the components are accorded a proper degree of sustainability"
      />
    </Layout>
  )
}

export default Home
