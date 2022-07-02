import { FC } from 'react'
import NextLink from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  Box,
  Text,
  Flex,
  Link,
  Fade,
  Image,
  Divider,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'

interface IProps {
  links: {
    name: string
    path: string
    weight?: string
    children: { name: string; path: string; weight?: string }[]
  }[]
}

const MobileNavbar: FC<IProps> = ({ links }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex
      h={24}
      px={{ base: 8, xl: 2 }}
      bgColor={'base.600'}
      as="nav"
      w="full"
      shadow="sm"
      pos="fixed"
      zIndex={100}
      align="center"
      justify="space-between"
      d={{ base: 'flex', xl: 'none' }}
      color={'white'}
    >
      <Box>
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Image src="/images/logo.png" h={16} />
          </Link>
        </NextLink>
      </Box>

      <Box>
        <IconButton
          aria-label="toggle menu"
          onClick={() => onToggle()}
          icon={isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          bg="transparent"
          role="button"
        />
        <Box pos="relative">
          <Fade in={isOpen}>
            {isOpen && (
              <Box
                w={72}
                right={4}
                shadow="lg"
                zIndex={10}
                rounded="md"
                pos="absolute"
                bgColor="white"
                color="base.600"
              >
                <Box py={2}>
                  {links.map((m, idx) => (
                    <Box>
                      {m.children ? (
                        m.children.map(n => (
                          <>
                            <NextLink key={idx} href={n.path} passHref>
                              <Link>
                                <Flex justify="start" pl={5} py={3}>
                                  <Text fontWeight={700}>{n.name}</Text>
                                </Flex>
                              </Link>
                            </NextLink>
                            <Divider />
                          </>
                        ))
                      ) : (
                        <>
                          <NextLink key={idx} href={m.path} passHref>
                            <Link>
                              <Flex justify="start" pl={5} py={3}>
                                <Text fontWeight={700}>{m.name}</Text>
                              </Flex>
                            </Link>
                          </NextLink>
                          <Divider />
                        </>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Fade>
        </Box>
      </Box>
    </Flex>
  )
}

export default MobileNavbar
