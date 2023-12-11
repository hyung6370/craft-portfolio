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
        Na&apos;nez <Badge>2023-</Badge>
        </Title>
        <P>
        An app service that offers a solution to improve the inconvenient process of choosing perfumes.
        </P>
        <br />
        <WorkImage src="/images/works/nanez.png" alt="nanez" />
        <br />
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/nanez-dev/nanez-iOS">
            https://github.com/nanez-dev/nanez-iOS <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Project</Meta>
            <span>Team Project</span>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS/AOS/Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>RxSwift, UIKit, SnapKit, Then, Alamofire, Kingfisher, Clean Architecture, MVVM</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://emptyhead.oopy.io/051916ac-d8a3-4d1b-88c4-794e876949d8">
            The production process of this project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          {/* <ListItem>
            <Meta>App Store</Meta>
            <Link href="https://apps.apple.com/kr/app/for-alcoholics/id6466976459">
            For Alcoholics 앱스토어 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
        </List>
  
        <WorkImage src="/images/works/nanez_1.png" alt="nanez" />
        <WorkImage src="/images/works/nanez_2.png" alt="nanez" />
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'