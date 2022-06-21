/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

const Member: FC = () => {
  return (
    <Box>
      <Box>
        <Image src={'/images/CEO_IMG 2.png'} />
      </Box>
      <Text color={'gray.500'} fontSize={32} fontWeight="700" mt={4}>
        Joshua Amposem
      </Text>
      <Text color={'gray.400'}>Green Africa Youth Organization</Text>
    </Box>
  )
}

export default Member
