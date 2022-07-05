/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from 'next'
import Layout from '@components/Layout/Index'
import Hero from '@components/Blocks/Hero/Index'
import NewsLetter from '@components/Blocks/NewsLetter/Index'
import Culture from '@components/Career/Culture/Index'
import Team from '@components/Career/Team/Index'
import Roles from '@components/Career/Roles/Index'

const DisasterRiskReduction: NextPage = () => {
  return (
    <Layout>
      <Hero
        cover="/images/CAREERS.png"
        title="Disaster Risk Reduction"
        subtext="Nullam tincidunt neconet neque ultrices suscipit suscipit nibh ut
        ante accIn ac laoreet arcuestibul"
        titleStyle={{ textAlign: 'center', w: '80%', mx: 'auto' }}
      />
    </Layout>
  )
}

export default DisasterRiskReduction
