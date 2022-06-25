import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import Excersise from 'assets/excersise.png';
import BannerImg from 'assets/banner-thumb.png';
import styles from './styles';

export default function Banner() {
    return (
      <section sx={styles.banner} id="home" style={{background: 'linear-gradient(110deg, #E58C22 60%, #2ABDEC 60%)', marginTop: '8em'}}>
        <Container sx={styles.banner.container}>
          <Box sx={styles.banner.contentBox}>
            <Heading as="h1" varaint="heroPrimary">
              Top Quality Services to Explore
            </Heading>
            <Text as="p" variant="heroSecondary">
                Check out our Website to find Amazing Software Products and deals! If you need Website, Application,
                or Even having Struggles Improving Current Software ? Search no Further Here at Novigo we are here to Serve!
              </Text>
              <Button variant="primary">Explore</Button>
          </Box>
        </Container>
      </section>
    );
  }