import { FC } from 'react'
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Flex,
  Icon,
  Image,
  Input
} from '@chakra-ui/react'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { RiLinkedinFill, RiFacebookFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import SolidButton from '@components/Buttons/SolidButton'
const Footer: FC = () => {
  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }
  return (
    <Box w="full" py={{ base: 0, xl: 5 }} bgColor="base.black">
      <Container
        color="white"
        textAlign="center"
        fontSize={{ base: 'sm', xl: 'md' }}
        minW={{ base: '4xl', lg: '7xl', '4xl': '8xl' }}
        py={{ base: 4, lg: 0 }}
      >
        <Grid
          mb={{ base: 0, lg: 12 }}
          mt={4}
          templateColumns="repeat(3,1fr)"
          gap={24}
        >
          <Box as={GridItem}>
            <Text color={'base.yellow'} textAlign="left" fontSize={32}>
              About Cargo Bikes Africa
            </Text>
            <Text
              textAlign={'left'}
              color="base.400"
              fontSize={{ base: 12, lg: 16 }}
            >
              If you are looking for the most cost efficient way to reach the to
              shuttle around the city, you're in the right place. Welcom to
              Cargo Bikes Africa.
            </Text>
            <Flex mt={4}>
              <Flex
                w={6}
                h={6}
                bg="white"
                rounded="md"
                mr={3}
                alignItems="center"
                justify={'center'}
              >
                <Icon as={AiOutlineTwitter} color="black" />
              </Flex>
              <Flex
                w={6}
                h={6}
                bg="white"
                rounded="md"
                mr={3}
                alignItems="center"
                justify={'center'}
              >
                <Icon as={RiLinkedinFill} color="black" />
              </Flex>
              <Flex
                w={6}
                h={6}
                bg="white"
                rounded="md"
                mr={3}
                alignItems="center"
                justify={'center'}
              >
                <Icon as={AiOutlineInstagram} color="black" />
              </Flex>
              <Flex
                w={6}
                h={6}
                bg="white"
                rounded="md"
                mr={3}
                alignItems="center"
                justify={'center'}
              >
                <Icon as={RiFacebookFill} color="black" />
              </Flex>
            </Flex>
          </Box>
          <Box as={GridItem}>
            <Text color={'base.yellow'} textAlign="left" fontSize={32}>
              Office in Accra
            </Text>
            <Box>
              <Text textAlign={'left'} fontSize={20}>
                <Text as="span" color="base.yellow">
                  A:{' '}
                </Text>
                Impact Hub Accra F 393/4 Otswe Osu Ako-Adjei +(123) 124-567-8901
              </Text>
              <Text textAlign={'left'} fontSize={20}>
                <Text as="span" color="base.yellow">
                  E:{' '}
                </Text>
                hello@cargo-bikes-africa.com
              </Text>
              <Text textAlign={'left'} fontSize={20}>
                <Text as="span" color="base.yellow">
                  W:{' '}
                </Text>
                www.cargobikesafrica.com
              </Text>
            </Box>
            <Box mt={6} borderBottomWidth={1} borderColor="white">
              <Flex alignItems={'center'}>
                <Icon as={MdEmail} color="white" fontSize={24} />
                <Input
                  placeholder="Enter your e-mail address"
                  fontSize={24}
                  _placeholder={{ color: 'white' }}
                  border={0}
                />
              </Flex>
            </Box>
            <Box w={44}>
              <SolidButton
                color="base.yellow"
                title="Submit"
                w="100%"
                mt={8}
                py={6}
              />
            </Box>
          </Box>
          <Box as={GridItem}>
            <Text color={'base.yellow'} textAlign="left" fontSize={32}>
              Our Locations
            </Text>
            <Box mt={6}>
              <Box>
                <Image src="./images/IMG-H.png" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
