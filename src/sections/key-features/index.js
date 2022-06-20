import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

import styles from './styles';
import data from './data';


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
