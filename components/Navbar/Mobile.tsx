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
      </Box>
    </Flex>
  )
}

export default MobileNavbar
