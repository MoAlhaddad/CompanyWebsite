/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/footer';


export default function Layout({ children, contactUsRef }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  
  const headerProps={
    contactUsRef,
    className: `${isSticky ? 'sticky' : 'unSticky'}`
  }
  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header {...headerProps} />
      </Sticky>
      <main id="content" sx={{ variant: 'layout.main', }} >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
