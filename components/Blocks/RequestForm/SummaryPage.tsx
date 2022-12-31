import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { IFields } from '.'

const SummaryPage: FC<{ fields: IFields; orderPlaced: boolean }> = ({
  fields,
  orderPlaced
}) => {
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
            <Grid templateColumns="repeat(2, 1fr)" color="base.blue">
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
                  <Text>Additional Phon Number</Text>
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
            <Flex flexWrap={'wrap'}>
              {fields.videos.map(item => (
                <Flex
                  mb={4}
                  key={item}
                  rounded={'full'}
                  bg="base.blue"
                  color={'white'}
                  py={2}
                  px={6}
                  mr={4}
                  maxW={72}
                >
                  {item}
                </Flex>
              ))}
            </Flex>
          </>
        ) : (
          <Flex
            h="100%"
            w="100%"
            align={'center'}
            color="base.blue"
            justify={'center'}
          >
            <Text fontWeight={700} fontSize={32}>
              {' '}
              Your Pre - order has been recorded
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  )
}

export default SummaryPage
