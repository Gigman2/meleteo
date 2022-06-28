import type { NextPage } from 'next'
import Layout from '@components/Layout/Index'
import Hero from '@components/Blocks/Hero/Index'
import Impact from '@components/Home/Impact/Index'
import ImpactSlide from '@components/Sectors/Impact/Index'
import Thematic from '@components/Home/Thematic/Index'
import Partners from '@components/Home/Partners'
import Gallery from '@components/Home/Gallery/Index'
import NewsLetter from '@components/Blocks/NewsLetter/Index'

const Home: NextPage = () => {
  const slideData = [
    {
      title: 'Mission',
      subtext:
        'Our mission is to research and provide  solutions to pressing environmental issues through youth empowerment  and public education.',
      cover: './images/MISSION.png'
    },
    {
      title: 'Vision',
      subtext:
        'We work to create a world whereby conserving the natural environment will be a number one priority of the masses',
      cover: './images/VISION.png'
    }
  ]
  return (
    <Layout>
      <Hero
        cover="./images/daniel-rauber-wOWEyyoFEyU.jpg"
        title="Green Africa Youth Organization"
        subtext="We are a youth-led, gender-balanced advocacy group which focuses
              largely on environmental sustainability and community development"
      />
      <Impact />
      <ImpactSlide data={slideData} mb={12} />
      <Thematic />
      <Partners />
      <Gallery />
      <NewsLetter />
    </Layout>
  )
}

export default Home
