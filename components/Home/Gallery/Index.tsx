import { FC } from 'react'
import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const Gallery: FC = () => {
  return (
    <Box mt={12}>
      <Box pos={'relative'}>
        <Box d="flex">
          <Box pos={'relative'}>
            <Image src="./images/IMG F.png" />
            <Box pos={'absolute'} top={8} left={8}>
              <Text color={'white'} fontWeight={700} fontSize={32}>
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
        <Box d="flex">
          <Box pos="relative">
            <Image src="./images/IMG A.png" />
            <Box
              pos="absolute"
              top={0}
              left={0}
              w={{ base: '200%', lg: '100%' }}
              h="100%"
              d="flex"
              justifyContent={'center'}
              alignItems="center"
              p={10}
            >
              <Box>
                <Text
                  color={'white'}
                  fontWeight={700}
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
          </Box>
          <Box>
            <Image src="./images/IMG B.png" />
          </Box>
          <Box>
            <Image src="./images/IMG C.png" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Gallery
