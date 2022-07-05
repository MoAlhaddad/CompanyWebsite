import React, { useRef } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import ServiceSection from 'sections/services-offered';
import CoreFeature from 'sections/core-features';
import WorkFlow from 'sections/workflow';
import Blog from 'sections/blog';
import ContactUs from 'sections/contact-us';
import AboutUs from 'sections/about-us';
import Rates from 'sections/rates';


export default function IndexPage() {
  const contactUsRef = useRef();
 
  
  // const checkout = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null
  return (
    <ThemeProvider theme={theme}>
        <Layout contactUsRef={contactUsRef}>
          <SEO title="Novigo" />
          <Banner contactUsRef={contactUsRef} />
          <ServiceSection />
          <CoreFeature />
          <WorkFlow />
          <AboutUs />
          {/* <ContactUs ref={contactUsRef} /> */}
          {/* <Rates localStorage={localStorage}/> */}
          <Blog />
          <ContactUs ref={contactUsRef} />
          {/* <Rates localStorage={localStorage}/> */}
        </Layout>
    </ThemeProvider>
  );
}
