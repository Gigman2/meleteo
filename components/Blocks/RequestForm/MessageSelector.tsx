import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { BiMinus } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { IFields } from '.'

const MessageSelector: FC<{
  item: { id: number; name: string }
  fields: IFields
  setFields: React.Dispatch<React.SetStateAction<IFields>>
}> = ({ item, fields, setFields }) => {
  const videos = [...fields.videos]
  const idx = videos.findIndex(i => i === item.name)
  const exists = idx > -1 ? true : false
  return (
    <Box key={item.name} my={4}>
      <Flex align="center">
        <Flex
          cursor={'pointer'}
          mr={2}
          onClick={() => {
            if (exists) {
              videos.splice(idx, 1)
            } else {
              videos.push(item.name)
            }

            setFields(prev => ({ ...prev, videos }))
          }}
        >
          <Icon as={exists ? BiMinus : BsPlus} boxSize={7} />
        </Flex>
        <Text>{item.name}</Text>
      </Flex>
    </Box>
  )
}

export default MessageSelector
