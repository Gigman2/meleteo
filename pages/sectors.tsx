import type { NextPage } from 'next'
import Layout from '@components/Layout/Index'
import Hero from '@components/Blocks/Hero/Index'
import NewsLetter from '@components/Blocks/NewsLetter/Index'
import Impact from '@components/Sectors/Impact/Index'
import Voices from '@components/Sectors/Voices/Index'
import Faq from '@components/Sectors/Faq/Index'

const Sectors: NextPage = () => {
  return (
    <Layout>
      <Hero
        cover="./images/eelco-bohtlingk-VlrKoi0LLDY-unsplash.jpg"
        title="Climate Change"
        subtext="We are a youth-led, gender-balanced advocacy group which focuses largely on environmental sustainability and community development"
      />
      <Impact
        data={[
          {
            title: 'Impact Efforts',
            subtext:
              'Our mission is to research and provide and solutions to pressing environmental issues through youth empowerment and public education.',
            cover: './images/IMPACT EFF.png'
          }
        ]}
      />
      <Voices />
      <Faq />
      <NewsLetter />
    </Layout>
  )
}

export default Sectors
