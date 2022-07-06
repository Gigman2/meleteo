/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Grid, Image } from '@chakra-ui/react'

const Blogs: FC = () => {
  const posts = [
    {
      date: 'June 25, 2022',
      cover: './images/IMG-E.png',
      message: 'Building sustainable African cities'
    },
    {
      date: 'June 25, 2022',
      cover: './images/IMG-F.png',
      message: 'Grow Your Green Fleet '
    },
    {
      date: 'June 25, 2022',
      cover: './images/IMG-G.png',
      message: 'Become a cargo bikes entrepreneur'
    }
  ]
  return (
    <Box
      px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 28 }}
      pt={8}
      pb={8}
      bg="white "
      pos={'relative'}
    >
      <Grid templateColumns="repeat(3,1fr)" mt={8} pb={6} gap={6}>
        {posts.map(item => (
          <Box key={item.cover} p={6} pos="relative">
            <Box>
              <Image src={item.cover} />
            </Box>
            <Box pos={'absolute'} top={0} mt={12} ml={6} color="white">
              <Text>{item.date}</Text>
              <Text fontSize={20}>{item.message}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default Blogs
