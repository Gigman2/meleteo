import { FC } from 'react'
import React from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Blog from '@components/Media/Blog/Index'

const MediaSide: FC = () => {
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleTabsChange = (index: number) => {
    setTabIndex(Number(index))
  }

  return (
    <Box>
      <Tabs isFitted index={tabIndex} onChange={handleTabsChange}>
        <TabList
          bg={'base.400'}
          borderBottomWidth={2}
          borderColor="base.600"
          color="white"
        >
          <Tab
            _selected={{ color: 'white', bg: 'base.600', outline: 'none' }}
            _hover={{ color: tabIndex === 0 ? 'base.400' : 'base.600' }}
          >
            News
          </Tab>
          <Tab
            _selected={{ color: 'white', bg: 'base.600', outline: 'none' }}
            _hover={{ color: tabIndex === 1 ? 'base.400' : 'base.600' }}
          >
            Blogs
          </Tab>
          <Tab
            _selected={{ color: 'white', bg: 'base.600', outline: 'none' }}
            _hover={{ color: tabIndex === 2 ? 'base.400' : 'base.600' }}
          >
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
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default MediaSide
