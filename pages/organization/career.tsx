/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next'
import Layout from '@components/Layout/index'
import Hero from '@components/Blocks/Hero/Index'
import NewsLetter from '@components/Blocks/NewsLetter/Index'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero
        cover="./images/ORG_HOME.png"
        title="About Us"
        subtext="Our goal is to create a balanced relationship between humans and the various natural systems on which they depend in such a way that all the components are accorded a proper degree of sustainability"
      />
      <NewsLetter />
    </Layout>
  )
}

export default Home
