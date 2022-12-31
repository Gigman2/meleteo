/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Button, Text } from '@chakra-ui/react'

interface IProp {
  title: string
  color: string
  [x: string]: any
}

const SolidButton: FC<IProp> = ({ title, color, ...rest }) => {
  return (
    <Button
      bg={color}
      rounded="xl"
      px={12}
      py={5}
      {...rest}
      color="white"
      _hover={{ color: 'base.black', bg: 'white' }}
    >
      <Text textTransform={'uppercase'} fontWeight={600} letterSpacing={1}>
        {title}
      </Text>
    </Button>
  )
}

export default SolidButton
