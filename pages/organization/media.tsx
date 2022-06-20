/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next'
import Layout from '@components/Layout/index'
import Hero from '@components/Blocks/Hero/Index'
import NewsLetter from '@components/Blocks/NewsLetter/Index'
import ImagesCard from '@components/Media/ImageCard/Index'
import MediaContent from '@components/Media/MediaContent/Index'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero
        cover={'/images/ORG_HOME.png'}
        title="Welcome to our media page"
        titleStyle={{ textAlign: 'center', fontSize: 92, w: '80%', mx: 'auto' }}
      />
      <ImagesCard />
      <MediaContent />
      <NewsLetter />
    </Layout>
  )
}

export default Home
