import type { NextPage } from 'next'
import Layout from '@components/Layout/Index'
import Hero from '@components/Blocks/Hero/Index'
import Benefits from '@components/Home/Benefits/Index'
import Africa from '@components/Home/Africa/Index'
import Rent from '@components/Home/Rent/Index'
import Using from '@components/Home/Using/Index'
import Blogs from '@components/Home/Blog/Index'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Africa />
      <Rent />
      <Using />
      <Blogs />
    </Layout>
  )
}

export default Home
