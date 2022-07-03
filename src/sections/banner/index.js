import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import Excersise from "assets/excersise.png";
import BannerImg from "assets/banner-thumb.png";
import styles from "./styles";
import ContactUs from "sections/contact-us/index";
import IndexPage from "pages/index";
import React, { useState, useEffect } from "react";


export default function Banner({ className, contactUsRef }) {
  // const ScrollButton = () =>{

  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  // window.addEventListener('scroll', toggleVisible);
  // const contactUsReff = useRef();
  return (
    <section
      sx={styles.banner}
      id="home"
      style={{
        background: "linear-gradient(110deg, #E58C22 60%, #2ABDEC 60%)",
        marginTop: "8em",
      }}
    >
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" varaint="heroPrimary">
            Top Quality Services to Explore
          </Heading>
          <Text as="p" variant="heroSecondary">
            Check out our Website to find Amazing Software Products and deals!
            If you need Website, Application, or Even having Struggles Improving
            Current Software ? Search no Further Here at Novigo we are here to
            Serve!
          </Text>
           
          
            <button sx={styles.banner.button} style={{backgroundColor: "rgb(0, 128, 0)",
        marginTop: "8em", color: 'white',
        cursor: 'pointer',
        hover: 'blue',
        border: '1px solid rgba(34,36,38,.15)',
     }} onClick={scrollToBottom} >
              Contact Us
            </button>
  
        </Box>
      </Container>
    </section>
  );
}
