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
      <section sx={{ varaint: 'section.services', ...styles.servicesContainer}} id="services">
        {data.map(dataItem => (
          <Box key={dataItem.id} sx={styles.servicesSubContainer}>
            <Image src={dataItem.imgSrc} alt={dataItem.altText} sx={styles.serviceImg} />
            <h2>{dataItem.title}</h2>
            <p sx={styles.service}>
              {dataItem.text}
            </p>
          </Box>
        ))}
      </section>
    );
  }
  