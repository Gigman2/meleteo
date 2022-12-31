/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Box, Flex, Text, Image, useDisclosure } from '@chakra-ui/react'
import SolidButton from '@components/Buttons/SolidButton'
import RequestForm from '../RequestForm'
const HeroDesktop: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex w="full" h="100vh" bgSize="cover" pos="relative">
      <RequestForm isOpen={isOpen} onClose={onClose} />
      <Box pos="relative">
        <Box>
          <Image src="./images/cover-2.jpg" />
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
          <Box w="40%">
            <Text
              fontSize={80}
              fontWeight={600}
              fontFamily={'Rajdhani'}
              textTransform={'uppercase'}
              color="white"
              lineHeight={1.1}
            >
              Bishop Oti Messages
            </Text>
            <Text color="white" fontSize={24} mt={6}>
              Request for your on the go messages
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
