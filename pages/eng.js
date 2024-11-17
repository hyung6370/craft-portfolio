import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'
import { MdTravelExplore } from "react-icons/md";
import { RiNotionFill } from 'react-icons/ri'
import thumbJeju from '../public/images/travel/jeju/jeju2.png'
import thumbSapporo from '../public/images/travel/sapporo/sapporo8.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie iOS developer based in S.Korea!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            KIM HyungJun
          </Heading>
          <p>iOS App Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="110px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/hj.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="110"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <Paragraph>
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
            >
                rlagudwns886@gmail.com
            </Button>
          
        </Paragraph>

      </Section>

        <br />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Introduce Myself
        </Heading>
        <Paragraph>
          I&apos;m a junior iOS developer based in Daegu/Seoul 
          with a passion for building digital services/stuff he wants.
          I&apos;m continuously growing and strive to foster a development 
          culture that grows together through networking, and I work hard to share 
          valuable knowledge. Moreover, before becoming a skilled developer, 
          I&apos;m constantly striving to grow as a good developer, 
          always pondering what people need, and maintaining an attitude of relentless 
          challenge.
          
        </Paragraph>
        <br />
        <Paragraph>As an iOS developer, I&apos;m continuously studying and striving to enhance performance in maintenance and scalability using high-level programming languages like Swift.</Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <br />
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>2023</BioYear>
          Completed a Bachelor&apos;s degree in Computer Science from the Graduate School at YU.
        </BioSection>
        
      </Section>
        <br />
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My Best Friends ♥
        </Heading>

        <BioSection>
            <BioYear>Swift</BioYear>
            I enjoy implementing code-based UI using UIKit, and I&apos;m currently studying diligently to implement
            user-friendly UX with MVVM, RxSwift and Clean Architecture, TDD.
        </BioSection>

        <BioSection>
          <BioYear>Python / C++</BioYear>
          I&apos;m continuously studying to implement efficient algorithms.
        </BioSection>

        <BioSection>
          <BioYear>JavaScript</BioYear>
          I can create simple websites using nextJS and reactJS.
        </BioSection>
        
      </Section>
        <br />
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, 3D Character, Movie
        </Paragraph>
      </Section>

        <br />

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/hyung6370" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @emptyhead
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/vjzliop/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @vjzliop
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://emptyhead.oopy.io/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<RiNotionFill />}
              >
                ♥ my blog
              </Button>
            </Link>
          </ListItem>
          
        </List>
        <br />
        <Heading as="h3" variant="section-title">
          My Travel
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <GridItem
            href="https://emptyhead.oopy.io/6ee9459f-85be-442c-9cc1-166602fb9f15"
            title="SAPPORO"
            thumbnail={thumbSapporo}
        >
            My first destination on a solo trip
        </GridItem>
        <GridItem
            href="https://emptyhead.oopy.io/9036f34c-6cdd-4f8b-a305-a091014b1f13"
            title="JEJU"
            thumbnail={thumbJeju}
        >
            JEJU, where everything was beautiful
        </GridItem>
        </SimpleGrid>

        <br /><br />

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://emptyhead.oopy.io/2a2f98e5-445b-46a3-88d5-b321aa15220a"
            scroll={false}
            leftIcon={<MdTravelExplore />}
            colorScheme="teal"
          >
            My traveLog!
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'