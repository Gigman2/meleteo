/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import { Box, Text, Icon, Grid, GridItem, Image } from '@chakra-ui/react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

interface ISlide {
  title: string
  subtext: string
  cover: string
}

const Impact: FC<
  {
    data: ISlide[]
    [x: string]: any
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ data, ...rest }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const MotionBox = motion(Box)
  const transition = { duration: 0.6 }

  const handleDirection = (d: number) => {
    if (d === -1) {
      setCurrentSlide(prev => prev - 1)
      setDirection(1)
    } else {
      setCurrentSlide(prev => prev + 1)
      setDirection(-1)
    }
  }

  return (
    <Box {...rest}>
      <Grid templateColumns="repeat(11,1fr)" maxH={124} overflow="hidden">
        <Box
          as={GridItem}
          w="100%"
          h="100%"
          py={24}
          colSpan={5}
          bg="base.400"
          justifyContent={'center'}
          alignItems="center"
        >
          <MotionBox
            w={`${100 * data.length}%`}
            d="flex"
            boxSizing="border-box"
            mr={24}
            animate={{
              x: `${direction * (100 / data.length) * currentSlide}%`,
              transition: { ...transition }
            }}
          >
            {data.map(item => (
              <Box w={`${100 / data.length}%`} px={24}>
                <Text color={'white'} fontSize={48} fontWeight="bold">
                  {item.title}
                </Text>
                <Text
                  my={4}
                  color={'white'}
                  fontSize={24}
                  lineHeight={1.4}
                  fontWeight={450}
                >
                  {item.subtext}
                </Text>
              </Box>
            ))}
          </MotionBox>

          <Box
            d="flex"
            w={'100px'}
            justifyContent="space-between"
            mt={8}
            ml={24}
          >
            <Box
              w={10}
              h={10}
              d="flex"
              bg={currentSlide === 0 ? 'base.600' : '#125837'}
              rounded="full"
              alignItems="center"
              justifyContent={'center'}
              cursor={currentSlide === 0 ? 'not-allowed' : 'pointer'}
              onClick={() => (currentSlide === 0 ? null : handleDirection(-1))}
            >
              <Icon as={IoIosArrowBack} boxSize={5} color="white" />
            </Box>
            <Box
              w={10}
              h={10}
              d="flex"
              rounded="full"
              bg={currentSlide >= data.length - 1 ? 'base.600' : '#125837'}
              cursor={
                currentSlide >= data.length - 1 ? 'not-allowed' : 'pointer'
              }
              alignItems="center"
              justifyContent={'center'}
              onClick={() =>
                currentSlide >= data.length - 1 ? null : handleDirection(1)
              }
            >
              <Icon as={IoIosArrowForward} boxSize={5} color="white" />
            </Box>
          </Box>
        </Box>
        <Box as={GridItem} colSpan={6}>
          <Box w="100%" bg="gray.200" overflow={'hidden'}>
            <MotionBox
              w={`${100 * data.length}%`}
              d="flex"
              boxSizing="border-box"
              mr={24}
              animate={{
                x: `${direction * (100 / data.length) * currentSlide}%`,
                transition: { ...transition }
              }}
            >
              {data.map(item => (
                <Box w={`${100 / data.length}%`}>
                  <Image src={item.cover} w="100%" />
                </Box>
              ))}
            </MotionBox>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Impact
