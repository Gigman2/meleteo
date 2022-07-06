/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Container, Flex, Link, Image } from '@chakra-ui/react'
import useHover from 'hooks/useHover'
import LineButton from '@components/Buttons/LineButton'

interface ILink {
  name: string
  path: string
  weight?: string
  width?: number
  height?: number
  children?: { name: string; path: string }[]
}
const NavbarLink: FC<{ item: ILink; active: number }> = ({ item, active }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()
  const router = useRouter()
  return (
    <Box ref={hoverRef} d="flex" alignItems="center" h="100%">
      <NextLink href={item.path} passHref>
        <Link
          fontWeight={400}
          fontSize={{ base: 'sm', xl: 'md' }}
          _hover={{ color: 'base.yellow' }}
          _focus={{ outline: 'none' }}
          rel="noreferrer"
          pos="relative"
          {...{
            color: router.pathname === item.path ? 'base.yellow' : 'white'
          }}
        >
          {item.name}
        </Link>
      </NextLink>
    </Box>
  )
}

interface IProps {
  links: ILink[]
}

const DesktopNavbar: FC<IProps> = ({ links }) => {
  return (
    <Flex
      h={32}
      top={0}
      as="nav"
      w="full"
      zIndex={10}
      pos="relative"
      align="center"
      p={0}
      bgColor={'base.black'}
      d={{ base: 'none', xl: 'flex' }}
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

        <Box ml={24}>
          <Flex align="center" h={'100%'}>
            {links.map((item, idx) => (
              <Fragment key={item.name}>
                <NavbarLink item={item} active={1} />
                {links.length !== idx + 1 && <Box mx={4} />}
              </Fragment>
            ))}
          </Flex>
        </Box>

        <Box h="100%" w={40}>
          <LineButton title="Login" />
        </Box>
      </Container>
    </Flex>
  )
}

export default DesktopNavbar
