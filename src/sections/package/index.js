import { jsx, Container, Box, Flex } from 'theme-ui';
import React, { useState } from 'react';
import Carousel from 'components/carousel/carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { responsive, styles } from './styles';
import data from './data';

export default function Package() {
  const { monthly, annual } = data;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly
  })

  const handlePricingPlan = (plan) => {
    if(plan === 'annual') {
      setState({
        active: 'annual',
        pricingPlan: annual
      })
    } else {
      setState({
        active: 'monthly',
        pricingPlan: monthly
      })
    }
  }

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing'}}>
      <Container>
        <SectionHeader 
        slogan="Pricing Plan"
        title="Choose your budget"
        />

        <Flex sx={styles.buttonGroup}>
            <Box sx={styles.buttonGroupInner}>
              <button
                className={state.active === 'monthly' ? 'active' : ''}
                type="button"
                aria-label="monthly"
                onClick={() => handlePricingPlan('monthly')}
              >
                    ServerSide Development Service 
              </button>
              <button
                className={state.active === '500$' ? 'active' : ''}
                type="button"
                aria-label="DataBase"
                onClick={() => handlePricingPlan('500$')}>
                  Database Management 
                </button>
            </Box>
           </Flex>
           <Box sx={styles.pricingWrapper} className="pricing__wrapper">
              <Carousel>
                <h1>Slide 1</h1>
                <h1>Slide 2</h1>
                <h1>Slide 3</h1>
                <h1>Slide 4</h1>
              </Carousel>
           </Box>
      </Container>
    </section>
  );
}
