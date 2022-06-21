import { FC } from 'react'
import React from 'react'
import Header from '@components/Atom/header'
import { Box, Text, Image, Grid, GridItem } from '@chakra-ui/react'

const Thematic: FC = () => {
  return (
    <Box px={{ base: 4, '2xl': 56 }} mt={24}>
      <Header title={'Thematic Areas'} />

      <Box mt={8}>
        <Grid mt={12} templateColumns="repeat(12,1fr)">
          <Box
            as={GridItem}
            colSpan={5}
            d="flex"
            alignItems={'center'}
            justifyContent="center"
          >
            <Image src="./images/Climate Change.png" boxSize={40} />
          </Box>
          <Box as={GridItem} colSpan={7}>
            <Text color={'base.400'} fontSize={40} fontWeight="bold">
              Climate Change
            </Text>
            <Text
              color={'base.600'}
              fontSize={20}
              lineHeight={1.4}
              fontWeight={450}
            >
              In our effort to promote Ghana’s climate change mitigation and
              adaptation strategies, we've launched, coordinated, and partnered
              with industry stakeholders to reinforce existing efforts of young
              people in the climate space through initiatives such as
              Trees4Diversity, Youth Climate Council Ghana, Local Conference of
              Youth Ghana, and Water for Climate Adaptation.
            </Text>
          </Box>
        </Grid>
        <Grid mt={12} templateColumns="repeat(12,1fr)">
          <Box
            as={GridItem}
            colSpan={5}
            d="flex"
            alignItems={'center'}
            justifyContent="center"
          >
            <Image src="./images/Circular Economy.png" boxSize={40} />
          </Box>
          <Box as={GridItem} colSpan={7}>
            <Text color={'base.400'} fontSize={40} fontWeight="bold">
              Circular Economy
            </Text>
            <Text
              color={'base.600'}
              fontSize={20}
              lineHeight={1.4}
              fontWeight={450}
            >
              We've helped formalized the informal waste sector, conducted
              climate change simulation exercises designed by MIT for different
              stakeholders, engaged over 7,000 youth in climate change
              knowledge, as well as hosted the Africa Clean Up Conference in
              Ghana.
            </Text>
          </Box>
        </Grid>
        <Grid mt={12} templateColumns="repeat(12,1fr)">
          <Box
            as={GridItem}
            colSpan={5}
            d="flex"
            alignItems={'center'}
            justifyContent="center"
          >
            <Image src="./images/Disaster Risk Management.png" boxSize={40} />
          </Box>
          <Box as={GridItem} colSpan={7}>
            <Text color={'base.400'} fontSize={40} fontWeight="bold">
              Disaster Risk Reduction
            </Text>
            <Text
              color={'base.600'}
              fontSize={20}
              lineHeight={1.4}
              fontWeight={450}
            >
              GAYO has hosted DRR workshops, and national quizzes with the
              national disaster management office and UN agencies to educate
              youth (over 4000 students) on climate change and disaster risk
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Thematic
