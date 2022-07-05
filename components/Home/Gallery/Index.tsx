import { FC } from 'react'
import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const Gallery: FC = () => {
  return (
    <Box mt={12} pos="relative">
      <Box pos={'relative'} d={{ base: 'none', md: 'block' }}>
        <Box d="flex">
          <Box pos={'relative'}>
            <Image src="./images/IMG F.png" />
            <Box pos={'absolute'} top={16} left={16}>
              <Text
                color={'white'}
                fontWeight={700}
                fontSize={{ base: 24, lg: 36 }}
              >
                Gallery
              </Text>
            </Box>
          </Box>
          <Box>
            <Image src="./images/IMG E.png" />
          </Box>
          <Box>
            <Image src="./images/IMG D.png" />
          </Box>
        </Box>
        <Box d="flex" pos={'relative'}>
          <Box pos={'relative'}>
            <Image src="./images/IMG A.png" />
            <Box pos="absolute" top={0} left={0} w={'100%'} h="100%" p={10}>
              <Text
                color={'white'}
                fontWeight={700}
                mb={6}
                fontSize={{ base: 20, lg: 24 }}
              >
                Supporting Informal Waste Workers
              </Text>
              <Text color={'white'} fontSize={13}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                doloribus rem officia ab quia recusandae quos praesentium
                fugiat, quas eos. Quo dolorum voluptatem
              </Text>
            </Box>
          </Box>
          <Box>
            <Image src="./images/IMG B.png" />
          </Box>
          <Box>
            <Image src="./images/IMG C.png" />
          </Box>
        </Box>
      </Box>
      <Box pos={'relative'} d={{ base: 'block', md: 'none' }}>
        <Box d="flex">
          <Box pos={'relative'}>
            <Image src="./images/IMG F.png" />
          </Box>
          <Box>
            <Image src="./images/IMG E.png" />
          </Box>
        </Box>
        <Box d="flex">
          <Box>
            <Image src="./images/IMG A.png" />
          </Box>
          <Box>
            <Image src="./images/IMG D.png" />
          </Box>
        </Box>
        <Box d="flex">
          <Box>
            <Image src="./images/IMG B.png" />
          </Box>
          <Box>
            <Image src="./images/IMG C.png" />
          </Box>
        </Box>
      </Box>
      <Box pos={'absolute'} p={12} top={6}>
        <Box d={{ base: 'block', md: 'none' }}>
          <Text
            mb={10}
            color={'white'}
            fontWeight={700}
            fontSize={{ base: 24, lg: 32 }}
          >
            Gallery
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            fontSize={{ base: 20, lg: 24 }}
          >
            Supporting Informal Waste Workers
          </Text>
          <Text color={'white'} fontSize={13}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            doloribus rem officia ab quia recusandae quos praesentium fugiat,
            quas eos. Quo dolorum voluptatem
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Gallery
