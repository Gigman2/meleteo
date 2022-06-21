import { FC } from 'react'
import React from 'react'
import Header from '@components/Atom/header'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import VoiceCard from '@components/Blocks/Cards/VoicesCard'

const Voices: FC = () => {
  return (
    <Box py={24} px={{ base: 4, '2xl': 56 }}>
      <Header title={'Voices From Our Partners'} />

      <Grid mt={24} gap={12} templateColumns="repeat(4,1fr)">
        <Box as={GridItem} colSpan={2}>
          <VoiceCard theme="normal" />
        </Box>
        <Box as={GridItem} colSpan={2}>
          <VoiceCard theme="inverse" />
        </Box>
        <Box as={GridItem} colSpan={2}>
          <VoiceCard theme="inverse" />
        </Box>
        <Box as={GridItem} colSpan={2}>
          <VoiceCard theme="normal" />
        </Box>
      </Grid>
    </Box>
  )
}

export default Voices
