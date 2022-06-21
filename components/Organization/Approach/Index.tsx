/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react'
import Header from '@components/Atom/header'

const Approach: FC = () => {
  return (
    <Box px={{ base: 4, '2xl': 56 }} mt={24} mb={12}>
      <Header title="Our Approach" />
      <Grid
        templateColumns="repeat(11,1fr)"
        mt={12}
        pb={6}
        borderBottomWidth={3}
        borderColor="base.400"
      >
        <Box
          as={GridItem}
          colSpan={6}
          bg="white"
          d="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <Text color="base.600" fontSize={24} fontWeight={500}>
            We work directly with local communities to reduce the vulnerability
            of groups that are at risk to climate impacts such as children,
            youth and women who have a comparatively less adaptive capacity due
            to social and structural inequalities.
          </Text>
        </Box>
        <Box
          as={GridItem}
          colSpan={5}
          d="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <Box w={48} h={48}>
            <Image src="./images/impacts/Our Approach B.png" />
          </Box>
        </Box>
      </Grid>
      <Grid templateColumns="repeat(11,1fr)" mt={6} pb={6}>
        <Box
          as={GridItem}
          colSpan={6}
          bg="white"
          d="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <Text color="base.600" fontSize={24} fontWeight={500}>
            We seek to become an extensive organisation that guides individual
            conscious choices in promoting sustainability and reducing the
            vulnerability of communities to natural and socio-economic risks.
          </Text>
        </Box>
        <Box
          as={GridItem}
          colSpan={5}
          d="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <Box w={48} h={48}>
            <Image src="./images/impacts/Our Approach A.png" />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Approach
