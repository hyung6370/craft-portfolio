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
    <Layout title="For alcoholics">
      <Container>
        <Title>
        For alcoholics <Badge>2023-</Badge>
        </Title>
        <P>
        ✨ 알코올 중독 자가진단 테스트 앱 서비스 입니다.
        <br />

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/hyung6370/cleanKinder-app">
            https://github.com/hyung6370/cleanKinder-app <ExternalLinkIcon mx="2px" />
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
            <span>Swift, UIKit, MVC</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://emptyhead.oopy.io/eff166b1-b7fc-43b9-bfcd-a01eb1026a8c">
            블로그 정리글 / The production process of this project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>App Store</Meta>
            <Link href="https://apps.apple.com/kr/app/for-alcoholics/id6466976459">
            For Alcoholics 앱스토어 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <br />
        <WorkImage src="/images/works/foral_1.png" alt="foral" />
        <WorkImage src="/images/works/foral_2.png" alt="foral" />
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'