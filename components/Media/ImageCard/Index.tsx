import { FC } from 'react'
import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'

const ImagesCard: FC = () => {
  return (
    <Box mt={24} px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 56 }} py={6}>
      <Grid templateColumns={{ base: '100%', lg: 'repeat(24,1fr)' }} gap={12}>
        <GridItem colSpan={{ base: 1, lg: 11 }}>
          <Box p={4} w="100%" minH={52} bg="#5ebb8c" mb={12}></Box>
          <Box p={4} w="100%" minH={52} bg="#5ebb8c"></Box>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 13 }}>
          <Box
            p={4}
            w="100%"
            minH={{ base: 52, lg: '100%' }}
            bg="#5ebb8c"
          ></Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default ImagesCard
