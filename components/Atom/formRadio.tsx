/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Flex, FormLabel, Text } from '@chakra-ui/react'

interface IProp {
  label: string
  options?: string[]
  value: boolean
  onChange: () => void
}

const FormRadio: FC<IProp> = ({ label, options, value, onChange }) => {
  return (
    <Box
      bg="whiteAlpha.800"
      rounded="lg"
      borderWidth={2}
      overflow="hidden"
      borderColor="base.blue"
      width={{ base: 'full', lg: '50%' }}
      mb={8}
    >
      <FormLabel color="base.blue" fontWeight={600} px={4} py={2} margin={0}>
        {label}
      </FormLabel>
      <Flex>
        <Flex px={4} py={1} align="center">
          <Text color="base.blue" fontWeight={600}>
            {options?.[0] || 'Yes'}
          </Text>
          <Flex
            rounded={'md'}
            w={16}
            h={8}
            mx={2}
            bg="white"
            align={'center'}
            borderWidth={1}
            borderColor="base.blue"
            cursor={'pointer'}
            onClick={onChange}
            position="relative"
          >
            <Box
              rounded={'md'}
              w={6}
              h={6}
              ml={1}
              bg="base.blue"
              pos={'relative'}
              left={value ? 0 : 8}
            ></Box>
          </Flex>
          <Text color="base.blue" fontWeight={600}>
            {options?.[1] || 'No'}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default FormRadio
