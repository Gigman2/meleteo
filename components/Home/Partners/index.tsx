import { FC } from 'react'
import React from 'react'
import Header from '@components/Atom/header'
import { Box, Image } from '@chakra-ui/react'

const Partners: FC = () => {
  return (
    <Box px={{ base: 4, '2xl': 56 }} my={32}>
      <Header title={'Partners'} />

      <Box mt={8}>
        <Image src="./images/Partners.png" />
      </Box>
    </Box>
  )
}

export default Partners
