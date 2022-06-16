import { FC } from 'react'
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Icon,
  Image
} from '@chakra-ui/react'
import { BsArrowUp } from 'react-icons/bs'

const Footer: FC = () => {
  return (
    <Box w="full" py={{ xl: 5 }} bgColor="base.600">
      <Container
        color="gray.900"
        textAlign="center"
        fontSize={{ base: 'sm', xl: 'md' }}
        minW={{ lg: '7xl', '4xl': '8xl' }}
      >
        <Box mt={6}>
          <Image src="./images/logo.png" h={24} mb={6} />
        </Box>
        <Grid mb={12} mt={4} templateColumns="repeat(12,1fr)" gap={24}>
          <Box as={GridItem} colSpan={6}>
            <Text textAlign={'left'} color="base.400" fontSize={14}>
              GAYO is a registered NGO(registration number 305992) and a company
              limited, and registered in Ghana (registered number 883234).
            </Text>
            <Text
              textAlign={'left'}
              color="whiteAlpha.700"
              fontSize={14}
              mt={8}
            >
              {' '}
              &copy; GAYO. All Rights Reserved
            </Text>
          </Box>
          <Box as={GridItem} colSpan={1}></Box>
          <Box as={GridItem} colSpan={5}>
            <Box d="flex" justifyContent={'space-between'}>
              <Box w={'55%'}>
                <Text textAlign={'left'} color="base.400" fontSize={14}>
                  64 Lumumba Street, Adentan, Accra, Republic of Ghana
                </Text>
              </Box>
              <Box>
                <Icon as={BsArrowUp} color={'base.400'} boxSize={20} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
