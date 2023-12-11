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
    <Layout title="Goal for you">
      <Container>
        <Title>
        Goal for you <Badge>2023-</Badge>
        </Title>
        <P>
        ✨ 이루고 싶은 목표를 달성하도록 도와주는 서비스 입니다.
        <br />
        </P>
        <br />
        
        <WorkImage src="/images/works/goalforyou.png" alt="goalforyou" />
        <br />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/hyung6370/goal-for-you-app">
            https://github.com/hyung6370/goal-for-you-app <ExternalLinkIcon mx="2px" />
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
            <span>Swift, UIKit, CocoaPods, Firebase, Lottie, MVC</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://emptyhead.oopy.io/d30d10fa-90ff-4088-a8f2-5691575f65a1">
            블로그 정리글 / The production process of this project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <WorkImage src="/images/works/goalforyou_1.png" alt="goalforyou" />
        <WorkImage src="/images/works/goalforyou_2.png" alt="goalforyou" />
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'