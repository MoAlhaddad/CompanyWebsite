import React, { useState } from 'react';

import { Container, Box, Grid, Text, Heading, Button, Image,  } from 'theme-ui';
import styles from './styles';
import data from './data';

import ServiceThumb from 'assets/service-thumb.png';

export default function ServiceSection() {
    const handleClick = (e) => {
      e.preventDefault();
  
      // setVideoOpen(true);
    }
  
    return (
      <section sx={{ varaint: 'section.services'}}>
        <Container sx={styles.containerBox}>
          <Box sx={styles.thumbnail}>
            <Image src={ServiceThumb} alt="Thumbnail" />
            <Button
              sx={styles.videoBtn}
              onClick={handleClick}
              aria-label="Play Button"
              >
              </Button>
          </Box>
        </Container>
      </section>
    );
  }
  