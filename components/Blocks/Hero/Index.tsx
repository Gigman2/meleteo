/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

interface IProp {
  cover: string
  title: string
  subtext?: string
  titleStyle?: any
  align?: string
}

const HeroDesktop: FC<IProp> = ({
  cover,
  title,
  subtext,
  titleStyle,
  align
}) => {
  return (
    <Flex w="full" bgSize="cover">
      <Box
        h={124}
        w="100%"
        bgImage={cover}
        bgSize="cover"
        bgPos={'center'}
        transform="rotateY(180deg)"
      >
        <Box
          w="100%"
          h="100%"
          bgColor={'rgba(47, 122, 56, 0.2)'}
          transform="rotateY(180deg)"
          px={{ base: 6, sm: 6, md: 16, lg: 20, '2xl': 28, '4xl': 28 }}
          d="flex"
          alignItems={'center'}
        >
          <Box w={{ base: '100%', lg: '60%' }} {...titleStyle}>
            <Text
              fontSize={
                titleStyle?.fontSize || {
                  base: 48,
                  md: 52,
                  '2xl': 72
                }
              }
              color="white"
              fontWeight={700}
              lineHeight={1}
            >
              {title}
            </Text>
            <Text
              color="white"
              fontWeight={400}
              fontSize={{ base: 20, lg: 24 }}
              mt={6}
              {...(align ? {} : { mx: 'auto' })}
              w={{ base: '100%', lg: '70%' }}
            >
              {subtext}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default HeroDesktop
