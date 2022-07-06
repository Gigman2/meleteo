/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import Header from '@components/Atom/header'

const Africa: FC = () => {
  return (
    <Box
      px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 28 }}
      pt={32}
      pb={32}
      bg="white"
      pos={'relative'}
    >
      <Header title="Designed for Africa" subtext="Yes. It's Electric" />
      <Flex justifyContent={'center'}>
        <Box>
          <Image src="./images/bike-2.png" w="60%" mx="auto" />
        </Box>
      </Flex>
    </Box>
  )
}

export default Africa
