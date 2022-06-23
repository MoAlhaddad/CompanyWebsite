/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';

import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';
import styles from './styles';
import data from './data';


export default function CoreFeature() {
  return (
   <section sx={{variant: 'section.coreFeature'}}>
    <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
        <h1>Providing solutions to keep our customers happy.</h1>
      </Box>
      <Box sx={styles.thumbnail}>
        <Image src={FeatureThumb} alt="Thumbnail" />
        <Box sx={styles.shapeBox}>
          <Image src={shapePattern} alt="Shape"/>
        </Box>
      </Box>
    </Container>
   </section>
  );
}

