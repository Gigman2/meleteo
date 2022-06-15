import { FC } from 'react'
import React from 'react'
import { Box, Text, Icon, Grid, GridItem, Image } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'
const Impact: FC = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(11,1fr)">
        <Box
          as={GridItem}
          colSpan={5}
          bg="base.400"
          p={24}
          d="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <Box>
            <Text color={'white'} fontSize={48} fontWeight="bold">
              Impact Efforts
            </Text>
            <Text
              my={4}
              color={'white'}
              fontSize={24}
              lineHeight={1.4}
              fontWeight={450}
            >
              Our mission is to research and provide and solutions to pressing
              environmental issues through youth empowerment and public
              education.
            </Text>
            <Icon as={BsArrowRight} color="white" boxSize={20} />
          </Box>
        </Box>
        <Box as={GridItem} colSpan={6}>
          <Box w="100%" h="100%" bg="gray.200">
            <Image src={'./images/IMPACT EFF.png'} />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Impact
