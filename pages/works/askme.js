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
          Ask me <Badge>2023-</Badge>
        </Title>
        <P>
        ✨ AI와 &apos;말&apos;로 소통하여 궁금한 점을 해결할 수 있는 서비스
        <br />

        </P>
        <br />
        <WorkImage src="/images/works/askme.png" alt="askme" />
        <br />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/hyung6370/ask-me-app">
            https://github.com/hyung6370/ask-me-app <ExternalLinkIcon mx="2px" />
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
            <span>Swift, UIKit, CocoaPods, Firebase, Google STT API, OpenAI API, Alamofire, MVC</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://emptyhead.oopy.io/d30d10fa-90ff-4088-a8f2-5691575f65a1">
            블로그 정리글 / The production process of this project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <WorkImage src="/images/works/askme_1.png" alt="askme" />
        <WorkImage src="/images/works/askme_2.png" alt="askme" />
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'