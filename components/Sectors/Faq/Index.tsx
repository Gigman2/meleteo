import { FC } from 'react'
import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '@components/Atom/header'
import FaqCard from '@components/Blocks/Cards/FaqCard'

const Faq: FC = () => {
  return (
    <Box px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 56 }}>
      <Header title={'FAQs'} />

      <Box mt={4}>
        <FaqCard />
        <FaqCard />
        <FaqCard />
      </Box>
    </Box>
  )
}

export default Faq
