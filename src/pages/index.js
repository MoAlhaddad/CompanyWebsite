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

export default function IndexPage() {
  const contactUsRef = useRef();
  return (
    <ThemeProvider theme={theme}>
        <Layout contactUsRef={contactUsRef}>
          <SEO title="Novigo" />
          <Banner />
          <ServiceSection />
          <CoreFeature />
          <WorkFlow />
          <Blog />
          <ContactUs ref={contactUsRef} />
        </Layout>
    </ThemeProvider>
  );
}
