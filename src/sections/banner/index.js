import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import Excersise from "assets/excersise.png";
import BannerImg from "assets/banner-thumb.png";
import styles from "./styles";
import ContactUs from "sections/contact-us/index";
import IndexPage from "pages/index";
import React, { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { FaAlignCenter } from "react-icons/fa";


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
          <Button
            className="donate__btn"
            variant="primary"
            aria-label="Get Started"
            background-color="black"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://docs.google.com/document/d/1mqTM1xI0CkUAct-xiiaFWr9q4ApjsEgPhvrdED_yodU/edit?usp=sharing_eil_se_dm&ts=62c12a61";
            }}
          >
            Check Out Our Rates!
          </Button>
        </Box>
       
        <button sx={styles.banner.button} style={{backgroundColor: "rgb(0, 128, 0)",
        marginTop: "8em", color: 'white',
        cursor: 'pointer',
        hover: 'blue',
        border: '6px solid rgba(34,36,38,.15)',
        padding: '10px'
     }} onClick={scrollToBottom} >
              Contact Us
            </button>
      </Container>
     
    </section>
  );
}
