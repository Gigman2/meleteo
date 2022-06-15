import { FC } from 'react'
import React from 'react'
import Header from '@components/Atom/header'
import { Box, Text, Image, Grid, GridItem } from '@chakra-ui/react'

const Thematic: FC = () => {
  return (
    <Box px={{ base: 4, '2xl': 32 }}>
      <Header title={'Thematic Ares'} />

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sunt similique, saepe aspernatur reprehenderit
              doloremque tenetur ipsa repellendus officiis veniam voluptatem hic
              deleniti porro nesciunt reiciendis vero numquam quaerat possimus
              inventore harum nam quae? Voluptas accusamus harum, placeat odio
              minus sint odit eum error qui deleniti, nisi
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sunt similique, saepe aspernatur reprehenderit
              doloremque tenetur ipsa repellendus officiis veniam voluptatem hic
              deleniti porro nesciunt reiciendis vero numquam quaerat possimus
              inventore harum nam quae? Voluptas accusamus harum, placeat odio
              minus sint odit eum error qui deleniti, nisi
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sunt similique, saepe aspernatur reprehenderit
              doloremque tenetur ipsa repellendus officiis veniam voluptatem hic
              deleniti porro nesciunt reiciendis vero numquam quaerat possimus
              inventore harum nam quae? Voluptas accusamus harum, placeat odio
              minus sint odit eum error qui deleniti, nisi
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default Thematic
