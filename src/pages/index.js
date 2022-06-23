import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import ServiceSection from 'sections/services-offered';
import CoreFeature from 'sections/core-features';
import WorkFlow from 'sections/workflow';
import Blog from 'sections/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Novigo" />
          <Banner />
          <ServiceSection />
          <CoreFeature />
          <WorkFlow />
          <Blog />
        </Layout>
    </ThemeProvider>
  );
}
