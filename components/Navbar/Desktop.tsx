/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'
import NextLink from 'next/link'
import { Box, Container, Flex, Link, Image } from '@chakra-ui/react'
import LineButton from '@components/Buttons/LineButton'

interface ILink {
  name: string
  path: string
  weight?: string
  width?: number
  height?: number
  children?: { name: string; path: string }[]
}

interface IProps {
  links: ILink[]
  onOpen: () => void
}

const DesktopNavbar: FC<IProps> = ({ links, onOpen }) => {
  return (
    <Flex
      h={32}
      top={0}
      as="nav"
      w="full"
      zIndex={10}
      pos="absolute"
      align="center"
      p={0}
      bgColor={'transparent'}
      d={{ base: 'none', lg: 'flex' }}
    >
      <Container
        d="flex"
        minW={'100%'}
        justifyContent="space-between"
        px={{ base: 4, '2xl': 28 }}
      >
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Image src="/images/logo.png" h={12} />
          </Link>
        </NextLink>

        <Box h="100%" w={40}>
          <LineButton title="Pre-order" onClick={() => onOpen()} />
        </Box>
      </Container>
    </Flex>
  )
}

export default DesktopNavbar
