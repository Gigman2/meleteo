import { FC } from 'react'
import React from 'react'
import Header from '@components/Atom/header'
import { Box, Text, Image, Grid } from '@chakra-ui/react'

const Impact: FC = () => {
  const impactImages = [
    './images/impacts/Our Impact H.png',
    './images/impacts/Our Impact G.png',
    './images/impacts/Our Impact F.png',
    './images/impacts/Our Impact E.png',
    './images/impacts/Our Impact D.png',
    './images/impacts/Our Impact C.png',
    './images/impacts/Our Impact B.png',
    './images/impacts/Our Impact A.png'
  ]
  return (
    <Box py={24} px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 56 }}>
      <Header title={'Our Impact'} />

      <Box mt={8} w={{ base: '100%', lg: '50%' }}>
        <Text fontSize={32} color="base.600" fontWeight={500}>
          Wondering why we do what we do? <br /> Here are some long lasting
          impacts and ripple effects:
        </Text>
      </Box>

      <Grid templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }}>
        {impactImages.map(item => (
          <Box p={{ base: 4, xl: 12 }}>
            <Image src={item} borderWidth={1} borderColor={'silver'} />
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default Impact
