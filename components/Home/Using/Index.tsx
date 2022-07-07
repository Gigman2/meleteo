/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react'

const Using: FC = () => {
  const logos = [
    './images/Jumia-logo.png',
    './images/shaq-express.png',
    './images/Jumia-logo.png',
    './images/shaq-express.png',
    './images/Jumia-logo.png'
  ]
  return (
    <Box
      px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 28 }}
      pt={12}
      pb={12}
      bg="base.yellow"
      pos={'relative'}
    >
      <Text
        fontWeight={600}
        fontSize={52}
        textTransform="uppercase"
        color="base.black"
      >
        Who's already using our e-bikes?
      </Text>
      <Grid templateColumns="repeat(5,1fr)" mt={8} pb={6} gap={6}>
        {logos.map((item, i) => (
          <Box
            k={item + i}
            p={6}
            as={GridItem}
            justifyContent={'center'}
            alignItems="center"
            style={{ filter: 'grayscale(100%)' }}
          >
            <Image src={item} />
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default Using
