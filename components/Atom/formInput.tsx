/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, FormLabel, Input, Text } from '@chakra-ui/react'

interface IProp {
  label: string
  type?: string
  name: string
  value: string
  onChange: (v: any) => void
  error?: string | null
  isRequired?: boolean
}

const FormInput: FC<IProp> = ({
  label,
  type,
  error,
  value,
  onChange,
  isRequired
}) => {
  return (
    <Box
      bg="whiteAlpha.800"
      rounded="lg"
      borderWidth={2}
      overflow="hidden"
      borderColor={error ? 'red.400' : 'base.blue'}
      width={{ base: 'full', lg: '50%' }}
      mb={8}
    >
      <FormLabel
        color={error ? 'red.400' : 'base.blue'}
        fontWeight={600}
        px={4}
        py={2}
        margin={0}
        display="flex"
        justifyContent={'space-between'}
      >
        {label}
        {isRequired && (
          <Text fontSize={14} color={error ? 'red.400' : 'gray.500'}>
            Required
          </Text>
        )}
      </FormLabel>
      <Input
        type={type}
        bg="whiteAlpha.800"
        borderWidth={0}
        _hover={{ borderWidth: 0 }}
        rounded={0}
        color={'gray.600'}
        value={value}
        onChange={onChange}
      />
    </Box>
  )
}

export default FormInput
