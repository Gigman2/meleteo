/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface IProp {
  title: string
  subtext: string
  styles?: any
}

const Header: FC<IProp> = ({ title, subtext, styles }) => {
  return (
    <Box>
      <Text
        fontWeight={600}
        fontSize={{ base: 28, md: 36, '2xl': 44 }}
        lineHeight={1.1}
        textTransform="uppercase"
        letterSpacing={7}
        color={styles?.color['title'] || 'base.green'}
      >
        {title}
      </Text>
      <Text
        fontWeight={600}
        fontSize={{ base: 28, md: 36, '2xl': 76 }}
        lineHeight={1.1}
        textTransform="uppercase"
        letterSpacing={1}
        color={styles?.color['subtext'] || 'base.black'}
      >
        {subtext}
      </Text>
    </Box>
  )
}

export default Header
