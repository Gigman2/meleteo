import { FC } from 'react'
import React from 'react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import Header from '@components/Atom/header'

const GetInTouch: FC = () => {
  return (
    <Box mt={8} px={{ base: 4, '2xl': 32 }}>
      <Header title={'Get In Touch'} />
      <Text fontSize={24} color="base.600" fontWeight={450} mt={6}>
        You can reach us through any of the contacts below.
      </Text>

      <Grid my={16} templateColumns="repeat(3,1fr)" gap={12}>
        <Box as={GridItem}>
          <Text color={'base.400'} fontSize={32} fontWeight={600}>
            Address
          </Text>
          <Text color={'base.600'} fontSize={20} fontWeight={500}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            iure veniam nam beatae quidem placeat. Provident totam id voluptatum
            ad.
          </Text>
        </Box>
        <Box as={GridItem}>
          <Text color={'base.400'} fontSize={32} fontWeight={600}>
            Phone Number
          </Text>
          <Text color={'base.600'} fontSize={20} fontWeight={500}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            iure veniam nam beatae quidem placeat. Provident totam id voluptatum
            ad.
          </Text>
        </Box>
        <Box as={GridItem}>
          <Text color={'base.400'} fontSize={32} fontWeight={600}>
            Mail
          </Text>
          <Text color={'base.600'} fontSize={20} fontWeight={500}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            iure veniam nam beatae quidem placeat. Provident totam id voluptatum
            ad.
          </Text>
        </Box>
      </Grid>
    </Box>
  )
}

export default GetInTouch
