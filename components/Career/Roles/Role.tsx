/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Role: FC<{ title: string; description: string }> = ({
  title,
  description
}) => {
  return (
    <Box bg="white">
      <Text fontSize={32} color="base.400" fontWeight={700}>
        {title}
      </Text>
      <Text fontSize={20} color="base.600" fontWeight={500}>
        {description}
      </Text>
    </Box>
  )
}

export default Role
