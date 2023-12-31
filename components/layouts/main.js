import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
// import { Box, Container } from '@chakra-ui/react'
import { Box, Container, Flex } from '@chakra-ui/react'

import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="HJ's homepage" />
        <meta name="author" content="KIM HyungJun" />
        <meta name="author" content="emptyhead" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Takuya Matsuyama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Takuya Matsuyama" />
        <meta name="og:title" content="Takuya Matsuyama" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>KIM HyungJun - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}

        <Flex direction="column" align="center" justify="center" minHeight="30vh">
          <LazyVoxelDog />
        </Flex>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
