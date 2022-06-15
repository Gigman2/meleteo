import { FC, useState } from 'react'
import React from 'react'
import { Box, Text, Icon } from '@chakra-ui/react'
import { HiPlus, HiMinus } from 'react-icons/hi'

const FaqCard: FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Box borderBottomWidth={1} borderColor="blackAlpha.400" py={6}>
      <Box
        pb={2}
        d="flex"
        justifyContent={'space-between'}
        alignItems="center"
        cursor={'pointer'}
        onClick={() => setExpanded(!expanded)}
      >
        <Text fontWeight={500} fontSize={24}>
          Lorem ipsum dolor sit amet. ?
        </Text>
        {expanded ? (
          <Icon as={HiMinus} boxSize={6} />
        ) : (
          <Icon as={HiPlus} boxSize={6} />
        )}
      </Box>
      <Box height={expanded ? 'auto' : 0} overflow="hidden">
        <Text fontSize={20}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          fugiat ipsam pariatur nam asperiores, exercitationem reiciendis
          quibusdam dignissimos voluptatem commodi placeat ab saepe ullam natus!
        </Text>
      </Box>
    </Box>
  )
}

export default FaqCard
