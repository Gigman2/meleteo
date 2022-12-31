/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import NextLink from 'next/link'
import { Box, Flex, Text, Link, Image, useDisclosure } from '@chakra-ui/react'
import SolidButton from '@components/Buttons/SolidButton'
import RequestForm from '../RequestForm'
const HeroDesktop: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex w="full" h="100vh" bgSize="cover" pos="relative">
      <Box
        pos={'absolute'}
        zIndex={100}
        top={6}
        left={5}
        d={{ base: 'block', lg: 'none' }}
      >
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Image src="/images/logo.png" h={12} />
          </Link>
        </NextLink>
      </Box>
      <RequestForm isOpen={isOpen} onClose={onClose} />
      <Box pos="relative" w="100%" h="100%">
        <Box
          bgImage={'images/cover-2.jpg'}
          backgroundSize={'cover'}
          backgroundPosition={{ base: 'center', lg: 'center' }}
          w="100%"
          h="100%"
        ></Box>
        <Box
          w={'100%'}
          px={{ base: 4, '2xl': 28 }}
          pos="absolute"
          top={0}
          mt={36}
          d="flex"
          justifyContent={'space-between'}
        >
          <Box w={{ base: '100%', lg: '40%' }}>
            <Image src={'./images/meletao.png'} />
            <Text color="white" fontSize={24} mt={6}>
              A Collection of Specially Selected Video Messages by Bishop Isaac
              Oti-Boateng That Will Transform Your Life and Ministry
            </Text>
            <Flex mt={12}>
              <SolidButton
                title="Get Yours Now"
                color="base.blue"
                py={6}
                mr={12}
                onClick={() => onOpen()}
              />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default HeroDesktop
