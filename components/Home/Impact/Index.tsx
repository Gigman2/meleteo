import { FC } from 'react'
import React from 'react'
import Header from '@components/Atom/header'
import { Box, Text, Image } from '@chakra-ui/react'

const Impact: FC = () => {
  return (
    <Box py={24} px={{ base: 4, '2xl': 32 }}>
      <Header title={'Our Impact'} />

      <Box mt={8} w={'50%'}>
        <Text fontSize={32} color="base.600" fontWeight={500}>
          Wondering why we do what we do? <br /> Here are some long lasting
          impacts and ripple effects:
        </Text>
      </Box>

      <Box>
        <Image src="./images/GAYO Impct Icons.png" />
      </Box>
    </Box>
  )
}

export default Impact
