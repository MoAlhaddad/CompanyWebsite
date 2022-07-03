import React, {useState} from 'react';
import { Container, Box, Grid, Text, Heading, Button, Image, Link} from 'theme-ui';
import styles from './styles';
import data from './data';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutUs(){
    const handleClick = (e) => {
        e.preventDefault();
    
        // setVideoOpen(true);
      }

      return (
        <section sx={{ varaint: 'section.aboutus', ...styles.aboutusContainer}} id="aboutus">
            {/* <Link to='/https://www.linkedin.com/in/ali-alhaddad/' /> */}
          {data.map(dataItem => (
            <Box key={dataItem.id} sx={styles.aboutusSubContainer}>
              <Image src={dataItem.imgSrc} alt={dataItem.altText} sx={styles.aboutusImg} />
              <h2>{dataItem.title}</h2>
              <p sx={styles.aboutus}>
                {dataItem.text}
                <br />
                <FaLinkedin style={{color: '#0077B5', fontSize: '2em'}} onClick={() => window.open(dataItem.href, '_blank')}  />
             
              </p>
             
            </Box>
          ))}
        </section>
      );
}