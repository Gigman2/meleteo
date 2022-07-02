import { FC } from 'react'
import React from 'react'
import Header from '@components/Atom/header'
import { Box, Image } from '@chakra-ui/react'
import Marquee from 'react-marquee-slider'
import times from 'lodash/times'

const Partners: FC = () => {
  return (
    <Box px={{ base: 4, '2xl': 56 }} my={32}>
      <Header title={'Partners'} />

      <Marquee
        velocity={7}
        scatterRandomly={false}
        direction={'rtl'}
        resetAfterTries={100}
        onInit={() => null}
        onFinish={() => null}
      >
        {times(5, Number).map(i => (
          <Box mt={8} key={i + '_partner'}>
            <Image src="./images/Partners.png" />
          </Box>
        ))}
      </Marquee>
    </Box>
  )
}

export default Partners
