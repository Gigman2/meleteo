import { FC } from 'react'
import React from 'react'
import { Box, Grid, GridItem } from '@chakra-ui/react'

const ImagesCard: FC = () => {
  return (
    <Box mt={24} px={{ base: 4, '2xl': 56 }} py={6}>
      <Grid templateColumns="repeat(24,1fr)" gap={12}>
        <GridItem colSpan={11}>
          <Box p={4} w="100%" minH={52} bg="#5ebb8c" mb={12}></Box>
          <Box p={4} w="100%" minH={52} bg="#5ebb8c"></Box>
        </GridItem>
        <GridItem colSpan={13}>
          <Box p={4} w="100%" minH={'100%'} bg="#5ebb8c"></Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default ImagesCard
