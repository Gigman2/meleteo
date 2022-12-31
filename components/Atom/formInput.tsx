/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, FormLabel, Input } from '@chakra-ui/react'

interface IProp {
  label: string
  type?: string
  name: string
  value: string
  onChange: (v: any) => void
}

const FormInput: FC<IProp> = ({ label, type, name, value, onChange }) => {
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
