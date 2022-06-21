/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import Header from '@components/Atom/header'
import Member from '../Member/Index'

const Team: FC = () => {
  return (
    <Box pos={'relative'}>
      <Box
        pos={'absolute'}
        w="100%"
        h={24}
        bg="base.400"
        bottom={24}
        zIndex={3}
      ></Box>
      <Box pos={"relative"} px={{ base: 4, '2xl': 56 }} mt={24} mb={12} zIndex={4}>
        <Header title="Our Team" />
        <Grid templateColumns="repeat(12,1fr)" mt={8} pb={6}>
          <Box
            as={GridItem}
            colSpan={6}
            bg="white"
            justifyContent={'center'}
            alignItems="center"
          >
            <Text color="base.600" fontSize={24} fontWeight={500}>
              Nullam tincidunt nec neque vel imperdii neque ultrices suscipit
              condimentum eu cipit nibh ut ante accumsan, non vehicul ac laoreet
              arcu. Vestibulum vel dignissim
            </Text>
          </Box>
        </Grid>

        <Grid templateColumns="repeat(12,1fr)" my={8} gap={24}>
          <Box as={GridItem} colSpan={4} bg="white">
            <Member />
          </Box>
          <Box as={GridItem} colSpan={4} bg="white">
            <Member />
          </Box>
          <Box as={GridItem} colSpan={4} bg="white">
            <Member />
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Team
