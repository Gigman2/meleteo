import { Box, Flex, Icon, Input, Text } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { BiMinus } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { IFields } from '.'

const MessageSelector: FC<{
  name: string
  value: number
  fields: IFields
  setFields: React.Dispatch<React.SetStateAction<IFields>>
}> = ({ name, value, fields, setFields }) => {
  const handleValueUpdate = (unit: string) => {
    let val = 0
    const videos: Record<string, number> = { ...fields.videos }
    if (!videos[name]) {
      videos[name] = val + (unit === 'add' ? 1 : 0)
    } else {
      val = videos[name]
      if (unit === 'add') {
        val = val + 1
      } else {
        if (val > 0) {
          val = val - 1
        }
      }

      videos[name] = val
    }

    setFields(prev => ({ ...prev, videos }))
  }

  return (
    <Box key={name} my={4}>
      <Flex align="center" justify={'space-between'}>
        <Text>{name}</Text>
        <Flex mr={12} align="center">
          <Flex
            cursor={'pointer'}
            mr={2}
            onClick={() => handleValueUpdate('minus')}
          >
            <Icon as={BiMinus} boxSize={7} />
          </Flex>
          <Box w={12} h={8} mx={2} borderWidth={1} borderColor="base.blue">
            <Input
              outline="none"
              borderWidth={0}
              _hover={{ outline: 'none' }}
              _active={{ outline: 'none' }}
              w="100%"
              h="100%"
              rounded={0}
              value={value}
            />
          </Box>
          <Flex cursor={'pointer'} onClick={() => handleValueUpdate('add')}>
            <Icon as={BsPlus} boxSize={7} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default MessageSelector
