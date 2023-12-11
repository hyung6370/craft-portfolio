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
          <p>iOS App Developer / Designer / Traveler</p>
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

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Introduce Myself
        </Heading>
        <Paragraph>
        안녕하세요!😎 현재 대구와 서울에 거주하고 활동하고 있는 주니어 iOS 앱개발자로, 제가 원하는 Services/Product/Project를 만드는 데 열정을 가지고 있습니다. 지속적으로 꾸준히 성장하고 있으며, 네트워킹을 통해 함께 성장하는 개발 문화를 지향하며, 가치 있는 지식을 공유하려고 노력합니다. 더욱이 언제나 사람들이 필요로 하는 것에 대해서 늘 고민하며, 끊임없는 도전의 자세를 유지합니다. 또한 숙련된 개발자가 되기 이전에 좋은 개발자로 성장하기 위해 끊임없이 노력하고 있습니다.
          
        </Paragraph>
        <br />
        <Paragraph>iOS 개발자로서, Swift와 같은 고급 프로그래밍 언어를 사용하여 유지보수 및 확장성에서 성능을 향상시키기 위해 지속적으로 공부하고 노력하고 있습니다.</Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Portfolio
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
            UIKit을 사용한 코드 베이스 UI 구현을 즐기며, 현재는 MVVM, RxSwift, Clean Architecture, TDD를 활용하여
            사용자 친화적인 UI/UX를 구현하기 위해 꾸준히 공부하고 있습니다.
        </BioSection>

        <BioSection>
          <BioYear>Python / C++</BioYear>
          효율적인 알고리즘을 구현하기 위해 꾸준히 공부하고 있습니다.
        </BioSection>

        <BioSection>
          <BioYear>JavaScript</BioYear>
          NextJS, ReactJS를 활용해 간단한 웹사이트를 제작할 수 있습니다.
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