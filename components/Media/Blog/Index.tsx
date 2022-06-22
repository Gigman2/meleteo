import { FC } from 'react'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Blog: FC = () => {
  return (
    <Box d="flex">
      <Box w={48} h={48} bg="#5ebb8c" mr="6"></Box>
      <Box flex={1}>
        <Text mb={2} fontWeight={700} color="base.600" fontSize={20}>
          Environmental Education
        </Text>
        <Text color="base.600" mt={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          nisi.
        </Text>
      </Box>
    </Box>
  )
}

export default Blog
