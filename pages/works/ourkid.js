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
    <Layout title="Our Kid">
      <Container>
        <Title>
          우리아이의 유치원 <Badge>2023</Badge>
        </Title>
        <P>
        ✨ 서울시 내 모든 유치원 위생 환경을 색깔로 한 눈에 확인할 수 있는 앱 서비스 입니다.
        <br />
        </P>
        <br />
        
        <WorkImage src="/images/works/ourkid.png" alt="ourkid" />
        <br />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/hyung6370/cleanKinder-app">
            https://github.com/hyung6370/cleanKinder-app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Project</Meta>
            <span>Team Project</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS / Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Swift, UIKit, CocoaPods, Google Maps API, Lottie, MVC</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://emptyhead.oopy.io/969024c0-06d2-4d07-9911-24e2c6601c91">
            블로그 정리글 / The production process of this project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>App Store</Meta>
            <Link href="https://apps.apple.com/kr/app/%EC%9A%B0%EB%A6%AC%EC%95%84%EC%9D%B4%EC%9D%98-%EC%9C%A0%EC%B9%98%EC%9B%90/id6467133685">
            우리아이의 유치원 앱스토어 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <WorkImage src="/images/works/ourkid_1.png" alt="ourkid" />
        <WorkImage src="/images/works/ourkid_2.png" alt="ourkid" />
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'