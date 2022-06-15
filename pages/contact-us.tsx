import type { NextPage } from 'next'
import Layout from '@components/Layout'
import GetInTouch from '@components/ContactUs/GetInTouch/Index'
import Header from '@components/ContactUs/Header/Index'

const ContactUs: NextPage = () => {
  return (
    <Layout>
      <Header />
      <GetInTouch />
    </Layout>
  )
}

export default ContactUs
