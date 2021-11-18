import { FC } from 'react'
import { Box, GridItem, Image, Text, Heading } from '@chakra-ui/react'

interface IProps {
  title: string
  text: string
}

const Card: FC<IProps> = ({ title, text }) => {
  return (
    <GridItem
      px={6}
      py={20}
      w={80}
      rounded="xl"
      pos="relative"
      textAlign="left"
      boxShadow="0px 2px 134px 4px rgba(0, 0, 0, 0.06)"
    >
      <Box>
        <Image src="./images/file.png" />
      </Box>
      <Box mt={6}>
        <Heading fontSize="2xl" fontWeight={400} lineHeight="36px">
          {title}
        </Heading>
      </Box>
      <Box mt={4}>
        <Text color="gray.600" fontSize="lg" lineHeight="28px">
          {text}
        </Text>
      </Box>
    </GridItem>
  )
}

export default Card