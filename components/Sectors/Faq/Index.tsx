import { FC } from 'react'
import React from 'react'
import { Box, Text, Icon, Grid, GridItem, Image } from '@chakra-ui/react'
import Header from '@components/Atom/header'
import FaqCard from '@components/Blocks/Cards/FaqCard'

const Faq: FC = () => {
  return (
    <Box px={{ base: 4, '2xl': 32 }}>
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
