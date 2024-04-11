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
    <Layout title="Nanez">
      <Container>
        <Title>
        Glimpse <Badge>2023-</Badge>
        </Title>
        <P>
        이벤트 참가자의 니즈, 소개 기반 네트워킹 & 매칭 플랫폼, Glimpse ✨
        <br />
        </P>
        <br />
        <WorkImage src="/images/works/glimpse.png" alt="glimpse" />
        <br />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://emptyhead.oopy.io/2ebf5807-19e9-4835-b67f-7a2fb2b21d21">
            https://emptyhead.oopy.io/2ebf5807-19e9-4835-b67f-7a2fb2b21d21 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Project</Meta>
            <span>Team Project</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS / AOS / WebApp</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>SwiftUI, TCA, Moya, Combine</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://emptyhead.oopy.io/2ebf5807-19e9-4835-b67f-7a2fb2b21d21">
            블로그 정리글 / The production process of this project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          {/* <ListItem>
            <Meta>App Store</Meta>
            <Link href="https://apps.apple.com/kr/app/for-alcoholics/id6466976459">
            For Alcoholics 앱스토어 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
        </List>
        <br />
        <WorkImage src="/images/works/glimpse_1.png" alt="glimpse" />
        <WorkImage src="/images/works/glimpse_2.png" alt="glimpse" />
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'