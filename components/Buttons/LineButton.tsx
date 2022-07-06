import { FC } from 'react'
import React from 'react'
import { Button, Text } from '@chakra-ui/react'

interface IProp {
  title: string
}

const LineButton: FC<IProp> = ({ title }) => {
  return (
    <Button
      bg="transparent"
      borderColor={'white'}
      borderWidth={2}
      rounded="xl"
      px={12}
      py={5}
    >
      <Text
        textTransform={'uppercase'}
        color="base.yellow"
        fontWeight={400}
        letterSpacing={1}
      >
        {title}
      </Text>
    </Button>
  )
}

export default LineButton
