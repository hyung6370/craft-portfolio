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
    <Layout title="Ask me">
      <Container>
        <Title>
          Busanz <Badge>2024-</Badge>
        </Title>
        <P>
        ✨ 부산의 맛집을 소개하는 앱 서비스
        <br />

        </P>
        <br />
        <WorkImage src="/images/works/busanz.png" alt="busanz" />
        <br />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/hyung6370/Busanz-SwiftUI">
            https://github.com/hyung6370/Busanz-SwiftUI <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Project</Meta>
            <span>Private Project</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Swift, SwiftUI, CocoaPods, Combine, Naver Maps API, Open API, Alamofire, MVVM, Lottie</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://emptyhead.oopy.io/459a11ca-04b0-491b-abc8-5c582a1240e1">
            블로그 정리글 / The production process of this project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <WorkImage src="/images/works/busanz_1.png" alt="busanz" />
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'