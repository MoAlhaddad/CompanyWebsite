import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-features';
import ServiceSection from 'sections/services-offered';
import Feature from 'sections/feature';
import CoreFeature from 'sections/core-features';
import WorkFlow from 'sections/workflow';
import Package from 'sections/package';
import TeamSection from 'sections/team-section';
import TestimonialCard from 'sections/testimonials';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Novigo" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          <CoreFeature />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
