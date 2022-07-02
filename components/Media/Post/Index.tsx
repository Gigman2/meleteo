import { FC } from 'react'
import React from 'react'
import { Box, Text, Icon } from '@chakra-ui/react'
import { FiDisc } from 'react-icons/fi'

const Post: FC = () => {
  return (
    <>
      <Box w="100%" h={44} bg="#5ebb8c"></Box>
      <Text my={3} fontWeight={700} color="base.600" fontSize={20}>
        Environmental Education
      </Text>
      <Box d="flex" color="gray.400" alignItems={'center'}>
        <Icon as={FiDisc} boxSize={3} mr={3} />
        <Text color="gray.400" fontSize={14}>
          May 20 2022
        </Text>
      </Box>
      <Text color="base.600" mt={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        nisi.
      </Text>
    </>
  )
}

export default Post
