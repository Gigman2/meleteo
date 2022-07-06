/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Box, Flex, Text, Image, Icon } from '@chakra-ui/react'
import SolidButton from '@components/Buttons/SolidButton'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
const HeroDesktop: FC = () => {
  return (
    <Flex w="full" bgSize="cover" pos="relative">
      <Box pos="relative">
        <Box>
          <Image src="./images/biker.png" />
        </Box>
        <Box
          w={'100%'}
          px={{ base: 4, '2xl': 28 }}
          pos="absolute"
          top={0}
          mt={36}
          d="flex"
          justifyContent={'space-between'}
        >
          <Box>
            <Box transform={'rotate(90deg)'} mt={36} ml={-32}>
              <Flex justify={'space-between'} color="white">
                <Text>01/03</Text>
                <Text>Swift</Text>
              </Flex>
              <Box w={72} h={1} bg="whiteAlpha.600"></Box>
            </Box>
          </Box>
          <Box w="40%">
            <Text
              fontSize={32}
              fontWeight={400}
              letterSpacing={4}
              color="base.yellow"
              textTransform={'uppercase'}
            >
              Affordable
            </Text>
            <Text
              fontSize={80}
              fontWeight={600}
              fontFamily={'Rajdhani'}
              textTransform={'uppercase'}
              color="white"
              lineHeight={1.1}
            >
              Subscribe <br /> Today
            </Text>
            <Text color="white" fontSize={24} mt={6}>
              Get an E-Bike today, by selecting one of our inclusive payment
              plans, pay upfront, work and pay or subscribe to use
            </Text>
            <Flex mt={12}>
              <SolidButton
                title="View More"
                color="base.yellow"
                py={6}
                mr={12}
              />
              <SolidButton title="Contact Us" color="white" py={6} />
            </Flex>
            <Flex mt={16} justify="flex-end" w="100%">
              <Flex>
                <Flex
                  h={12}
                  w={12}
                  rounded={'full'}
                  cursor="pointer"
                  borderColor={'white'}
                  borderWidth={2}
                  mr={8}
                  align="center"
                  justify="center"
                >
                  <Icon as={FiChevronLeft} color="white" fontSize={24} />
                </Flex>
                <Flex
                  h={12}
                  w={12}
                  rounded={'full'}
                  cursor="pointer"
                  borderColor={'white'}
                  borderWidth={2}
                  align="center"
                  justify="center"
                >
                  <Icon as={FiChevronRight} fontSize={24} color="white" />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default HeroDesktop
