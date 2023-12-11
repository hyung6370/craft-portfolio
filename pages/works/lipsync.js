import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Lipsync">
      <Container>
        <Title>
        AI Lipsync-Recognition <Badge>2022-2023</Badge>
        </Title>
        <P>
        ✨ E2E 음성 인식 엔진을 이용한 실시간 립싱크 서비스 입니다.
        <br />
        </P>
        <br />
        <WorkImage src="/images/works/lipsync.png" alt="lipsync" />
        <br />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/PostPlayer/LipSync-Recognition">
            https://github.com/PostPlayer/LipSync-Recognition <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Project</Meta>
            <span>Team Project</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>API</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Pygame, Deep Learning</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://emptyhead.oopy.io/bb12bc1e-1639-4d15-8f1f-b48c4715f824">
            블로그 정리글 / The production process of this project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <WorkImage src="/images/works/lipsync_1.png" alt="lipsync" />
        <WorkImage src="/images/works/lipsync_2.png" alt="lipsync" />
        <WorkImage src="/images/works/lipsync_3.png" alt="lipsync" />
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'