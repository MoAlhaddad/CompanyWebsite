/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

import Shopify from 'assets/feature/shopify.png';
import Node from 'assets/key-feature/node.png';
import Support from 'assets/key-feature/support.svg';
import ricon from 'assets/key-feature/ricon.svg';
import wordpress from 'assets/key-feature/wordpress.png';



const data = [
  {
    id: 1,
    imgSrc: Node,
    altText: 'Node JS',
    title: 'Server Side Development',
    text:
      'Orchestrate server-side development that is efficient and able to handle incoming traffic to make your app robust and maintainable',
  },
  {
    id: 2,
    imgSrc: ricon,
    altText: 'React',
    title: 'React Client Side Development',
    text:
      'Our team will build modern Single Page Applications that would improve app performance. implement best practices to ensure your app is maintainable and expandable',
  },
  {
    id: 3,
    imgSrc: Shopify,
    altText: 'Shopify',
    title: 'Shopify ClientSide Development',
    text:
      'Develop interactive and competent e-commerce stores that would drive sales and revenue. We use a variety of plugins to improve Search engine optimization.',
  },
  {
    id: 4,
    imgSrc: wordpress,
    altText: 'WordPress Client',
    title: 'WordPress Client Side development',
    text:
      'Our Team will design and implement aesthetically pleasing websites, implement plugins and themes to boost website sales and user traffic.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.KeyFeature' }} id="feature">
    <Container>
      <SectionHeader
        slogan="What the Function"
        title="Meet our cool features"
      />

      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>

      </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
