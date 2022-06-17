/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react'
const Impact: FC = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(12,1fr)">
        <Box as={GridItem} colSpan={6}>
          <Box w="100%" h="100%" bg="gray.200">
            <Image src={'./images/CEO_IMG.png'} />
          </Box>
        </Box>
        <Box
          as={GridItem}
          colSpan={6}
          bg="white"
          p={24}
          d="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <Box>
            <Text color={'base.600'} fontSize={48} fontWeight="bold">
              Founder Message
            </Text>
            <Text
              my={4}
              color={'base.600'}
              fontSize={20}
              lineHeight={1.4}
              fontWeight={450}
            >
              Nullam tincidunt nec neque vel imperdiet. In quis diam et neque
              ultrices suscipit condimentum eu justo. Donec suscipit nibh ut
              ante accumsan, non vehicula doliblandit. In ac laoreet
              arcuestibulum vel dignissim ligula.
            </Text>
            <Box mt={8}>
              <Text fontWeight={'bold'} color="black" fontSize={32}>
                Joshua Amposem
              </Text>
              <Text color="base.400" fontSize={24}>
                Green Africa Youth Organization
              </Text>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Impact
