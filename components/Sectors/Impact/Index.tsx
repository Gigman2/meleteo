/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Icon, Grid, GridItem, Image } from '@chakra-ui/react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
const Impact: FC<
  {
    title: string
    subtext: string
    cover: string
    [x: string]: any
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ title, subtext, cover, ...rest }) => {
  return (
    <Box {...rest}>
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
              {title}
            </Text>
            <Text
              my={4}
              color={'white'}
              fontSize={24}
              lineHeight={1.4}
              fontWeight={450}
            >
              {subtext}
            </Text>
            <Box d="flex" w={'100px'} justifyContent="space-between" mt={8}>
              <Box
                w={10}
                h={10}
                bg="base.600"
                rounded="full"
                d="flex"
                justifyContent={'center'}
                alignItems="center"
              >
                <Icon as={IoIosArrowBack} boxSize={5} color="white" />
              </Box>
              <Box
                w={10}
                h={10}
                bg="base.600"
                rounded="full"
                d="flex"
                justifyContent={'center'}
                alignItems="center"
              >
                <Icon as={IoIosArrowForward} boxSize={5} color="white" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box as={GridItem} colSpan={6}>
          <Box w="100%" h="100%" bg="gray.200">
            <Image src={cover} />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Impact
