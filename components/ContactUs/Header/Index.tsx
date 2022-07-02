import { FC } from 'react'
import React from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'

const Header: FC = () => {
  return (
    <Box py={{ base: 12 }} bgImage="./images/contact_image.png">
      <Box
        maxW={{ base: '85vw', md: '600px', lg: '7000px' }}
        mx={'auto'}
        bg="base.400"
        p={12}
        mt={{ base: 6, lg: 0 }}
      >
        <Text color="white" fontSize={68} textAlign="center" fontWeight={700}>
          Contact Us
        </Text>
        <Text
          color="white"
          w={'65%'}
          textAlign="center"
          mx="auto"
          fontSize={20}
        >
          Thanks for your interest. Please fill out the form below and we will
          respond as soon as possible
        </Text>

        <Box maxW={'65%'} mx="auto" mt={6}>
          <Input
            placeholder="Your Name"
            _placeholder={{ color: 'white' }}
            rounded={0}
            color="white"
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            borderBottomWidth={3}
            borderBottomColor={'white'}
            px={0}
            _focus={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 3
            }}
            _active={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 3
            }}
          />
        </Box>
        <Box maxW={'65%'} mx="auto" mt={10}>
          <Input
            placeholder="Your Email"
            _placeholder={{ color: 'white' }}
            rounded={0}
            color="white"
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            borderBottomWidth={3}
            borderBottomColor={'white'}
            px={0}
            _focus={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 3
            }}
            _active={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 3
            }}
          />
        </Box>
        <Box maxW={'65%'} mx="auto" mt={10}>
          <Input
            placeholder="Your Message"
            _placeholder={{ color: 'white' }}
            rounded={0}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            borderBottomWidth={3}
            borderBottomColor={'white'}
            px={0}
            _focus={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 3
            }}
            _active={{
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 3
            }}
          />
        </Box>

        <Button
          color={'white'}
          bg="base.600"
          py={8}
          px={12}
          rounded={0}
          mt={12}
          _hover={{ bg: 'base.600' }}
          _focus={{ bg: 'base.600' }}
          _active={{ bg: 'base.600' }}
          marginX="50%"
          transform="translateX(-50%)"
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default Header
