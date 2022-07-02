import { FC } from 'react'
import React from 'react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import Post from '../Post/Index'
import MediaSide from './MediaSide/Index'

const MediaContent: FC = () => {
  return (
    <Box my={24} px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 56 }} py={6}>
      <Grid templateColumns={{ base: '100%', lg: 'repeat(24,1fr)' }} gap={12}>
        <GridItem colSpan={{ base: 1, lg: 14 }}>
          <Box d="flex" alignItems={'end'}>
            <Text
              fontSize={32}
              fontWeight={700}
              lineHeight={'24px'}
              color="base.600"
              mr={2}
            >
              Most Recent
            </Text>
            <Box flex={1} h={'1px'} bg="base.600"></Box>
          </Box>
          <Grid mt={12} templateColumns="repeat(2,1fr)" gap={6}>
            <Box as={GridItem} mb={6}>
              <Post />
            </Box>
            <Box as={GridItem}>
              <Post />
            </Box>
            <Box as={GridItem}>
              <Post />
            </Box>
            <Box as={GridItem}>
              <Post />
            </Box>
          </Grid>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 10 }}>
          <MediaSide />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default MediaContent
