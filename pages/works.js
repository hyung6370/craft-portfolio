import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbAskme from '../public/images/works/askme.png'
import thumbKid from '../public/images/works/kid.png'
import thumbGoal from '../public/images/works/goalforyou.png'
import thumbAl from '../public/images/works/foral.png'
import thumbNanez from '../public/images/works/nanez.png'
import thumbLipsync from '../public/images/works/lipsync.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Toy Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="askme" title="Ask me" thumbnail={thumbAskme}>
          A service that allows you to solve your queries through conversation with AI.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ourkid"
            title="우리아이의 유치원"
            thumbnail={thumbKid}
          >
            A service that allows you to quickly check the hygiene environment of all kindergartens in Seoul through colors.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="goalforyou"
            title="Goal for you"
            thumbnail={thumbGoal}
          >
            Goal For You, a service that helps you achieve your desired goals.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="foral" thumbnail={thumbAl} title="For alcoholics">
          An alcohol addiction self-diagnosis test.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="nanez" thumbnail={thumbNanez} title="Na'nez">
          An app service that offers a solution to improve the inconvenient process of choosing perfumes.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="lipsync" thumbnail={thumbLipsync} title="AI Lipsync-Recognition">
          Realtime lipsync API that utilizes E2E speech recognition engine.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'