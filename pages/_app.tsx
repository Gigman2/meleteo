import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import '../styles/globals.css'
import '../public/fonts/fonts.css'

import DesktopNavbar from '@components/Navbar/Desktop'
import MobileNavbar from '@components/Navbar/Mobile'

import { theme } from 'theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const noNavPages: string[] = []

  const showNav = !noNavPages.includes(router.pathname)

  interface Ilinks {
    name: string
    path: string
    width?: number
    height?: number
    children?: { name: string; path: string }[]
  }
  const links: Ilinks[] = [
    { name: 'About Us', path: '/' },
    { name: 'Ebikes', path: '/ebikes' },
    { name: 'Business', path: '/business' },
    { name: 'Entrepreneurs Us', path: '/entrepreneur' },
    { name: 'Impact', path: '/impact' },
    { name: 'Press', path: '/press' },
    { name: 'Contact', path: '/contact-us' }
  ]

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.pathname}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1,
              transition: { duration: 0.5 }
            }
          }}
        >
          <Box bgColor="white" pos="relative" overflow="hidden">
            {showNav && (
              <>
                <DesktopNavbar links={links} />
                <MobileNavbar links={links} />
              </>
            )}

            <Component {...pageProps} />
          </Box>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
