import { FC } from 'react'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface IProp {
  theme: string
}
const VoiceCard: FC<IProp> = ({ theme }) => {
  return (
    <Box>
      <Box d={'flex'} alignItems="center">
        <Box w={20} h={20} rounded={'full'} bg="base.400" mr={6}></Box>
        <Box>
          <Text
            color={theme === 'inverse' ? 'black' : 'base.400'}
            fontSize={36}
            fontWeight="bold"
            lineHeight={1.22}
          >
            John Doe
          </Text>
          <Text fontSize={18}>Project Manager, UNDP</Text>
        </Box>
      </Box>
      <Text
        my={8}
        color={theme === 'inverse' ? 'base.600' : 'base.400'}
        fontSize={24}
        lineHeight={1.6}
        fontWeight={450}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis
        quam. Eveniet unde dicta sed harum! Fugiat, similique earum id veniam
        molestiae neque vero, dolor deserunt nesciunt accusantium nemo
        exercitationem, itaque reprehenderit cum optio explicabo.
      </Text>
    </Box>
  )
}

export default VoiceCard
