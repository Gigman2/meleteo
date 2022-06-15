import { FC, Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Container, Flex, Button, Link, Image } from '@chakra-ui/react'

interface IProps {
  links: { name: string; path: string; weight?: string }[]
}

const DesktopNavbar: FC<IProps> = ({ links }) => {
  const router = useRouter()

  return (
    <Flex
      h={28}
      top={0}
      as="nav"
      w="full"
      zIndex={10}
      pos="relative"
      align="center"
      bgColor={'base.600'}
      d={{ base: 'none', xl: 'flex' }}
      overflowY="hidden"
    >
      <Container d="flex" minW={{ lg: '7xl', '4xl': '8xl' }}>
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Image src="/images/logo.png" h={16} />
          </Link>
        </NextLink>

        <Box ml={24}>
          <Flex align="center" h={'100%'}>
            {links.map((item, idx) => (
              <Fragment key={item.name}>
                <NextLink href={item.path} passHref>
                  <Link
                    fontWeight={700}
                    fontSize={{ base: 'sm', xl: 'md' }}
                    _hover={{ hover: 'none' }}
                    _focus={{ outline: 'none' }}
                    rel="noreferrer"
                    opacity={'70%'}
                    {...{
                      color: router.pathname === item.path ? '#a7cf3e' : 'white'
                    }}
                  >
                    {item.name}
                  </Link>
                </NextLink>
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
