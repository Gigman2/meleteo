import { FC } from 'react'
import React from 'react'
import { Box, Button, Input, Spacer, Text } from '@chakra-ui/react'

const NewsLetter: FC = () => {
  return (
    <Box py={{ base: 12 }}>
      <Text
        textDecorationLine={'underline'}
        textDecorationThickness={'1px'}
        textUnderlineOffset={20}
        textDecorationColor={'rbga(0, 104, 55, 0.1)'}
        textAlign={'center'}
        color={'base.600'}
        fontWeight={700}
        fontSize={40}
        mt={6}
      >
        Subscribe to our newsletter
      </Text>
      <Text textAlign={'center'} color={'base.600'} mt={10}>
        Sign up to receive GAYO news and updates
      </Text>
      <Box w={120} h={14} mx="auto" mt={6} d="flex" gap={12}>
        <Input
          h="100%"
          rounded={0}
          borderWidth={2}
          marginRight={6}
          borderColor="base.600"
          placeholder="Email Address"
          _placeholder={{ color: 'base.600' }}
          _focus={{ borderColor: 'base.600' }}
          _active={{ borderColor: 'base.600' }}
        />
        <Button h="100%" w={32} bg="base.600" rounded={0} color="white">
          Sign Up
        </Button>
      </Box>
    </Box>
  )
}

export default NewsLetter
