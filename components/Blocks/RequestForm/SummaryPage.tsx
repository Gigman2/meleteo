import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { IFields } from '.'

const SummaryPage: FC<{ fields: IFields; orderPlaced: boolean }> = ({
  fields,
  orderPlaced
}) => {
  const priceTwo = [
    "Shepherds' Camps and Conferences",
    'Pastors Camps and Conferences'
  ]
  return (
    <Box mt={12}>
      <Text fontWeight={600} fontSize={32}>
        {orderPlaced ? 'Pre - Order Success' : 'Summary Page'}
      </Text>

      <Box
        borderWidth={2}
        borderColor="base.blue"
        p={6}
        rounded={'lg'}
        bg="white"
      >
        {!orderPlaced ? (
          <>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
              color="base.blue"
            >
              <Box mb={8}>
                <Text>Your Name</Text>
                <Text fontWeight={600}>{fields.name}</Text>
              </Box>
              <Box mb={8}>
                <Text>Your Email</Text>
                <Text fontWeight={600}>{fields.email}</Text>
              </Box>
              <Box mb={8}>
                <Text>Your Phone Number</Text>
                <Text fontWeight={600}>{fields.phoneNumber}</Text>
              </Box>
              {fields.otherPhone && (
                <Box mb={8}>
                  <Text>Additional Phone Number</Text>
                  <Text fontWeight={600}>{fields.otherPhone}</Text>
                </Box>
              )}
              <Box mb={8}>
                <Text>Your {fields.churchMember ? 'Branch' : 'Church'}</Text>
                <Text fontWeight={600}>
                  {fields.churchMember
                    ? fields.churchBranch
                    : fields.otherChurch}
                </Text>
              </Box>
            </Grid>

            <Grid templateColumns="repeat(1, 1fr)" my={3}>
              <Box>
                <Grid
                  templateColumns="repeat(8, 1fr)"
                  color="base.blue"
                  fontWeight={600}
                >
                  <Box as={GridItem} colSpan={4}>
                    Name
                  </Box>
                  <Box as={GridItem} colSpan={2}>
                    Quantity
                  </Box>
                  <Box as={GridItem} colSpan={2}>
                    Price (GH¢)
                  </Box>
                </Grid>
              </Box>
              {Object.keys(fields.videos)
                .filter(item => fields.videos[item] > 0)
                .map(item => (
                  <Grid
                    templateColumns="repeat(8, 1fr)"
                    color="base.blue"
                    my={1}
                  >
                    <Box as={GridItem} colSpan={4}>
                      {item}
                    </Box>
                    <Box as={GridItem} colSpan={2}>
                      {fields.videos[item]}
                    </Box>
                    <Box as={GridItem} colSpan={2}>
                      {fields.videos[item] *
                        (priceTwo.includes(item) ? 70 : 60)}
                    </Box>
                  </Grid>
                ))}
            </Grid>
            <Text color="base.blue" fontWeight={700} fontSize={32} mt={12}>
              Total GH¢
              {Object.keys(fields.videos).reduce(
                (a, b) =>
                  a + fields.videos[b] * (priceTwo.includes(b) ? 70 : 60),
                0
              )}
            </Text>
            <Flex color={'base.blue'} wrap="wrap">
              <Text>Make the payment to mobile money number </Text>
              <Text fontWeight={700}>&nbsp;0209098331&nbsp;</Text>
              <Text>name</Text>
              <Text fontWeight={700} minW={24}>
                &nbsp;Gbekor Princess&nbsp;
              </Text>
              <Text>use</Text>
              <Text fontWeight={700}>&nbsp;Meletao&nbsp;</Text>
              <Text>as reference</Text>
            </Flex>
            <Flex color={'base.blue'}>
              <Text fontWeight={600}>This will complete your pre-order</Text>
            </Flex>
          </>
        ) : (
          <Flex
            h="100%"
            w="100%"
            align={'center'}
            color="base.blue"
            justify={'center'}
            direction="column"
          >
            <Text fontWeight={700} fontSize={32}>
              Your Pre - order has been recorded
            </Text>
            <Text fontWeight={700} fontSize={32}>
              Kindly make payment to complete your order
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  )
}

export default SummaryPage
