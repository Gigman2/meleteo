import { FC, Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Container, Flex, Link, Image, Text } from '@chakra-ui/react'
import useHover from 'hooks/useHover'

interface ILink {
  name: string
  path: string
  weight?: string
  width?: number
  height?: number
  children?: { name: string; path: string }[]
}
const NavbarLink: FC<{ item: ILink }> = ({ item }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()
  const router = useRouter()
  return (
    <Box ref={hoverRef} d="flex" alignItems="center" h="100%">
      <NextLink href={item.path} passHref>
        <Link
          fontWeight={700}
          fontSize={{ base: 'sm', xl: 'md' }}
          _hover={{ color: '#a7cf3e' }}
          _focus={{ outline: 'none' }}
          rel="noreferrer"
          pos="relative"
          {...{
            color: router.pathname === item.path ? '#a7cf3e' : 'white'
          }}
        >
          {item.name}
          {item?.children && (
            <Box
              py={isHovered ? 2 : 0}
              px={isHovered ? 4 : 0}
              overflow="hidden"
              pos="absolute"
              bg="base.400"
              mt={4}
              w={item.width}
              h={isHovered ? item.height : 0}
            >
              {item?.children.map(link => (
                <NextLink href={item.path + link.path} passHref>
                  <Link color={'white'} _hover={{ color: 'base.600' }}>
                    <Text mb={2}>{link.name}</Text>
                  </Link>
                </NextLink>
              ))}
            </Box>
          )}
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
      h={28}
      top={0}
      as="nav"
      w="full"
      zIndex={10}
      pos="relative"
      align="center"
      p={0}
      bgColor={'base.600'}
      d={{ base: 'none', xl: 'flex' }}
    >
      <Container d="flex" minW={'100%'} px={{ base: 4, '2xl': 28 }}>
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Image src="/images/logo.png" h={16} />
          </Link>
        </NextLink>

        <Box ml={24}>
          <Flex align="center" h={'100%'}>
            {links.map((item, idx) => (
              <Fragment key={item.name}>
                <NavbarLink item={item} />
                {links.length !== idx + 1 && <Box mx={12} />}
              </Fragment>
            ))}
          </Flex>
        </Box>
      </Container>
      <Box opacity={'20%'} h="100%" w={40} pos="absolute" right={0}>
        <Image src={'/images/GAYO-flat.png'} w="100%" />
      </Box>
    </Flex>
  )
}

export default DesktopNavbar
