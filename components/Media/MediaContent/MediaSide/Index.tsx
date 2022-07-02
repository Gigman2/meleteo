import { FC } from 'react'
import React from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Blog from '@components/Media/Blog/Index'

const MediaSide: FC = () => {
  return (
    <Box>
      <Tabs isFitted>
        <TabList
          bg={'base.400'}
          borderBottomWidth={2}
          borderColor="base.600"
          color="white"
        >
          <Tab _selected={{ color: 'white', bg: 'base.600', outline: 'none' }}>
            News
          </Tab>
          <Tab _selected={{ color: 'white', bg: 'base.600', outline: 'none' }}>
            Blogs
          </Tab>
          <Tab _selected={{ color: 'white', bg: 'base.600', outline: 'none' }}>
            Webinars
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <Box mt={8}>
              <Blog />
            </Box>
            <Box mt={8}>
              <Blog />
            </Box>
            <Box mt={8}>
              <Blog />
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default MediaSide
