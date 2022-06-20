import { FC } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

interface IProp {
  cover: string
  title: string
  subtext?: string
  titleStyle?: any
}

const HeroDesktop: FC<IProp> = ({ cover, title, subtext, titleStyle }) => {
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
          px={{ base: 4, '2xl': 28 }}
          d="flex"
          alignItems={'center'}
        >
          <Box w={'60%'} {...titleStyle}>
            <Text
              fontSize={titleStyle?.fontSize || 72}
              color="white"
              fontWeight={700}
              lineHeight={1}
            >
              {title}
            </Text>
            <Text color="white" fontWeight={400} fontSize={24} mt={6}>
              {subtext}
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default HeroDesktop
