/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import Header from '@components/Atom/header'
import Role from './Role'

const Roles: FC = () => {
  return (
    <Box px={{ base: 4, '2xl': 56 }} mt={24} mb={12}>
      <Header title="Available roles" />
      <Grid templateColumns="repeat(12,1fr)" mt={8} pb={6} gap={12}>
        <Box
          as={GridItem}
          colSpan={4}
          bg="white"
          justifyContent={'center'}
          alignItems="center"
        >
          <Role
            title="Graphic Design"
            description="Nullam tincidunt nec neque vel imperdii
neque ultrices suscipit condimentum eu"
          />
        </Box>
        <Box
          as={GridItem}
          colSpan={4}
          bg="white"
          justifyContent={'center'}
          alignItems="center"
        >
          <Role
            title="Media Communication"
            description="Nullam tincidunt nec neque vel imperdii
neque ultrices suscipit condimentum eu"
          />
        </Box>
        <Box
          as={GridItem}
          colSpan={4}
          bg="white"
          justifyContent={'center'}
          alignItems="center"
        >
          <Role
            title="Public Relations"
            description="Nullam tincidunt nec neque vel imperdii
neque ultrices suscipit condimentum eu"
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default Roles
