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
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'
import { RiNotionFill } from 'react-icons/ri'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
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
          <p>iOS Developer / Designer</p>
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
            w="120px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/hj.jpg"
              alt="Profile image"
              borderRadius="full"
              width="120"
              height="150"
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

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>2023</BioYear>
          Completed a Bachelor&apos;s degree in Computer Science from the Graduate School at YU.
        </BioSection>
        
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My Best Friends ♥
        </Heading>

        <BioSection>
          <BioYear>Swift</BioYear>
          
        </BioSection>

        <BioSection>
          <BioYear>Python</BioYear>
          
        </BioSection>

        <BioSection>
          <BioYear>C++</BioYear>
          
        </BioSection>

        <BioSection>
          <BioYear>Swift</BioYear>
          
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, 3D Character
        </Paragraph>
      </Section>

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

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'