/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Grid, GridItem, Flex, Image } from '@chakra-ui/react'
import Header from '@components/Atom/header'
import SolidButton from '@components/Buttons/SolidButton'

const Benefits: FC = () => {
  return (
    <Box
      px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 28 }}
      pt={32}
      pb={32}
      bg="gray.200"
      pos={'relative'}
    >
      <Header title="Benefits" subtext="Why An E-Bike ?" />
      <Grid templateColumns="repeat(12,1fr)" mt={8} pb={6}>
        <Box
          as={GridItem}
          colSpan={{ base: 12, lg: 5 }}
          justifyContent={'center'}
          alignItems="center"
        >
          <Text
            color="base.600"
            fontSize={26}
            lineHeight={1.4}
            fontWeight={600}
          >
            The future of mobility is here. With our e-bikes, you can make
            deliveries, commute and go on adventures -- all cheaper, more
            reliable and better for the environment than ever before!
          </Text>
          <SolidButton color="base.yellow" title="Read More" mt={8} py={7} />
        </Box>
      </Grid>
      <Box mt={80} px={28} pb={12} h={12}>
        <Flex justify={'space-between'}>
          <Box>
            <Box w={24} h={24} bg="base.yellow" rounded={'full'}></Box>
            <Text fontWeight={600} fontSize={24} mt={6} color="gray.600">
              No license
            </Text>
          </Box>
          <Box>
            <Box w={24} h={24} bg="base.yellow" rounded={'full'}></Box>
            <Text fontWeight={600} fontSize={24} mt={6} color="gray.600">
              No license
            </Text>
          </Box>
          <Box>
            <Box w={24} h={24} bg="base.yellow" rounded={'full'}></Box>
            <Text fontWeight={600} fontSize={24} mt={6} color="gray.600">
              No license
            </Text>
          </Box>
          <Box>
            <Box w={24} h={24} bg="base.yellow" rounded={'full'}></Box>
            <Text fontWeight={600} fontSize={24} mt={6} color="gray.600">
              No license
            </Text>
          </Box>
          <Box>
            <Box w={24} h={24} bg="base.yellow" rounded={'full'}></Box>
            <Text fontWeight={600} fontSize={24} mt={6} color="gray.600">
              No license
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box pos={'absolute'} top={0} right={0} w="50%" mt={40}>
        <Image src="./images/bike.png" />
      </Box>
    </Box>
  )
}

export default Benefits
