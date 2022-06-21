/** @jsx jsx */
import { jsx, Box, Heading, Text, Button, Link } from 'theme-ui';
import Node from 'assets/key-feature/node.png';
import Shopify from 'assets/feature/shopify.png';
import Support from 'assets/key-feature/support.svg';
import ricon from 'assets/key-feature/ricon.svg';
import wordpress from 'assets/key-feature/wordpress.png';

const data = [
  {
    id: 1,
    imgSrc: Node,
    altText: 'Node JS',
    title: 'Server Side Development',
    text:
      'Orchestrate server-side node.js development that is efficient and performant that would handle incoming traffic to make your application highly available. We will build a stable application that is easily maintainable for future development on new features. Follow best security practices and cryptography to keep your applications secure.Improve existing node.js applications to be maintainable and documented for developer training. Fix security vulnerabilities in existing applications. Implement minor testing or use test driven development to ensure you have a suite that will make sure new features will work 99% of time.',
  },
  {
    id: 2,
    imgSrc: ricon,
    altText: 'React',
    title: 'React Client Side Development',
    text:
      'Our team will build modern Single Page Applications that would improve app performance. implement best practices to ensure your app is maintainable and expandable',
  },
  {
    id: 3,
    imgSrc: Shopify,
    altText: 'Shopify',
    title: 'Shopify ClientSide Development',
    text:
      'Develop interactive and competent e-commerce stores that would drive sales and revenue. We use a variety of plugins to improve search engine optimization, and a aesthetic that would bring more customers to your site. Our team will edit existing shopify themes that currently in use to follow ui/ux best practices to bring more traffic.',
  },
  {
    id: 4,
    imgSrc: wordpress,
    altText: 'WordPress Client',
    title: 'WordPress Client Side development',
    text:
      'Our team will design and implement aesthetically pleasing websites. Implement plugins and themes to boost website sales and user traffic. Use search engine optimization to get more users visiting your site.',
  },
];



export default function TextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = '#',
}) {
  return (
    <h1>TextFeature</h1>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px'],
    },
    title: {
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
    },
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px',
  },
};
