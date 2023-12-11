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
            ✨ AI와 &apos;말&apos;로 소통하여 궁금한 점을 해결할 수 있는 서비스
            <br />
            ✨ A service that allows you to solve your queries through conversation with AI.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="ourkid"
            title="우리아이의 유치원"
            thumbnail={thumbKid}
          >
            ✨ 서울시 내 모든 유치원 위생 환경을 색깔로 한 눈에 확인할 수 있는 앱 서비스 입니다.
            <br />
            ✨ A service that allows you to quickly check the hygiene environment of all kindergartens in Seoul through colors.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="goalforyou"
            title="Goal for you"
            thumbnail={thumbGoal}
          >
            ✨ 이루고 싶은 목표를 달성하도록 도와주는 서비스 입니다.
            <br />
            ✨ Goal For You, a service that helps you achieve your desired goals.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="foral" thumbnail={thumbAl} title="For alcoholics">
          ✨ 알코올 중독 자가진단 테스트 앱 서비스 입니다.
          <br />
          ✨ An alcohol addiction self-diagnosis test.
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
          ✨ 불편한 향수 선택 과정을 개선한 솔루션을 담은 앱 서비스, 나네(Na&apos;nez)
          <br />
          ✨ An app service that offers a solution to improve the inconvenient process of choosing perfumes.
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
          ✨ E2E 음성 인식 엔진을 이용한 실시간 립싱크 서비스 입니다.
          <br />
          ✨ Realtime lipsync API that utilizes E2E speech recognition engine.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'