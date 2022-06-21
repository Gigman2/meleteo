/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next'
import Layout from '@components/Layout/Index'
import Hero from '@components/Blocks/Hero/Index'
import NewsLetter from '@components/Blocks/NewsLetter/Index'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero
        cover="/images/CAREERS.png"
        title="Careers"
        subtext="Nullam tincidunt neconet neque ultrices suscipit suscipit nibh ut
        ante accIn ac laoreet arcuestibul"
      />
      <NewsLetter />
    </Layout>
  )
}

export default Home
