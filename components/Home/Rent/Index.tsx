/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Grid, GridItem, Flex } from '@chakra-ui/react'
import Header from '@components/Atom/header'

const Rent: FC = () => {
  const process = [
    {
      name: 'Select your e-bike',
      message:
        'Find your e-bike and accessories, get insured, choose your maintenance and subscription plan.'
    },
    {
      name: 'Get to Know You',
      message:
        'We would like to learn more about your business to ensure that the plan you have selected is the right fit.'
    },
    {
      name: 'Pay your deposit',
      message:
        'We will send you an invoice for you to pay an initial deposit confirming your pre-order and locking in your price.'
    },
    {
      name: 'Get your e-bike',
      message:
        'You can choose to either pickup in store or get your bike delivered. Pre-order today and get your bike within 90 days.'
    }
  ]
  return (
    <Box
      px={{ base: 6, sm: 12, md: 16, lg: 20, '2xl': 28 }}
      pt={32}
      pb={32}
      bg="gray.200"
      bgImage={'./images/bg-1.png'}
      pos={'relative'}
    >
      <Header
        title="Rent or Buy"
        subtext="Here's how you get one"
        styles={{ color: { title: 'base.yellow', subtext: 'white' } }}
      />
      <Grid templateColumns="repeat(12,1fr)" mt={8} pb={6}>
        <Box
          as={GridItem}
          colSpan={{ base: 12, lg: 7 }}
          justifyContent={'center'}
          alignItems="center"
        >
          <Text color="white" fontSize={26} lineHeight={1.4} fontWeight={600}>
            With our e-bikes you can choose how you want to own your bike. You
            can buy it cash outright for a discount, or subscribe to own over a
            selected period of time. If you also want total freedom from the
            hassles of ownership you can also subscribe quarterly to simply use
            the bike
          </Text>
        </Box>
      </Grid>
      <Grid templateColumns="repeat(4,1fr)" mt={8} pb={6} gap={6}>
        {process.map((item, i) => (
          <Box as={GridItem} justifyContent={'center'} alignItems="center">
            <Box p={4}>
              <Flex alignItems={'center'}>
                <Text color="base.yellow" fontSize={76} fontWeight={700} mr={6}>
                  {i + 1}
                </Text>
                <Text
                  fontSize={36}
                  fontWeight={600}
                  textTransform="uppercase"
                  lineHeight={1}
                  color="white"
                >
                  {item.name}
                </Text>
              </Flex>
              <Text
                fontSize={20}
                fontWeight={400}
                lineHeight={1.2}
                color="white"
              >
                {item.message}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default Rent
